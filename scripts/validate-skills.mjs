#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const failures = [];
const warn = (file, message) => failures.push(file + ": " + message);
const exists = (file) => fs.existsSync(file);

function readJson(relativePath) {
  const fullPath = path.join(ROOT, relativePath);
  try {
    return JSON.parse(fs.readFileSync(fullPath, "utf8"));
  } catch (error) {
    warn(relativePath, "cannot read valid JSON (" + error.message + ")");
    return null;
  }
}

function walk(relativeDir) {
  const fullDir = path.join(ROOT, relativeDir);
  if (!exists(fullDir)) return [];
  const files = [];
  for (const entry of fs.readdirSync(fullDir, { withFileTypes: true })) {
    const relative = path.posix.join(relativeDir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name !== ".git" && entry.name !== "node_modules") files.push(...walk(relative));
    } else if (entry.isFile()) {
      files.push(relative);
    }
  }
  return files;
}

function parseScalar(value) {
  const trimmed = value.trim();
  if (trimmed.startsWith('"')) {
    try {
      const parsed = JSON.parse(trimmed);
      return typeof parsed === "string" ? parsed : "";
    } catch {
      return "";
    }
  }
  if (trimmed.startsWith("'")) {
    if (!trimmed.endsWith("'")) return "";
    return trimmed.slice(1, -1).replace(/''/g, "'");
  }
  return trimmed;
}

function parseSkillFrontmatter(relativePath, content) {
  const match = /^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/.exec(content);
  if (!match) {
    warn(relativePath, "missing YAML frontmatter delimiters");
    return null;
  }
  const fields = new Map();
  for (const line of match[1].split(/\r?\n/)) {
    if (!line.trim() || line.trimStart().startsWith("#")) continue;
    const field = /^\s*([A-Za-z][A-Za-z0-9_-]*)\s*:\s*(.*?)\s*$/.exec(line);
    if (!field) {
      warn(relativePath, "unsupported frontmatter line: " + line);
      continue;
    }
    const key = field[1];
    if (key !== "name" && key !== "description") warn(relativePath, "unsupported frontmatter field: " + key);
    if (fields.has(key)) warn(relativePath, "duplicate frontmatter field: " + key);
    fields.set(key, parseScalar(field[2]));
  }
  if (fields.size !== 2 || !fields.get("name") || !fields.get("description")) {
    warn(relativePath, "frontmatter must contain one non-empty name and description");
  }
  return { name: fields.get("name") || "", description: fields.get("description") || "" };
}

function markdownLinks(relativePath, content) {
  const expression = /!?\[[^\]]*\]\(([^)]+)\)/g;
  let match;
  while ((match = expression.exec(content)) !== null) {
    let destination = match[1].trim();
    if (destination.startsWith("<")) {
      const closing = destination.indexOf(">");
      if (closing >= 0) destination = destination.slice(1, closing);
    } else {
      destination = destination.split(/\s+/)[0];
    }
    if (!destination || destination.startsWith("#") || destination.startsWith("//")) continue;
    if (/^[A-Za-z][A-Za-z0-9+.-]*:/.test(destination)) continue;
    destination = destination.split(/[?#]/, 1)[0];
    if (!destination) continue;
    try {
      destination = decodeURIComponent(destination);
    } catch {
      warn(relativePath, "invalid URL encoding in relative link: " + destination);
      continue;
    }
    const target = destination.startsWith("/")
      ? path.resolve(ROOT, destination.slice(1))
      : path.resolve(ROOT, path.dirname(relativePath), destination);
    if (target !== ROOT && !target.startsWith(ROOT + path.sep)) {
      warn(relativePath, "relative link escapes repository: " + destination);
    } else if (!exists(target)) {
      warn(relativePath, "broken relative link: " + destination);
    }
  }
}

const skillsRoot = ".agents/skills";
const skillRootFull = path.join(ROOT, skillsRoot);
if (!exists(skillRootFull)) {
  warn(skillsRoot, "skill directory is missing");
  process.exitCode = 1;
} else {
  const directories = fs.readdirSync(skillRootFull, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort();
  const directoryNames = new Set(directories);
  const catalog = readJson("catalog/skills.json");
  const sourceCatalog = readJson("catalog/sources.json");
  const indexPath = "SKILL_INDEX.md";
  const sourceRegisterPath = "SOURCES.md";
  const index = exists(path.join(ROOT, indexPath)) ? fs.readFileSync(path.join(ROOT, indexPath), "utf8") : "";
  const sourceRegister = exists(path.join(ROOT, sourceRegisterPath)) ? fs.readFileSync(path.join(ROOT, sourceRegisterPath), "utf8") : "";
  const sources = Array.isArray(sourceCatalog?.sources) ? sourceCatalog.sources : [];
  const sourceIds = new Set();
  for (const source of sources) {
    if (!source?.id) warn("catalog/sources.json", "source entry has no id");
    else if (sourceIds.has(source.id)) warn("catalog/sources.json", "duplicate source id: " + source.id);
    else sourceIds.add(source.id);
  }

  const catalogSkills = Array.isArray(catalog?.skills) ? catalog.skills : [];
  const catalogNames = new Set();
  for (const skill of catalogSkills) {
    if (!skill?.name) {
      warn("catalog/skills.json", "skill entry has no name");
      continue;
    }
    if (catalogNames.has(skill.name)) warn("catalog/skills.json", "duplicate skill name: " + skill.name);
    catalogNames.add(skill.name);
    if (skill.path !== skillsRoot + "/" + skill.name) warn("catalog/skills.json", skill.name + " has an unexpected package path");
    if (!directoryNames.has(skill.name)) warn("catalog/skills.json", "catalog entry has no package directory: " + skill.name);
    if (!Array.isArray(skill.sourceIds)) warn("catalog/skills.json", skill.name + " sourceIds must be an array");
    else for (const id of skill.sourceIds) if (!sourceIds.has(id)) warn("catalog/skills.json", skill.name + " references unknown source id: " + id);
    if (!Array.isArray(skill.references)) warn("catalog/skills.json", skill.name + " references must be an array");
    else for (const ref of skill.references) {
      const fullPath = path.resolve(ROOT, skillsRoot, skill.name, ref);
      if (!fullPath.startsWith(path.resolve(ROOT, skillsRoot, skill.name) + path.sep) || !exists(fullPath)) {
        warn("catalog/skills.json", skill.name + " has a missing or escaping reference: " + ref);
      }
    }
    if (!index.includes("(.agents/skills/" + skill.name + "/SKILL.md)")) {
      warn(indexPath, "missing package link for " + skill.name);
    }
  }

  if (catalogNames.size !== directories.length) warn("catalog/skills.json", "catalog and package directory counts differ");
  if (catalog?.counts?.skills !== directories.length) warn("catalog/skills.json", "counts.skills does not match package directories");
  for (const name of directories) {
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(name)) warn(skillsRoot, "invalid package directory name: " + name);
    if (!catalogNames.has(name)) warn("catalog/skills.json", "package is missing from catalog: " + name);
    const relativePath = skillsRoot + "/" + name + "/SKILL.md";
    const fullPath = path.join(ROOT, relativePath);
    if (!exists(fullPath)) {
      warn(relativePath, "required skill file is missing");
      continue;
    }
    const content = fs.readFileSync(fullPath, "utf8");
    const lines = content.split(/\r?\n/).length;
    if (lines >= 500) warn(relativePath, "SKILL.md must be below 500 lines (found " + lines + ")");
    const frontmatter = parseSkillFrontmatter(relativePath, content);
    if (frontmatter?.name !== name) warn(relativePath, "frontmatter name does not match package directory");
    markdownLinks(relativePath, content);
  }

  if (sourceIds.size !== sources.length) warn("catalog/sources.json", "source ids are not unique");
  const tick = String.fromCharCode(96);
  for (const id of sourceIds) {
    if (!sourceRegister.includes("| " + tick + id + tick + " |")) {
      warn(sourceRegisterPath, "source catalog id is missing from register: " + id);
    }
  }

  for (const relativePath of walk(".")) {
    if (relativePath.endsWith(".md")) {
      markdownLinks(relativePath, fs.readFileSync(path.join(ROOT, relativePath), "utf8"));
    }
  }
}

if (failures.length) {
  console.error("Skillsmo validation failed with " + failures.length + " issue(s):");
  for (const failure of failures) console.error(" - " + failure);
  process.exitCode = 1;
} else {
  const skillCount = fs.readdirSync(skillRootFull, { withFileTypes: true }).filter((entry) => entry.isDirectory()).length;
  const sourceCatalog = readJson("catalog/sources.json");
  console.log("Skillsmo validation passed: " + skillCount + " skill packages; " + sourceCatalog.sources.length + " sources; metadata, references, and local Markdown links are consistent.");
}

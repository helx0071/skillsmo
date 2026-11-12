# Skillsmo curation workflow

Skillsmo is an independent library of installable skills. Keep it focused on reusable task instructions; do not add agent definitions, personas, profiles, or orchestration teams.

## 1. Define the task gap
- State recurring user outcome, prerequisites, expected artifacts, and non-goals.
- Review [SKILL_INDEX.md](../SKILL_INDEX.md) for duplicates and adjacent coverage.
- Decide whether to add, merge, split, revise, or remove a package.
- Keep skill content separate from host-specific agent configuration.

## 2. Research broadly; verify narrowly
- Discover candidates through registries, public code search, community indexes, and recommendations.
- Treat popularity and directory inclusion as discovery signals, not proof of correctness.
- Verify material claims against official documentation, standards, specifications, or the exact upstream source.
- Inspect source path, relevant commit, license file, folder-level notices, examples, scripts, datasets, media, and dependencies.
- Pin repositories to immutable revisions and record date, evidence, adoption, rejection, and uncertainty.

## 3. Compare useful patterns

Compare trigger precision, workflow order, decisions, failure handling, report quality, tools, host assumptions, accuracy, accessibility, security, privacy, currentness, overlap, and license scope. State which ideas were useful and which were rejected. Use primary references for changing technical behavior.

## 4. Choose the package shape and write independently
- Start with `.agents/skills/<skill-name>/SKILL.md` and only the `name` and `description` frontmatter fields.
- Put trigger guidance in the description. Write an ordered workflow with decisions, boundaries, failure paths, and observable completion.
- Add references only for useful, task-specific detail. Add scripts only for deterministic repeated work; add assets or examples only when the task needs them.
- For every optional file, record its user value, runtime/dependency needs, and rights basis. Do not create empty or decorative folders.
- Follow the detailed [package anatomy and authoring guide](skill-authoring-guide.md).

## 5. Update the collection as one change

Update the package, [index](../SKILL_INDEX.md), [skill catalog](../catalog/skills.json), [source catalog](../catalog/sources.json), [source register](../SOURCES.md), install notes, and relevant research documentation together. Remove obsolete paths and repair links.

## 6. Audit and evaluate
- Run the dependency-free repository validator with node scripts/validate-skills.mjs. It checks frontmatter, package names, catalogs, source IDs, references, and local Markdown links.
- Evaluate triggering and task outcomes separately for each claimed host/version.
- Use ordinary, ambiguous, edge, and out-of-scope requests; retain evidence and limitations.
- Keep a package experimental until evidence supports a stronger status.

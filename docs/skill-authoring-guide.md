# Skill package structure and authoring guide

**Reviewed:** 2026-11-12  
**Scope:** Skillsmo packages under .agents/skills/.  
**Project boundary:** Skillsmo contains reusable skills only. Do not add agent profiles, personas, team roles, or orchestration systems.

## Why some skills have more folders

The format is folder-based. A skill requires a SKILL.md; supporting folders are optional. Projects add references, scripts, assets, or examples when those files help the specific workflow. A folder-rich package is not automatically better, and a one-file package is not automatically incomplete.

Typical reasons for extra files:

- A long or conditional reference belongs outside the main instructions so an agent reads it only when needed.
- A repeatable operation can be made more reliable with a deterministic helper script.
- A reusable template, fixture, image, or other input is required to produce the requested result.
- Examples or tests demonstrate behavior that is hard to explain with instructions alone.

Each file adds maintenance, portability, and rights questions. Add it only when the workflow gains a clear, explainable benefit.

## Skillsmo's current package shape

The audited tree contains 77 packages. Each package has:

    .agents/skills/<name>/
      SKILL.md
      references/
        field-guide.md
        source-notes.md

The field guide provides additional task-specific review questions and edge cases. The source notes explain provenance, adopted and rejected ideas, and rights considerations for maintainers. Every SKILL.md links to both files and explains when each is useful.

The collection currently has no package-level scripts, assets, or examples. This reflects the current package design; it is not a format limitation. Most instructions describe judgment-led workflows that rely on the target project's own tools and files. Bundling a helper or sample without a clear task benefit would add dependencies or rights obligations without improving the skill.

A full static audit found that all 77 field guides repeat the same five generic review questions and one generic reporting paragraph. Their practical-focus sections are task-specific. This is a known cleanup item: revise or remove generic material when each guide is next reviewed, and keep future guides useful for their own task.

## Decide which files belong in a package

| File or folder | Add it when | Avoid it when | Minimum review |
|---|---|---|---|
| SKILL.md | Always. It defines activation, goal, workflow, decisions, boundaries, and completion evidence. | Do not turn it into an agent persona, a broad reference manual, or a prompt dump. | Keep the frontmatter valid, the task boundary clear, and the file below 500 lines. |
| references/ | A topic-specific guide, checklist, schema, or technical detail is too long or only needed for a subset of tasks. Link it from SKILL.md and say when to read it. | It only repeats the main instructions or generic advice. | Keep references one level deep, specific, current, and reachable from the skill. |
| scripts/ | A step is deterministic, repeated, and more reliable to run than to ask the agent to recreate. | The work requires judgment, the script merely wraps one obvious command, or the target environment cannot run it. | Document runtime, dependencies, inputs, outputs, errors, supported systems, side effects, and safe use. Exercise it with representative fixtures before claiming it works. |
| assets/ | A reusable template, starter file, diagram, or other material is directly used to create the skill's output. | The file is decorative, duplicative, large without value, or copied from an upstream project without confirmed rights. | Review exact file-level rights, notices, attribution, format, size, and how the skill uses it. |
| examples/ or fixtures | Small original inputs and expected outputs make a workflow or verifier clearer. | They are filler, realistic private data, or copied demonstrations. | Keep them minimal, synthetic where possible, deterministic, and licensed for redistribution. |

Do not create empty folders. Do not add files just because a source project has similarly named folders. Keep host evaluation cases and repository-wide validation outside installable skill folders unless the task truly needs them at runtime.

## Authoring rules

### SKILL.md

- Use one lowercase kebab-case directory name and the same name in the frontmatter.
- Keep frontmatter to the supported name and description fields used by this collection.
- Make the description state the task and concrete situations that should activate it.
- Write an ordered workflow with decisions, recovery paths, and observable completion evidence.
- State prerequisites and meaningful non-goals. Separate inspected facts, inferences, and unknowns.
- Keep instructions independent from agent identities and avoid unsupported claims about any host.
- Keep SKILL.md concise and under 500 lines. Move only useful, optional detail into references.

### Supporting references

- Link each reference directly from SKILL.md, with a brief instruction about when to open it.
- Make the field guide add task-specific checks or judgment. Do not repeat the same generic checklist and report format across skills.
- Use source notes for provenance and maintenance. They should explain source revision, license or notice, ideas adopted or rejected, and remaining uncertainty.
- Do not make references depend on a chain of nested references. Keep the package understandable when the user opens its folder.

### Scripts

Before adding a script, write down which workflow step it improves and why existing instructions or tools are insufficient. Prefer small, deterministic helpers with explicit arguments and stable outputs. Fail with actionable messages; do not silently continue after partial failure. Never embed credentials. Avoid network access and destructive writes by default. Require explicit destinations and preserve source files. Declare system and package dependencies instead of assuming they exist.

Run a helper only in a supported environment and retain a small fixture or reproducible invocation. Record what was checked and what remains host-dependent. A script that is present is not evidence that the agent host can invoke it.

### Assets and examples

Include only material that the skill itself needs. Create original, minimal assets where possible. For third-party material, review the exact file, revision, applicable license, exceptions, and attribution before redistribution; a repository-wide license may not cover examples or media. Record the decision in package source notes and the central source register. See the licensing guide.

### Research and maturity

Research a candidate's workflow and claims; do not copy its instructions, prompts, examples, code, data, or media by default. Prefer current official documentation for changing technical behavior. Pin repository research to an immutable revision and distinguish a source's license from permission to copy all of its files.

Keep static format checks separate from host installation and task evaluation. A skill remains experimental until evidence supports a named host and version. Do not claim general compatibility from one successful install.

## Adding or revising a package

1. Define the recurring user task, trigger, expected result, prerequisites, risks, and non-goals.
2. Search the skill index and catalog for overlap. Revise or merge before adding a near-duplicate.
3. Research authoritative guidance and candidate projects. Record exact revisions, rights, useful ideas, rejected patterns, and open questions.
4. Decide the package file list before writing. For every optional file, state its user-facing or maintenance value.
5. Write original instructions and only the references, scripts, assets, or examples justified by that plan.
6. Review scope, safety, portability, links, line count, licenses, and dependency declarations.
7. Evaluate representative ordinary, ambiguous, edge, failure, and out-of-scope requests in each host for which a claim is planned.
8. Update the skill index, machine-readable catalogs, source register, relevant docs, and implementation status together.
9. Report evidence and limitations. Keep status experimental until the acceptance evidence exists.

Use [CONTRIBUTING.md](../CONTRIBUTING.md), the [curation workflow](curation-workflow.md), the [quality bar](quality-bar.md), and the [implementation roadmap](roadmap.md) with this guide.

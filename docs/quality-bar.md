# Skillsmo package quality bar

Use this checklist for every new or materially changed package. A package is a focused task workflow, not a prompt dump or a general-purpose persona. Optional files are not required by the format; use the [package anatomy and authoring guide](skill-authoring-guide.md) to decide whether they belong.

## Scope and trigger

- [ ] One reusable outcome with a concrete activation context.
- [ ] Unique lowercase kebab-case package name.
- [ ] Description states what the skill does and when it applies.
- [ ] Skill instructions only; no agent profile, persona, team role, or orchestration definition.
- [ ] Scope, prerequisites, expected result, and non-goals are clear.

## Useful behavior

- [ ] Workflow has a practical order, meaningful decisions, and recovery paths.
- [ ] It respects project conventions and distinguishes inspection from writes or external actions.
- [ ] It addresses validation, denials, duplicate actions, failures, and recovery when relevant.
- [ ] Completion asks for observable evidence and states limitations.
- [ ] Claims do not exceed the work that was actually inspected or verified.
- [ ] It avoids generic model knowledge unless it adds task-specific value.

## Format and documentation

- [ ] Frontmatter contains only valid `name` and `description` fields.
- [ ] `SKILL.md` is concise and below 500 lines.
- [ ] Optional details are in directly linked, one-level references.
- [ ] Field guides add task-specific judgment rather than restating the main instructions.
- [ ] Source notes distinguish adopted ideas, rejected approaches, and unresolved questions.
- [ ] The repository validator passes for frontmatter, package paths, catalogs, source IDs, references, and relative Markdown links.
- [ ] Relative links, paths, source IDs, index entries, and catalog records resolve.
- [ ] Each optional reference, script, asset, or example has a task-specific reason and an explicit use path.
- [ ] Scripts document runtime, dependencies, inputs, outputs, errors, and side effects and are exercised in the claimed environment.
- [ ] Third-party assets and examples have file-level rights review and required notices.
- [ ] Field guides add task-specific judgment instead of repeated generic checklist/report boilerplate.

## Research, rights, and provenance

- [ ] Changing technical and policy claims point to current primary sources.
- [ ] Repository inputs are pinned to exact revisions where possible.
- [ ] Relevant package paths, licenses, notices, exceptions, and dependencies are checked.
- [ ] Upstream text, prompts, examples, scripts, datasets, media, and assets are excluded unless reuse is explicitly reviewed and documented.
- [ ] Research-only, adopted, and rejected sources are accurately described.

## Maturity and release

- [ ] Static format checks are reported separately from behavior evaluation.
- [ ] Evaluation identifies host/version, tasks, rubric, evidence, and limitations.
- [ ] Compatibility claims match observed discovery and use.
- [ ] Static validation is not presented as host discovery, tool execution, or task-quality evidence.
- [ ] License scope and third-party notices are reviewed before distribution.
- [ ] Public release checks include all reachable Git refs and relevant repository metadata, not just the working tree.

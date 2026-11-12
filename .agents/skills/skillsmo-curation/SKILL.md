---
name: skillsmo-curation
description: "Maintain Skillsmo as an independent, skills-only library of original, documented, installable skill packages. Use when adding, revising, auditing, or preparing this collection for distribution."
---

# Skillsmo library maintenance

## Goal

Keep every package focused, original, source-traceable, installable, and accurately described.

## Workflow

1. Define the user task and check the index for duplicates, overlap, and scope conflicts; keep the repository free of agent profiles and orchestration configurations.
2. Research broadly, then verify primary sources, exact repository paths, current revisions, license scope, third-party exceptions, and changing technical claims.
3. Write an original SKILL.md with `name` and `description` frontmatter, direct instructions, boundaries, output expectations, and linked references only where needed.
4. Update the field guide, source record, catalog, index, install documentation, and public-release status together; remove dead links and unsupported claims.
5. Run static frontmatter, path, link, source-ID, package-count, and scope checks; keep host behavior experimental until installation and task evaluation are recorded.

## Decision rules

- Treat source skills as research inputs and use the official documentation for current behavior.
- Do not copy upstream wording, examples, scripts, datasets, prompts, or assets without an explicit rights review.
- Prefer fewer focused packages over overlapping skills that trigger on the same vague request.

## Boundaries

- Do not add agents, personas, team roles, or project-specific agent files to the skill library.
- Do not state public-ready until the root license, history, rights review, and install behavior are resolved.
- Do not claim a host works until tested in that host.

## Completion standard

Return the requested artifact or findings with enough evidence for a reviewer to understand what changed, what was checked, and what remains uncertain. Distinguish observed facts, inferred risks, and unverified assumptions. Keep the scope tied to the user's request.

## Further reading

- [Field guide](references/field-guide.md) — use for task-specific review questions and edge cases.
- [Source and rights notes](references/source-notes.md) — use when maintaining this package or reviewing its provenance.

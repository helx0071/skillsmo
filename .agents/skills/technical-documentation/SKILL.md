---
name: technical-documentation
description: "Write or update technical documentation that helps a reader use, operate, integrate, or maintain a system. Use for READMEs, API guides, setup instructions, runbooks, architecture notes, and migration docs."
---

# Technical documentation

## Goal

Make instructions accurate, navigable, and verifiable for the intended reader.

## Workflow

1. Identify audience, task, prerequisites, supported versions, and what the reader should be able to accomplish.
2. Inspect the implementation, configuration, tests, official sources, and existing docs; confirm details before writing.
3. Organize the document around the reader's task, with prerequisites, ordered steps, examples, outcomes, failure recovery, and links.
4. Check commands, paths, headings, relative links, code blocks, and version claims against the current repository.
5. Review for omissions, outdated details, accessibility, and clear ownership/update triggers.

## Decision rules

- Use a short README for orientation and linked guides for specialized workflows.
- Make examples copyable but safe; use placeholders instead of real credentials or destructive commands.
- State assumptions and unsupported cases near the instruction they qualify.

## Boundaries

- Do not invent behavior or mark an unverified command as tested.
- Do not publish internal addresses, secrets, or proprietary data.

## Completion standard

Return the requested artifact or findings with enough evidence for a reviewer to understand what changed, what was checked, and what remains uncertain. Distinguish observed facts, inferred risks, and unverified assumptions. Keep the scope tied to the user's request.

## Further reading

- [Field guide](references/field-guide.md) — use for task-specific review questions and edge cases.
- [Source and rights notes](references/source-notes.md) — use when maintaining this package or reviewing its provenance.

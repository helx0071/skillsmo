---
name: agent-skills-authoring
description: "Create or improve a portable Agent Skill for a recurring workflow, including its trigger, instructions, references, and validation plan. Use when authoring a reusable skill package."
---

# Agent skill authoring

## Goal

Encode task-specific knowledge in a small package that an agent can discover and follow.

## Workflow

1. Define one recurring task, its user outcome, expected input/output, prerequisites, and nearby non-triggers.
2. Write concise YAML frontmatter with a stable name and a description that clearly states when the skill applies.
3. Order the body as an actionable procedure with decision points, stop conditions, failure handling, and an expected output.
4. Move optional detail to nearby references; use scripts only when deterministic execution adds value.
5. Review relative links, portability, rights, secret handling, and host-specific assumptions.

## Decision rules

- Keep the manifest small and let the description do the routing work.
- Use direct imperative instructions; omit general advice the host already knows.
- Test discovery and behavior separately from file-format checks.

## Boundaries

- Do not include agent profiles or assume one host's discovery path is universal.
- Do not copy protected prompts, code, examples, datasets, or assets without a rights decision.

## Completion standard

Return the requested artifact or findings with enough evidence for a reviewer to understand what changed, what was checked, and what remains uncertain. Distinguish observed facts, inferred risks, and unverified assumptions. Keep the scope tied to the user's request.

## Further reading

- [Field guide](references/field-guide.md) — use for task-specific review questions and edge cases.
- [Source and rights notes](references/source-notes.md) — use when maintaining this package or reviewing its provenance.

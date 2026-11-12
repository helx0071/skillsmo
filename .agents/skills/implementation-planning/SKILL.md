---
name: implementation-planning
description: "Convert a defined software request into a safe, reviewable implementation plan. Use before multi-file work, risky changes, migrations, or when acceptance criteria and dependencies need clarification."
---

# Implementation planning

## Goal

Make the smallest plan that covers user outcomes, constraints, dependencies, validation, and rollback.

## Workflow

1. Restate the requested outcome, scope, constraints, current state, and what is explicitly not being changed.
2. Inspect relevant files and project instructions; distinguish verified facts from assumptions.
3. Break work into ordered steps with owners if relevant, touched areas, dependencies, and observable acceptance checks.
4. Identify data, security, compatibility, migration, and external-action risks; add safeguards or decision gates.
5. Review the plan for unnecessary scope and missing validation, then present it in an actionable sequence.

## Decision rules

- Ask only when an unresolved choice materially affects scope, cost, data, or user outcome; otherwise state a reversible assumption.
- Separate investigation from implementation when evidence is not yet available.
- Use milestones for dependencies and a short checklist for a small task.

## Boundaries

- Do not silently expand scope or treat an inferred requirement as approved.
- Do not promise a test, deployment, migration, or review that has not been authorized or performed.

## Completion standard

Return the requested artifact or findings with enough evidence for a reviewer to understand what changed, what was checked, and what remains uncertain. Distinguish observed facts, inferred risks, and unverified assumptions. Keep the scope tied to the user's request.

## Further reading

- [Field guide](references/field-guide.md) — use for task-specific review questions and edge cases.
- [Source and rights notes](references/source-notes.md) — use when maintaining this package or reviewing its provenance.

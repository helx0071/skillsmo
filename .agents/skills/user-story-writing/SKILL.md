---
name: user-story-writing
description: "Write or refine user stories, scenarios, and acceptance criteria for a software feature. Use when a request must be understandable to product, engineering, design, and QA."
---

# User story and acceptance criteria

## Goal

Describe user value and observable system behavior in a way that supports design and implementation.

## Workflow

1. Identify the primary user, goal, context, and reason the outcome matters.
2. Write a short story or outcome statement; do not embed a technical implementation unless it is a real constraint.
3. Add acceptance scenarios for normal behavior, permissions, invalid input, failures, and recovery.
4. Define terminology, data rules, scope, non-goals, and dependencies; surface ambiguous choices.
5. Review the criteria with a representative user or owner and ensure each can be demonstrated.

## Decision rules

- Use stories for value and scenarios for concrete behavior; don't force a template on a technical chore.
- Split work when independent outcomes can be accepted and released separately.
- State accessibility, privacy, and performance needs when they materially affect success.

## Boundaries

- Do not invent personas, business rules, or metrics.
- Do not describe a UI control as the full requirement when underlying behavior is unspecified.

## Completion standard

Return the requested artifact or findings with enough evidence for a reviewer to understand what changed, what was checked, and what remains uncertain. Distinguish observed facts, inferred risks, and unverified assumptions. Keep the scope tied to the user's request.

## Further reading

- [Field guide](references/field-guide.md) — use for task-specific review questions and edge cases.
- [Source and rights notes](references/source-notes.md) — use when maintaining this package or reviewing its provenance.

---
name: decision-records
description: "Capture or update an engineering decision with its context, options, trade-offs, consequences, and review triggers. Use when a choice is durable, affects multiple components, or would be costly to rediscover."
---

# Technical decision records

## Goal

Make the reasoning and consequences of an important decision clear to future contributors.

## Workflow

1. State the problem, constraints, stakeholders, and the decision that needs to be made.
2. Identify feasible options, including keeping the current design when appropriate; collect evidence for each.
3. Compare options against explicit criteria such as reliability, complexity, cost, security, migration effort, and reversibility.
4. Record the chosen option, rejected alternatives, consequences, follow-up work, and conditions that would reopen the decision.
5. Link the record to affected code, plans, and earlier decisions; mark its status and date.

## Decision rules

- Use a lightweight record for a small reversible choice and a fuller comparison for a consequential choice.
- Separate observed facts from assumptions and preferences.
- Keep the record append-oriented: supersede an old decision instead of silently rewriting history.

## Boundaries

- Do not manufacture consensus or cite discussions that were not provided.
- Do not record secrets, private personal details, or unsupported cost estimates.

## Completion standard

Return the requested artifact or findings with enough evidence for a reviewer to understand what changed, what was checked, and what remains uncertain. Distinguish observed facts, inferred risks, and unverified assumptions. Keep the scope tied to the user's request.

## Further reading

- [Field guide](references/field-guide.md) — use for task-specific review questions and edge cases.
- [Source and rights notes](references/source-notes.md) — use when maintaining this package or reviewing its provenance.

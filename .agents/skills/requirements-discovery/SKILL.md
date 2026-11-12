---
name: requirements-discovery
description: "Clarify a software request before implementation by identifying user goals, constraints, expected behavior, and unresolved decisions. Use when a task is vague, cross-functional, or likely to produce costly rework."
---

# Requirements discovery

## Goal

Turn an ambiguous request into a shared, testable description of the desired outcome.

## Workflow

1. Capture who needs what outcome and why; preserve the user's terminology and known context.
2. Identify actors, triggers, inputs, outputs, business rules, edge cases, permissions, failure recovery, and nonfunctional constraints.
3. Separate confirmed facts from assumptions and unknowns; inspect existing product behavior when available.
4. Ask only high-impact questions; for lower-risk gaps, state a reversible assumption and invite correction.
5. Write acceptance examples and exclusions, then confirm the scope is implementable and testable.

## Decision rules

- Ask a question when alternatives change user outcome, data, access, cost, or irreversible behavior.
- Use concrete examples and counterexamples to resolve overloaded terms.
- Keep future ideas separate from current acceptance criteria.

## Boundaries

- Do not invent policy, prices, roles, or business rules when they are unknown.
- Do not turn a solution suggestion into a requirement without user agreement.

## Completion standard

Return the requested artifact or findings with enough evidence for a reviewer to understand what changed, what was checked, and what remains uncertain. Distinguish observed facts, inferred risks, and unverified assumptions. Keep the scope tied to the user's request.

## Further reading

- [Field guide](references/field-guide.md) — use for task-specific review questions and edge cases.
- [Source and rights notes](references/source-notes.md) — use when maintaining this package or reviewing its provenance.

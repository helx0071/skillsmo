---
name: codebase-research
description: "Investigate an unfamiliar repository or feature before planning, debugging, or reviewing a change. Use when behavior, architecture, or ownership is unclear."
---

# Codebase research

## Goal

Build an evidence-backed map of relevant code without making unnecessary edits.

## Workflow

1. Read repository guidance, manifests, entry points, and the user's target area.
2. Trace a narrow vertical path through routes, components, services, data access, and configuration.
3. Search symbols and call sites; inspect tests and runtime scripts that explain behavior.
4. Record confirmed behavior, dependencies, assumptions, gaps, and paths/line references.
5. Summarize the smallest relevant architecture map and recommend the next evidence-gathering step.

## Decision rules

- Start with the user-reported path and expand only when evidence requires it.
- Use source and tests to confirm behavior; treat docs as possibly stale.
- Separate observed facts from hypotheses.

## Boundaries

- Do not dump large repository inventories or copy secrets into reports.
- Do not infer runtime behavior from names or folder structure alone.

## Completion standard

Return the requested artifact or findings with enough evidence for a reviewer to understand what changed, what was checked, and what remains uncertain. Distinguish observed facts, inferred risks, and unverified assumptions. Keep the scope tied to the user's request.

## Further reading

- [Field guide](references/field-guide.md) — use for task-specific review questions and edge cases.
- [Source and rights notes](references/source-notes.md) — use when maintaining this package or reviewing its provenance.

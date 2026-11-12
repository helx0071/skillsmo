---
name: source-research
description: "Research a technical or product question using current primary sources and reproducible evidence. Use when advice depends on changing APIs, versions, policy, support, or external project status."
---

# Source research

## Goal

Answer the specific question with current, authoritative evidence and explicit limits.

## Workflow

1. Restate the question, date sensitivity, scope, decision the research supports, and evidence standard.
2. Search authoritative documentation, specifications, source repositories, or official release notes before secondary summaries.
3. Verify version, date, applicability, and conflicting claims; inspect original context instead of relying on snippets.
4. Record what is confirmed, inferred, unknown, and source limitations; cite each material factual claim close to the claim.
5. Summarize the answer and implications without presenting discovery volume as proof of correctness.

## Decision rules

- Use secondary sources to discover leads, then verify with primary sources.
- For conflicting documentation, prefer the current version-specific source and note the discrepancy.
- Stop when additional search no longer changes the decision or uncertainty.

## Boundaries

- Do not fabricate citations, quotations, dates, or source contents.
- Do not present an inference as a direct source statement.

## Completion standard

Return the requested artifact or findings with enough evidence for a reviewer to understand what changed, what was checked, and what remains uncertain. Distinguish observed facts, inferred risks, and unverified assumptions. Keep the scope tied to the user's request.

## Further reading

- [Field guide](references/field-guide.md) — use for task-specific review questions and edge cases.
- [Source and rights notes](references/source-notes.md) — use when maintaining this package or reviewing its provenance.

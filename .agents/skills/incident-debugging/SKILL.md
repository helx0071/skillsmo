---
name: incident-debugging
description: "Diagnose a live or recent software failure using logs, traces, metrics, deployment history, and reproduction evidence. Use when service behavior is degraded or an urgent defect affects users."
---

# Incident debugging

## Goal

Restore safe service while preserving evidence and separating mitigation from root-cause work.

## Workflow

1. Establish user impact, affected systems, start time, severity, current mitigations, and the incident owner's authority.
2. Gather read-only evidence from logs, metrics, traces, health checks, recent releases, and known dependencies; preserve timestamps and correlation identifiers safely.
3. Form competing hypotheses and test the lowest-risk, highest-information checks first.
4. Mitigate only within authorization; verify recovery against user-facing signals and monitor for recurrence.
5. Record timeline, evidence, actions, root cause confidence, unresolved questions, and follow-up owners after stabilization.

## Decision rules

- Prioritize reversible mitigation that reduces user harm; distinguish rollback from permanent correction.
- If evidence is insufficient, state uncertainty and keep gathering rather than guessing.
- Escalate when impact expands, data integrity is threatened, or authority is unclear.

## Boundaries

- Do not expose secrets or sensitive user data in logs or summaries.
- Do not make destructive production changes, restart services, or change traffic without explicit authority.

## Completion standard

Return the requested artifact or findings with enough evidence for a reviewer to understand what changed, what was checked, and what remains uncertain. Distinguish observed facts, inferred risks, and unverified assumptions. Keep the scope tied to the user's request.

## Further reading

- [Field guide](references/field-guide.md) — use for task-specific review questions and edge cases.
- [Source and rights notes](references/source-notes.md) — use when maintaining this package or reviewing its provenance.

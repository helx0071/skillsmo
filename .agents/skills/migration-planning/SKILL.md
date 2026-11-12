---
name: migration-planning
description: "Plan a database, API, framework, runtime, or infrastructure migration before changing production-facing behavior. Use when compatibility, data transformation, or rollout order matters."
---

# Software and data migration planning

## Goal

Make migration steps reversible where possible and define how correctness will be established at each stage.

## Workflow

1. Define the source and target versions, affected clients/data, business constraints, downtime tolerance, and success conditions.
2. Inventory schema, callers, data volume, compatibility assumptions, operational dependencies, and rollback options.
3. Design staged changes such as expand-migrate-contract; identify backfills, dual-read/write windows, and compatibility periods if needed.
4. Estimate risk from evidence and specify preflight, monitoring, stop conditions, and a rollback or forward-fix path.
5. Sequence the rollout and validation, assign owners, and mark irreversible actions and approval gates clearly.

## Decision rules

- Prefer additive compatibility steps before destructive cleanup.
- Use dual writes only with reconciliation and a defined end date.
- Choose rollback versus forward repair based on whether the migration preserves data and old-code compatibility.

## Boundaries

- Do not run a production migration or alter user data without explicit authorization.
- Do not claim rollback is possible until dependencies and data transformations have been checked.

## Completion standard

Return the requested artifact or findings with enough evidence for a reviewer to understand what changed, what was checked, and what remains uncertain. Distinguish observed facts, inferred risks, and unverified assumptions. Keep the scope tied to the user's request.

## Further reading

- [Field guide](references/field-guide.md) — use for task-specific review questions and edge cases.
- [Source and rights notes](references/source-notes.md) — use when maintaining this package or reviewing its provenance.

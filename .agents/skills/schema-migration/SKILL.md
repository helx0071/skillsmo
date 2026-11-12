---
name: schema-migration
description: "Design, review, or implement a database schema migration. Use when adding, changing, or removing columns, indexes, constraints, relationships, or stored data."
---

# Database schema migration review

## Goal

Preserve data integrity and application availability while moving schema and code through compatible states.

## Workflow

1. Inspect migration framework, database engine/version, current schema, data shape, deployment order, and application versions that may coexist.
2. State the data invariant and how old and new application code will behave before, during, and after the migration.
3. Write an additive or staged migration when possible; account for backfill size, locks, defaults, indexes, nullability, and constraints.
4. Define preflight and post-migration checks, failure handling, rollback or forward repair, and cleanup criteria.
5. Test against representative schema/data and report what remains unverified for production scale.

## Decision rules

- Separate schema expansion, data backfill, code switch, and destructive contraction when compatibility matters.
- Use database constraints to enforce durable invariants, with safe validation timing.
- Estimate table size and lock impact from measured information rather than assuming trivial execution.

## Boundaries

- Do not run migrations against production without explicit authorization.
- Do not drop or rewrite data without a confirmed retention and recovery plan.

## Completion standard

Return the requested artifact or findings with enough evidence for a reviewer to understand what changed, what was checked, and what remains uncertain. Distinguish observed facts, inferred risks, and unverified assumptions. Keep the scope tied to the user's request.

## Further reading

- [Field guide](references/field-guide.md) — use for task-specific review questions and edge cases.
- [Source and rights notes](references/source-notes.md) — use when maintaining this package or reviewing its provenance.

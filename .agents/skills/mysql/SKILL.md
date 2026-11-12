---
name: mysql
description: "Design, query, migrate, or troubleshoot a MySQL-backed application. Use when dealing with schema, indexes, transactions, isolation, replication, backups, or MySQL-specific behavior."
---

# MySQL database workflow

## Goal

Base database changes on the deployed MySQL version and protect correctness under concurrency and failure.

## Workflow

1. Identify MySQL server version, storage engine, SQL mode, character set, connection settings, workload, and migration tooling.
2. Inspect schema, constraints, indexes, query plans, transaction boundaries, and application data assumptions.
3. Design the smallest change and validate nullability, uniqueness, collation, locking, foreign keys, and existing-row behavior.
4. Evaluate concurrent writes, transaction isolation, retry behavior, performance, and backup/restore implications.
5. Use read-only plan inspection or a safe test environment to verify; document production operational steps separately.

## Decision rules

- Check version-specific syntax and behavior before proposing a feature.
- Add indexes for demonstrated query patterns and account for write and storage cost.
- Use transactions for invariants that span multiple writes; handle deadlocks with bounded retry where appropriate.

## Boundaries

- Do not run DDL or data changes against production without explicit authorization.
- Do not infer a production data model from ORM classes alone.

## Completion standard

Return the requested artifact or findings with enough evidence for a reviewer to understand what changed, what was checked, and what remains uncertain. Distinguish observed facts, inferred risks, and unverified assumptions. Keep the scope tied to the user's request.

## Further reading

- [Field guide](references/field-guide.md) — use for task-specific review questions and edge cases.
- [Source and rights notes](references/source-notes.md) — use when maintaining this package or reviewing its provenance.

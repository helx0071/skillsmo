---
name: postgresql
description: "Design, query, migrate, or troubleshoot a PostgreSQL-backed application. Use for schema, indexes, constraints, transactions, row-level security, query plans, extensions, or backup concerns."
---

# PostgreSQL database workflow

## Goal

Use PostgreSQL-specific behavior carefully and preserve data, access, and concurrency invariants.

## Workflow

1. Identify PostgreSQL major version, extensions, connection pool, schema conventions, isolation level, and migration tool.
2. Inspect tables, constraints, indexes, policies, query plans, and application assumptions relevant to the requested change.
3. Design the smallest SQL change and evaluate null semantics, locking, generated values, RLS, and existing data.
4. Check concurrent transactions, retryable errors, pool limits, query performance, backup, and restore implications.
5. Verify in a representative non-production database; document migration order, version assumptions, and operational risks.

## Decision rules

- Match syntax and features to the deployed major version.
- Use constraints and transactions to enforce invariants at the database boundary when appropriate.
- Treat RLS policies as part of security behavior and test both allowed and denied roles.

## Boundaries

- Do not run production DDL or data edits without explicit authorization.
- Do not assume application filters replace database access policies.

## Completion standard

Return the requested artifact or findings with enough evidence for a reviewer to understand what changed, what was checked, and what remains uncertain. Distinguish observed facts, inferred risks, and unverified assumptions. Keep the scope tied to the user's request.

## Further reading

- [Field guide](references/field-guide.md) — use for task-specific review questions and edge cases.
- [Source and rights notes](references/source-notes.md) — use when maintaining this package or reviewing its provenance.

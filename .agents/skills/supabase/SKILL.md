---
name: supabase
description: "Build or review a Supabase feature involving Postgres, Auth, Storage, Edge Functions, Realtime, or Row Level Security. Use when data access and client/server boundaries must align."
---

# Supabase application workflow

## Goal

Keep database policies and server-side authorization aligned with the application's user and service roles.

## Workflow

1. Inspect Supabase project settings, Postgres version, Auth provider, client libraries, generated types, policies, and migration conventions.
2. Trace the feature from client or server call through JWT claims, RLS policies, database objects, storage policies, and response.
3. Use migrations as the schema source of truth; add explicit grants and RLS policies for exposed tables and operations.
4. Check service-role key isolation, anonymous/authenticated behavior, policy tests, realtime exposure, and edge-function limits.
5. Verify allowed and denied cases using realistic roles and report local versus hosted behavior separately.

## Decision rules

- Enable RLS where data is exposed through the API and define policies for each operation.
- Use service-role credentials only in trusted server environments.
- Treat Auth identity and database authorization as related but separate checks.

## Boundaries

- Never place service-role secrets in client-side bundles or public configuration.
- Do not assume a table is protected because the UI filters its rows.

## Completion standard

Return the requested artifact or findings with enough evidence for a reviewer to understand what changed, what was checked, and what remains uncertain. Distinguish observed facts, inferred risks, and unverified assumptions. Keep the scope tied to the user's request.

## Further reading

- [Field guide](references/field-guide.md) — use for task-specific review questions and edge cases.
- [Source and rights notes](references/source-notes.md) — use when maintaining this package or reviewing its provenance.

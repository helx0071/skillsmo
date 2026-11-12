---
name: convex
description: "Design, implement, or review a Convex application using its current schema, query, mutation, action, and authentication model. Use when changing Convex functions, data access, scheduling, file storage, or deployment behavior."
---

# Convex application workflow

## Goal

Keep data access validated, authorization explicit, and reactive behavior consistent with the current Convex project.

## Workflow

1. Inspect package versions, existing schema, function conventions, deployment targets, and auth provider before editing.
2. Trace the user operation from client call through function, data reads or writes, and returned shape; identify trust boundaries.
3. Use the narrowest function type and data access pattern that meets the need; validate arguments and enforce ownership or role checks at the server boundary.
4. Check index requirements, pagination, transaction behavior, retries, and side effects against current Convex documentation and local code.
5. Update focused tests or verification notes, then summarize changed functions, data effects, and deployment assumptions.

## Decision rules

- Follow installed Convex version and repository patterns; do not assume a hosted feature is enabled.
- Keep external side effects out of retryable logic unless they are idempotent or scheduled safely.
- Use schema validation and authorization checks even when the client already filters data.

## Boundaries

- Do not claim a deployment or production data change occurred unless observed.
- Do not expose secrets or use a production deployment for an unapproved experiment.

## Completion standard

Return the requested artifact or findings with enough evidence for a reviewer to understand what changed, what was checked, and what remains uncertain. Distinguish observed facts, inferred risks, and unverified assumptions. Keep the scope tied to the user's request.

## Further reading

- [Field guide](references/field-guide.md) — use for task-specific review questions and edge cases.
- [Source and rights notes](references/source-notes.md) — use when maintaining this package or reviewing its provenance.

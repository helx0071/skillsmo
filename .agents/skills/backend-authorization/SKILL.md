---
name: backend-authorization
description: "Design or review server-side authorization for users, roles, resources, tenants, and sensitive actions. Use when an API or job grants or denies access."
---

# Backend authorization design

## Goal

Enforce least privilege on every protected operation.

## Workflow

1. List principals, resources, actions, ownership rules, tenant boundaries, and trusted policy inputs.
2. Trace every server-side read, write, export, and background job that can access protected data.
3. Define deny-by-default behavior and object-level checks at the resource/action boundary.
4. Test allowed, unauthenticated, wrong-role, wrong-owner, cross-tenant, revoked, and alternate-route cases.
5. Review audit logging and policy changes for least privilege and sensitive-data exposure.

## Decision rules

- Verify identity claims before using them in policy decisions.
- Use database row-level security only when policy and service-role bypasses are understood.
- Check asynchronous and administrative paths, not just public HTTP handlers.

## Boundaries

- Do not infer permission from login state, hidden UI, or possession of an identifier.
- Do not expose data across tenants in errors, logs, caches, or exports.

## Completion standard

Return the requested artifact or findings with enough evidence for a reviewer to understand what changed, what was checked, and what remains uncertain. Distinguish observed facts, inferred risks, and unverified assumptions. Keep the scope tied to the user's request.

## Further reading

- [Field guide](references/field-guide.md) — use for task-specific review questions and edge cases.
- [Source and rights notes](references/source-notes.md) — use when maintaining this package or reviewing its provenance.

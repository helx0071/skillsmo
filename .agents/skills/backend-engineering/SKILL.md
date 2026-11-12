---
name: backend-engineering
description: "Design, implement, or review backend behavior for an application or service. Use for API routes, domain logic, persistence, authentication, background work, integrations, and reliability."
---

# Backend engineering workflow

## Goal

Deliver a backend change with explicit data authority, access rules, failure behavior, and operational evidence.

## Workflow

1. Inspect the service boundary, runtime and framework versions, data stores, auth model, caller expectations, and deployment conventions.
2. Trace the requested operation from entry point through validation, identity, authorization, domain rules, persistence, integrations, and response.
3. Define invariants and failure behavior; use constraints, transactions, idempotency, resource limits, and retries only where they fit the actual semantics.
4. Implement within existing architecture, keeping secrets server-side and external effects observable and bounded.
5. Verify success, denied access, invalid data, dependency failure, retries or duplicate delivery, and migration/rollout implications.

## Decision rules

- Keep authentication (who is calling) separate from authorization (what the caller may do).
- Enforce critical invariants at the most authoritative boundary, usually the service or database, not only the client.
- Use asynchronous processing when it improves reliability or latency and idempotency/recovery are defined.

## Boundaries

- Do not expose secrets or internal exceptions to clients.
- Do not claim a security or scalability property that has not been checked under the relevant configuration and workload.

## Completion standard

Return the requested artifact or findings with enough evidence for a reviewer to understand what changed, what was checked, and what remains uncertain. Distinguish observed facts, inferred risks, and unverified assumptions. Keep the scope tied to the user's request.

## Further reading

- [Field guide](references/field-guide.md) — use for task-specific review questions and edge cases.
- [Source and rights notes](references/source-notes.md) — use when maintaining this package or reviewing its provenance.

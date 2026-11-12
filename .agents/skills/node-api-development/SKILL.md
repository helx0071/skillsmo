---
name: node-api-development
description: "Build or review an HTTP API implemented on Node.js. Use when changing routes, request parsing, validation, middleware, database access, concurrency, errors, or shutdown behavior."
---

# Node.js API development

## Goal

Implement clear HTTP semantics with bounded resource use, safe input handling, and testable service boundaries.

## Workflow

1. Inspect Node version, framework, module system, package scripts, router structure, authentication, database access, and logging policy.
2. Trace an endpoint from request parsing through authentication, authorization, validation, domain operation, and response serialization.
3. Apply limits and timeouts to user-controlled inputs and remote operations; preserve HTTP status and header semantics.
4. Check concurrency, transactions, cancellation, error handling, graceful shutdown, and observability for the changed path.
5. Add focused tests for valid input, invalid input, forbidden access, dependency failure, and relevant duplicate or race cases.

## Decision rules

- Match Node and framework APIs to the installed versions.
- Keep transport concerns at the route boundary and business rules testable outside it where practical.
- Use streaming or pagination for potentially large results; bound request bodies and outbound work.

## Boundaries

- Do not return stack traces, secrets, or internal errors to clients.
- Do not treat CORS, hidden routes, or frontend checks as authentication or authorization.

## Completion standard

Return the requested artifact or findings with enough evidence for a reviewer to understand what changed, what was checked, and what remains uncertain. Distinguish observed facts, inferred risks, and unverified assumptions. Keep the scope tied to the user's request.

## Further reading

- [Field guide](references/field-guide.md) — use for task-specific review questions and edge cases.
- [Source and rights notes](references/source-notes.md) — use when maintaining this package or reviewing its provenance.

---
name: laravel
description: "Implement or review a feature in an existing Laravel application. Use when changing routes, middleware, controllers, validation, Eloquent models, queues, authorization, APIs, or tests."
---

# Laravel application workflow

## Goal

Fit the change to the installed Laravel version and use framework boundaries consistently.

## Workflow

1. Inspect the Laravel/PHP versions, route structure, service providers, auth model, database, queue setup, and project conventions.
2. Trace the request from route and middleware through validation, authorization, domain operation, persistence, and response.
3. Use the smallest suitable framework feature; validate input, authorize the action, and keep business rules out of transport glue where practical.
4. Check transactions, queued work, events, retries, serialization, and migration behavior for the affected path.
5. Add focused coverage for success, authorization denial, invalid input, and relevant failure or duplicate cases; summarize version assumptions.

## Decision rules

- Use installed-version documentation and project patterns; avoid blindly applying latest syntax.
- Prefer policies or gates for authorization intent and explicit request validation at the boundary.
- Use queue jobs only when latency, durability, and retry behavior justify asynchronous execution.

## Boundaries

- Do not expose model fields by default in API responses.
- Do not change production migrations, queue drivers, or secrets without authorization.

## Completion standard

Return the requested artifact or findings with enough evidence for a reviewer to understand what changed, what was checked, and what remains uncertain. Distinguish observed facts, inferred risks, and unverified assumptions. Keep the scope tied to the user's request.

## Further reading

- [Field guide](references/field-guide.md) — use for task-specific review questions and edge cases.
- [Source and rights notes](references/source-notes.md) — use when maintaining this package or reviewing its provenance.

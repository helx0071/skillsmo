---
name: python-api-development
description: "Build or review an HTTP API implemented in Python. Use when changing FastAPI, Flask, Django REST, request validation, async behavior, persistence, errors, or API tests."
---

# Python API development

## Goal

Implement predictable HTTP behavior with explicit validation, authorization, resource bounds, and dependency handling.

## Workflow

1. Inspect Python version, API framework, dependency manager, ASGI/WSGI setup, schema validation, auth, data layer, and test conventions.
2. Trace request parsing, authentication, authorization, validation, domain operation, persistence, and response serialization.
3. Use framework primitives consistent with the installed version; bound uploads, pagination, remote calls, and background work.
4. Check sync/async boundaries, connection lifetime, transaction behavior, cancellation, errors, and shutdown.
5. Add tests for successful and rejected requests plus relevant dependency failure, authorization, and duplicate-submission cases.

## Decision rules

- Use type hints and validation models at boundaries without treating type checking as runtime authorization.
- Avoid blocking operations on async request paths.
- Use a framework's dependency injection only where it clarifies lifecycle or shared policy.

## Boundaries

- Do not return debug tracebacks or sensitive validation context to clients.
- Do not treat Python typing, CORS, or router concealment as security controls.

## Completion standard

Return the requested artifact or findings with enough evidence for a reviewer to understand what changed, what was checked, and what remains uncertain. Distinguish observed facts, inferred risks, and unverified assumptions. Keep the scope tied to the user's request.

## Further reading

- [Field guide](references/field-guide.md) — use for task-specific review questions and edge cases.
- [Source and rights notes](references/source-notes.md) — use when maintaining this package or reviewing its provenance.

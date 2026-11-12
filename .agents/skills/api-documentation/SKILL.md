---
name: api-documentation
description: "Document an existing or proposed HTTP API for its actual consumers. Use when creating API reference docs, examples, authentication guidance, or migration notes."
---

# API documentation

## Goal

Make an API understandable without inventing behavior or exposing private implementation details.

## Workflow

1. Inspect the current OpenAPI document, handlers, tests, authentication model, and versioned conventions.
2. Document purpose, parameters, request/response schemas, auth requirements, status codes, error format, pagination, and rate limits when known.
3. Add minimal examples that match observed schemas and avoid real credentials or personal data.
4. Explain compatibility, deprecation, idempotency, and retry behavior where consumers need them.
5. Check every example against the contract and link to stable concepts instead of duplicating volatile details.

## Decision rules

- Use the OpenAPI document as the source of structured reference where it is authoritative.
- Separate confirmed behavior from recommendations or unverified limits.
- Write for the consumer's task rather than the server's code structure.

## Boundaries

- Do not promise undocumented guarantees or invent rate limits.
- Never publish secrets, internal hostnames, private customer data, or unsafe example credentials.

## Completion standard

Return the requested artifact or findings with enough evidence for a reviewer to understand what changed, what was checked, and what remains uncertain. Distinguish observed facts, inferred risks, and unverified assumptions. Keep the scope tied to the user's request.

## Further reading

- [Field guide](references/field-guide.md) — use for task-specific review questions and edge cases.
- [Source and rights notes](references/source-notes.md) — use when maintaining this package or reviewing its provenance.

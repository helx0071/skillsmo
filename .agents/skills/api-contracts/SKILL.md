---
name: api-contracts
description: "Design or change an HTTP API contract for new or existing consumers. Use when endpoints, schemas, errors, authentication, versioning, or compatibility are changing."
---

# HTTP API contract design

## Goal

Make request and response behavior explicit and evolvable.

## Workflow

1. Identify consumers, use cases, data sensitivity, compatibility constraints, and existing conventions.
2. Specify operations, path and query parameters, headers, request/response schemas, status codes, errors, authentication, and pagination.
3. Write invariants and edge cases including missing, invalid, duplicate, oversized, unauthorized, and concurrent requests.
4. Represent the contract in the project's OpenAPI version and validate references and schema behavior.
5. Review compatibility against real consumers and document migration or deprecation steps.

## Decision rules

- Model HTTP semantics from RFC 9110; use OpenAPI as the interface description.
- Prefer additive evolution, but verify whether consumers tolerate unknown fields and enum values.
- Do not encode business rules only in prose when they affect observable behavior.

## Boundaries

- Do not expose internal stack traces or sensitive fields in error responses.
- Do not call an undocumented implementation detail a stable contract.

## Completion standard

Return the requested artifact or findings with enough evidence for a reviewer to understand what changed, what was checked, and what remains uncertain. Distinguish observed facts, inferred risks, and unverified assumptions. Keep the scope tied to the user's request.

## Further reading

- [Field guide](references/field-guide.md) — use for task-specific review questions and edge cases.
- [Source and rights notes](references/source-notes.md) — use when maintaining this package or reviewing its provenance.

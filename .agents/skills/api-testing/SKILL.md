---
name: api-testing
description: "Plan or perform tests for HTTP API contracts, authorization, errors, retries, idempotency, and compatibility. Use when verifying an API boundary."
---

# HTTP API testing

## Goal

Find contract and trust-boundary failures with isolated, repeatable requests.

## Workflow

1. Inspect the API contract, implementation, test conventions, fixture strategy, and target environment.
2. Build a matrix from operations, roles, resource ownership, valid/invalid input, state transitions, retries, pagination, and rate limits.
3. Use isolated data and credentials; assert status, stable schema, headers, state changes, and absence of unauthorized side effects.
4. Test duplicate and concurrent requests where business invariants depend on exactly-once-like outcomes.
5. Record exact commands, environment, cleanup, failures, and any behavior that could not be tested.

## Decision rules

- Test the observable HTTP contract, not framework internals unless they are part of the contract.
- Cover negative authorization paths as deliberately as successful paths.
- Keep assertions stable against incidental error wording.

## Boundaries

- Do not use production credentials or mutate real customer data without explicit authorization.
- Do not claim deployed behavior from mock-only tests.

## Completion standard

Return the requested artifact or findings with enough evidence for a reviewer to understand what changed, what was checked, and what remains uncertain. Distinguish observed facts, inferred risks, and unverified assumptions. Keep the scope tied to the user's request.

## Further reading

- [Field guide](references/field-guide.md) — use for task-specific review questions and edge cases.
- [Source and rights notes](references/source-notes.md) — use when maintaining this package or reviewing its provenance.

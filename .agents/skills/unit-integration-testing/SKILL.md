---
name: unit-integration-testing
description: "Write or improve automated unit and integration tests around a defined behavior. Use when a bug, API, domain rule, persistence path, or component needs fast repeatable coverage."
---

# Unit and integration testing

## Goal

Cover the behavior and its important boundaries with deterministic, maintainable tests.

## Workflow

1. Identify the behavior, contract, expected state changes, dependencies, and existing test conventions.
2. Choose the unit boundary for local rules or the integration boundary for database, framework, or service interaction.
3. Arrange isolated test data and dependency behavior; include meaningful valid, invalid, authorization, and failure cases.
4. Assert observable results and durable invariants without mirroring implementation details.
5. Run the focused test and report exact environment, commands, failures, and remaining coverage gaps.

## Decision rules

- Mock external nondeterministic services, but exercise real in-process boundaries when integration behavior matters.
- Use a test database or framework fixture where it catches serialization, policy, or transaction issues.
- Keep fixtures small and independent so order and parallel execution do not change outcomes.

## Boundaries

- Do not make a test pass by weakening the expected behavior.
- Do not represent mocks as proof that the real external integration works.

## Completion standard

Return the requested artifact or findings with enough evidence for a reviewer to understand what changed, what was checked, and what remains uncertain. Distinguish observed facts, inferred risks, and unverified assumptions. Keep the scope tied to the user's request.

## Further reading

- [Field guide](references/field-guide.md) — use for task-specific review questions and edge cases.
- [Source and rights notes](references/source-notes.md) — use when maintaining this package or reviewing its provenance.

---
name: tdd
description: "Use a test-first loop for a bounded code change. Use when requirements can be expressed as observable behavior and the project has a reliable test harness."
---

# Test-driven development

## Goal

Use failing behavior tests to shape a minimal implementation and keep the intended contract visible.

## Workflow

1. Confirm the desired behavior, relevant project conventions, and the smallest test boundary.
2. Write one test that demonstrates the missing behavior and verify it fails for the expected reason.
3. Implement the minimum change that makes the test pass without weakening the assertion.
4. Refactor only while the focused test remains green; add edge cases for meaningful branches or invariants.
5. Run the appropriate broader checks if authorized and report exactly which commands and cases ran.

## Decision rules

- Use a unit, integration, or end-to-end test based on the behavior boundary being protected.
- Do not force a test-first sequence when an unavailable test environment or exploratory task makes it misleading; record the reason.
- Keep each red-green cycle small enough to identify the cause.

## Boundaries

- Do not edit production code and tests so they merely agree on an incorrect outcome.
- Do not claim coverage or correctness beyond the exercised behavior.

## Completion standard

Return the requested artifact or findings with enough evidence for a reviewer to understand what changed, what was checked, and what remains uncertain. Distinguish observed facts, inferred risks, and unverified assumptions. Keep the scope tied to the user's request.

## Further reading

- [Field guide](references/field-guide.md) — use for task-specific review questions and edge cases.
- [Source and rights notes](references/source-notes.md) — use when maintaining this package or reviewing its provenance.

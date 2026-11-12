---
name: flaky-test-diagnosis
description: "Investigate tests that pass and fail without an intended code change. Use when failures vary across runs, machines, workers, time, or environment."
---

# Flaky test diagnosis

## Goal

Find and correct the source of nondeterminism instead of hiding intermittent failures.

## Workflow

1. Capture the exact test, command, environment, timing, worker settings, and recent failure artifacts before changing the test.
2. Repeat the smallest relevant case under controlled conditions and classify timing, shared-state, ordering, network, randomness, clock, filesystem, or resource contention.
3. Inspect setup and teardown, retries, parallel execution, selectors, async boundaries, fixtures, and external dependencies.
4. Make a minimal change that removes the cause or isolates the environment; retain the assertion that protects user-visible behavior.
5. Repeat under the failure conditions and broader suite context, then document residual uncertainty and any temporary quarantine.

## Decision rules

- Use retries only as containment with an owner and removal condition; do not use them to declare a fix.
- Stabilize time, randomness, ordering, and network boundaries where practical.
- Quarantine only when the failure blocks reliable signal and a tracked follow-up exists.

## Boundaries

- Do not delete a failing assertion or weaken coverage just to make CI green.
- Do not run expensive or production-facing tests without approval.

## Completion standard

Return the requested artifact or findings with enough evidence for a reviewer to understand what changed, what was checked, and what remains uncertain. Distinguish observed facts, inferred risks, and unverified assumptions. Keep the scope tied to the user's request.

## Further reading

- [Field guide](references/field-guide.md) — use for task-specific review questions and edge cases.
- [Source and rights notes](references/source-notes.md) — use when maintaining this package or reviewing its provenance.

---
name: performance-investigation
description: "Diagnose an observed performance problem in a web, mobile, API, or database system. Use when users report slowness, a metric regresses, or an expensive operation needs analysis."
---

# Performance investigation

## Goal

Find the dominant measured cost and improve it without trading away correctness or accessibility.

## Workflow

1. Define the affected user action, target environment, baseline, and acceptable performance threshold.
2. Collect representative measurements using the relevant profiler, browser trace, request timings, database plan, or device metrics.
3. Separate network, CPU, rendering, memory, database, bundle, and third-party delays; compare against a known-good baseline.
4. Change one likely bottleneck at a time and remeasure under equivalent conditions.
5. Verify the improvement on the target path and check for regressions in correctness, reliability, accessibility, or maintainability.

## Decision rules

- Profile before optimizing; use data that reflects the affected device and workload.
- Prioritize user-visible latency and critical-path work over micro-optimizations.
- Use budgets only when tied to a real product target and measurement method.

## Boundaries

- Do not claim a fix based on source-code intuition alone.
- Do not remove validation, accessibility, or security checks solely to improve a benchmark.

## Completion standard

Return the requested artifact or findings with enough evidence for a reviewer to understand what changed, what was checked, and what remains uncertain. Distinguish observed facts, inferred risks, and unverified assumptions. Keep the scope tied to the user's request.

## Further reading

- [Field guide](references/field-guide.md) — use for task-specific review questions and edge cases.
- [Source and rights notes](references/source-notes.md) — use when maintaining this package or reviewing its provenance.

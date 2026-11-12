---
name: test-strategy
description: "Plan a testing approach for a product, service, or significant change. Use when balancing unit, integration, end-to-end, performance, accessibility, security, and manual checks."
---

# Test strategy design

## Goal

Choose tests that provide useful evidence for the risks and user outcomes in scope.

## Workflow

1. Map user outcomes, system boundaries, failure impact, supported environments, and release constraints.
2. Identify risks and invariants, including authorization, data integrity, integrations, concurrency, and recovery.
3. Select test layers and representative cases; define which checks are automated, manual, or operational.
4. Specify fixtures, environments, data isolation, observability, ownership, and pass/fail criteria.
5. Review cost and gaps; ensure the plan includes negative paths and evidence needed to release.

## Decision rules

- Test a behavior at the lowest layer that can observe the failure; add higher-layer tests for integration risk.
- Prioritize high-impact and likely failures rather than maximum test count.
- Use manual checks for capabilities tools cannot verify, and record who performs them.

## Boundaries

- Do not claim a testing strategy guarantees absence of defects.
- Do not use production user data in test fixtures without an approved privacy basis.

## Completion standard

Return the requested artifact or findings with enough evidence for a reviewer to understand what changed, what was checked, and what remains uncertain. Distinguish observed facts, inferred risks, and unverified assumptions. Keep the scope tied to the user's request.

## Further reading

- [Field guide](references/field-guide.md) — use for task-specific review questions and edge cases.
- [Source and rights notes](references/source-notes.md) — use when maintaining this package or reviewing its provenance.

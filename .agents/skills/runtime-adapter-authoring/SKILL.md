---
name: runtime-adapter-authoring
description: "Create or review an adapter that connects shared application logic to a runtime-specific API. Use when supporting a new host, platform, provider, filesystem, database, or external service."
---

# Runtime adapter authoring

## Goal

Keep shared behavior stable while isolating runtime differences behind a small, testable contract.

## Workflow

1. Define the shared capability, runtime-specific behavior, expected inputs and outputs, failure modes, and compatibility constraints.
2. Inspect existing adapters and callers; identify what belongs in the common interface and what remains an implementation detail.
3. Specify the adapter contract, lifecycle, configuration, error taxonomy, resource ownership, and cancellation behavior.
4. Implement the narrow adapter and tests for normal operation, unsupported capability, partial failure, and cleanup.
5. Verify integration through the public boundary and document supported runtime/version combinations.

## Decision rules

- Expose capabilities explicitly instead of inferring support from runtime names.
- Use an optional feature or capability check when implementations differ materially.
- Preserve backward compatibility or provide a migration path for contract changes.

## Boundaries

- Do not leak provider-specific objects across the shared contract without a clear need.
- Do not advertise behavior the adapter cannot implement consistently.

## Completion standard

Return the requested artifact or findings with enough evidence for a reviewer to understand what changed, what was checked, and what remains uncertain. Distinguish observed facts, inferred risks, and unverified assumptions. Keep the scope tied to the user's request.

## Further reading

- [Field guide](references/field-guide.md) — use for task-specific review questions and edge cases.
- [Source and rights notes](references/source-notes.md) — use when maintaining this package or reviewing its provenance.

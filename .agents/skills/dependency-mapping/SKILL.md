---
name: dependency-mapping
description: "Map how a codebase or subsystem depends on packages, services, modules, and data stores. Use when estimating change impact, preparing a migration, diagnosing coupling, or documenting a critical path."
---

# Dependency mapping

## Goal

Produce an evidence-backed map that shows important dependency direction and likely change impact.

## Workflow

1. Define the subsystem boundary and the decision the map should support.
2. Inspect manifests, imports, configuration, runtime calls, infrastructure declarations, and tests; distinguish static references from runtime dependencies.
3. Trace key flows from entry point through modules and external services, including authentication, data ownership, and error paths where relevant.
4. Represent only decision-relevant nodes and edges; label synchronous, asynchronous, build-time, and optional relationships.
5. Validate the map against a second evidence source and note unknown, inferred, and environment-specific edges.

## Decision rules

- Use a table for a small dependency set and a graph for relationships that are hard to explain linearly.
- Include transitive dependencies only when their risk or behavior matters to the requested decision.
- Mark stale documentation or generated diagrams as such until verified against current code.

## Boundaries

- Do not infer production traffic or deployment topology from imports alone.
- Do not include every dependency when it obscures the critical relationships.

## Completion standard

Return the requested artifact or findings with enough evidence for a reviewer to understand what changed, what was checked, and what remains uncertain. Distinguish observed facts, inferred risks, and unverified assumptions. Keep the scope tied to the user's request.

## Further reading

- [Field guide](references/field-guide.md) — use for task-specific review questions and edge cases.
- [Source and rights notes](references/source-notes.md) — use when maintaining this package or reviewing its provenance.

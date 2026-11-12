---
name: rollback-planning
description: "Plan safe recovery from a release, migration, configuration, or deployment failure. Use before high-risk rollout or when an existing change needs a verified backout path."
---

# Rollback and recovery planning

## Goal

Restore the previous safe user-facing behavior while protecting data and preserving diagnostic evidence.

## Workflow

1. Define the change, affected users/systems, failure signals, recovery authority, and maximum acceptable impact.
2. Inspect release artifacts, state changes, schema changes, feature flags, external effects, and compatibility with the previous version.
3. Choose rollback, disablement, forward fix, or partial restoration based on data reversibility and mixed-version compatibility.
4. Write exact triggers, owner, sequence, dependencies, expected duration, data checks, and post-recovery verification.
5. Review the plan with the operators or owners and identify any step that cannot be tested safely in advance.

## Decision rules

- Prefer flag disablement or reversible configuration for containment when it is effective.
- Use forward repair when rolling back would corrupt or lose newer writes.
- Treat backups as useful only when restore integrity and recovery objectives are known.

## Boundaries

- Do not execute production rollback without authorization.
- Do not claim an operation is recoverable without checking irreversible side effects and data compatibility.

## Completion standard

Return the requested artifact or findings with enough evidence for a reviewer to understand what changed, what was checked, and what remains uncertain. Distinguish observed facts, inferred risks, and unverified assumptions. Keep the scope tied to the user's request.

## Further reading

- [Field guide](references/field-guide.md) — use for task-specific review questions and edge cases.
- [Source and rights notes](references/source-notes.md) — use when maintaining this package or reviewing its provenance.

---
name: project-delivery-orchestrator
description: "Coordinate a multi-step software delivery from scope through implementation, review, verification, and release using the tools and people already available. Use when a request spans multiple dependent workstreams."
---

# Project delivery workflow

## Goal

Keep ownership, dependencies, evidence, and user-facing delivery status visible from start to finish.

## Workflow

1. Clarify the requested outcome, authority, scope, stop conditions, and what evidence constitutes completion.
2. Inspect the project state and break work into bounded tasks with owners, dependencies, interfaces, and acceptance checks.
3. Sequence work to resolve shared contracts and risky assumptions before parallel implementation.
4. Track actual progress from artifacts and command results; request targeted correction when an acceptance condition fails.
5. Review integrated changes, verify only the authorized checks, preserve recovery paths, and report completed, pending, and blocked items.

## Decision rules

- Use parallel work only when the host and user permit it and tasks are independent.
- Escalate materially ambiguous scope or external side effects instead of guessing.
- Keep release or destructive operations behind the user's approval unless already explicitly authorized.

## Boundaries

- This is a workflow skill, not an agent profile, role definition, or permission system.
- Never claim work is done based only on a worker's status message; inspect the artifact.

## Completion standard

Return the requested artifact or findings with enough evidence for a reviewer to understand what changed, what was checked, and what remains uncertain. Distinguish observed facts, inferred risks, and unverified assumptions. Keep the scope tied to the user's request.

## Further reading

- [Field guide](references/field-guide.md) — use for task-specific review questions and edge cases.
- [Source and rights notes](references/source-notes.md) — use when maintaining this package or reviewing its provenance.

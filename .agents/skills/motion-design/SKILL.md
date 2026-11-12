---
name: motion-design
description: "Design or implement purposeful animation for web and mobile interfaces. Use for transitions, loading feedback, scroll storytelling, data visualization, microinteractions, or motion-system review."
---

# Motion design for interfaces

## Goal

Use motion to explain state and hierarchy while keeping interaction responsive, accessible, and performant.

## Workflow

1. Define the purpose of each animation, triggering action, affected element, duration expectations, and supported devices.
2. Inspect current motion libraries, CSS patterns, design tokens, and existing reduced-motion handling.
3. Choose the smallest motion that clarifies cause, progress, hierarchy, or spatial relation; specify initial and final states plus interruption behavior.
4. Implement timing and easing that match the interaction; use transform/opacity or platform-native primitives when appropriate and avoid unnecessary layout work.
5. Check keyboard-triggered changes, repeated or rapid interactions, reduced-motion preference, low-power/mobile performance, and final rendered behavior.

## Decision rules

- Prefer immediate feedback for direct user actions and avoid animation that delays task completion.
- Honor reduced-motion preferences by removing, shortening, or replacing nonessential movement with an equivalent state change.
- Use a coherent timing scale rather than independent decorative durations.

## Boundaries

- Do not use flashing, disorienting, or motion-only cues to communicate essential status.
- Do not add scroll or pointer effects that interfere with navigation, reading, or device performance.

## Completion standard

Return the requested artifact or findings with enough evidence for a reviewer to understand what changed, what was checked, and what remains uncertain. Distinguish observed facts, inferred risks, and unverified assumptions. Keep the scope tied to the user's request.

## Further reading

- [Field guide](references/field-guide.md) — use for task-specific review questions and edge cases.
- [Source and rights notes](references/source-notes.md) — use when maintaining this package or reviewing its provenance.

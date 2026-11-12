---
name: design-system-implementation
description: "Implement or refine reusable design tokens and interface components that follow an existing product direction. Use when establishing tokens, component APIs, variants, states, or cross-screen consistency."
---

# Design-system implementation

## Goal

Turn the product's visual and interaction rules into accessible, composable interface primitives.

## Workflow

1. Inspect the existing design source of truth, framework, styling conventions, component library, and representative screens.
2. Identify repeated decisions in color, typography, spacing, borders, elevation, motion, and interaction states; distinguish actual patterns from one-off visuals.
3. Define semantic tokens and a small set of component contracts with clear variants, defaults, responsive behavior, and states.
4. Implement incrementally, replacing repeated values without breaking existing pages; preserve explicit exceptions with a reason.
5. Review keyboard, focus, contrast, reduced motion, responsive behavior, theming, and usage examples across representative components.

## Decision rules

- Extend existing tokens and components before adding a competing visual system.
- Prefer semantic tokens over raw values in shared components.
- Keep component APIs small; add a variant only when real screens need distinct behavior.

## Boundaries

- Do not overwrite an existing brand or design source without user direction.
- Do not claim a system is consistent because a single demo screen uses the new tokens.

## Completion standard

Return the requested artifact or findings with enough evidence for a reviewer to understand what changed, what was checked, and what remains uncertain. Distinguish observed facts, inferred risks, and unverified assumptions. Keep the scope tied to the user's request.

## Further reading

- [Field guide](references/field-guide.md) — use for task-specific review questions and edge cases.
- [Source and rights notes](references/source-notes.md) — use when maintaining this package or reviewing its provenance.

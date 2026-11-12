---
name: responsive-ui-review
description: "Review a website or application interface across viewport sizes and input modes. Use when a layout breaks, new screens are built, or responsive behavior needs a focused audit."
---

# Responsive interface review

## Goal

Identify concrete layout and interaction failures across supported screen sizes without mistaking taste for usability defects.

## Workflow

1. Inspect supported breakpoints, content priorities, layout conventions, and the exact screens or flows in scope.
2. Review representative narrow, medium, and wide viewports; use real content lengths and relevant zoom settings.
3. Check overflow, reflow, navigation, touch target spacing, typography, media cropping, sticky elements, and keyboard behavior.
4. Reproduce each issue and record viewport, route, content state, user impact, screenshot or evidence, and a specific fix.
5. Recheck the affected viewports and preserve exceptions where the product intentionally uses a distinct layout.

## Decision rules

- Test content-driven stress cases, not only empty or ideal copy.
- Choose breakpoints based on layout failure and available space, not device labels alone.
- Separate visual preference from a task blocker or content loss.

## Boundaries

- Do not claim responsive coverage from one viewport or screenshot.
- Do not remove content or controls to hide overflow without checking task impact.

## Completion standard

Return the requested artifact or findings with enough evidence for a reviewer to understand what changed, what was checked, and what remains uncertain. Distinguish observed facts, inferred risks, and unverified assumptions. Keep the scope tied to the user's request.

## Further reading

- [Field guide](references/field-guide.md) — use for task-specific review questions and edge cases.
- [Source and rights notes](references/source-notes.md) — use when maintaining this package or reviewing its provenance.

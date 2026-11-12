---
name: frontend-design-quality
description: "Design, implement, or improve a frontend interface with a clear visual direction and usable interaction states. Use for websites, landing pages, dashboards, product screens, and responsive component work when design quality matters."
---

# Frontend design quality

## Goal

Turn the user's intent and product constraints into a distinctive, accessible interface that works in the real codebase.

## Workflow

1. Clarify audience, task, brand constraints, reference images or sites, content, target devices, and the main conversion or product goal.
2. Inspect existing components, tokens, fonts, assets, routes, and framework before proposing a visual direction.
3. State a concise art direction: hierarchy, layout, type, color, imagery, density, and motion; make choices serve the product instead of defaulting to a familiar template.
4. Build the key screen and its responsive, loading, empty, error, hover, focus, and active states using existing project conventions.
5. Review the rendered result at relevant sizes; check hierarchy, contrast, keyboard operation, asset loading, overflow, and reduced motion, then correct the largest issue.

## Decision rules

- Use the existing brand or design system when one is established; make a new direction only where the brief allows it.
- Treat inspiration as a way to analyze principles, not as permission to copy a layout, wording, or asset.
- Use real product content and suitable licensed assets; avoid filler imagery when it changes meaning.

## Boundaries

- Do not overwrite a working brand or shared token set without authorization.
- Do not call a UI polished or responsive based only on source code or a single screenshot.
- Do not copy source skill text, example layouts, proprietary prompts, or media.

## Completion standard

Return the requested artifact or findings with enough evidence for a reviewer to understand what changed, what was checked, and what remains uncertain. Distinguish observed facts, inferred risks, and unverified assumptions. Keep the scope tied to the user's request.

## Further reading

- [Field guide](references/field-guide.md) — use for task-specific review questions and edge cases.
- [Source and rights notes](references/source-notes.md) — use when maintaining this package or reviewing its provenance.

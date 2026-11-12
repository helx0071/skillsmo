---
name: accessibility-review
description: "Review a web or app interface for keyboard, semantic, focus, form, contrast, and assistive-technology barriers. Use for a scoped accessibility assessment or remediation plan."
---

# Accessibility review

## Goal

Find reproducible barriers and propose fixes that preserve the task and user context.

## Workflow

1. Inspect the target flow, framework, supported devices, and project conventions; state what is in and out of scope.
2. Review semantics, accessible names, keyboard order, focus visibility, validation, announcements, zoom/reflow, contrast, motion, and alternatives for non-text content.
3. Use automated checks to identify candidates, then confirm important findings with keyboard and supported assistive technology.
4. Record each issue with route or component, reproduction steps, user impact, evidence, applicable criterion or rationale, and a testable fix.
5. Recheck the affected flow after changes and separate verified fixes from remaining manual or device checks.

## Decision rules

- Prioritize task blockers and barriers that affect many users or shared components.
- Use the applicable WCAG version and level only when the request requires conformance review.
- Treat automated results as partial evidence, not a conformance decision.

## Boundaries

- Do not claim full conformance from source inspection or one scan.
- Do not infer a barrier from visual preference alone; describe the user impact and observable behavior.

## Completion standard

Return the requested artifact or findings with enough evidence for a reviewer to understand what changed, what was checked, and what remains uncertain. Distinguish observed facts, inferred risks, and unverified assumptions. Keep the scope tied to the user's request.

## Further reading

- [Field guide](references/field-guide.md) — use for task-specific review questions and edge cases.
- [Source and rights notes](references/source-notes.md) — use when maintaining this package or reviewing its provenance.

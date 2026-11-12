---
name: wcag-accessibility-checks
description: "Check a web interface against scoped WCAG success criteria and practical keyboard/screen-reader behavior. Use for remediation work or a standards-oriented audit of named pages and flows."
---

# WCAG accessibility checks

## Goal

Report specific barriers with criterion context and evidence while avoiding unsupported conformance claims.

## Workflow

1. Confirm WCAG version, conformance level if requested, routes, states, technologies, and evaluation limitations.
2. Inspect semantic structure, names/roles/values, keyboard operation, focus, error handling, text resizing, contrast, motion, and alternatives.
3. Run automated tools as issue discovery, then manually test the critical interactions and reading order.
4. For each finding, record criterion, page/state, reproduction, user impact, evidence, severity, and an actionable fix.
5. Retest fixes and identify criteria or assistive technologies that remain unassessed.

## Decision rules

- Use WCAG understanding documents for interpretation and distinguish normative criteria from techniques.
- Prioritize blockers and shared components before isolated cosmetic inconsistencies.
- Test real page content and dynamic states, not only component storybooks.

## Boundaries

- Do not claim full WCAG conformance from automated scans or a partial sample.
- Do not conflate visual preference with a demonstrated accessibility barrier.

## Completion standard

Return the requested artifact or findings with enough evidence for a reviewer to understand what changed, what was checked, and what remains uncertain. Distinguish observed facts, inferred risks, and unverified assumptions. Keep the scope tied to the user's request.

## Further reading

- [Field guide](references/field-guide.md) — use for task-specific review questions and edge cases.
- [Source and rights notes](references/source-notes.md) — use when maintaining this package or reviewing its provenance.

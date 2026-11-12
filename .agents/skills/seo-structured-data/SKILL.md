---
name: seo-structured-data
description: "Review or create structured data for a page using the current schema vocabulary and search-feature policies. Use when implementing JSON-LD, debugging validation, or assessing rich-result eligibility."
---

# Structured data review

## Goal

Make structured data accurately describe visible page content and meet the applicable technical and policy requirements.

## Workflow

1. Identify page type, visible content, intended search feature, canonical URL, template, and the search engine or consumer being targeted.
2. Check current official feature documentation for supported type, required and recommended properties, eligibility, and content policy.
3. Compare markup to visible page data and source records; validate types, values, identifiers, URLs, and consistency across duplicates.
4. Run the relevant syntax or rich-result validator and record warnings separately from policy or eligibility questions.
5. Provide a correction plan and explain that valid markup creates eligibility only; it does not guarantee a displayed rich result.

## Decision rules

- Use JSON-LD when it suits the project and the official guidance recommends it; do not force a schema type without a genuine match.
- Use the most specific supported type and only properties supported by page content.
- Recheck feature availability before implementation because search features and policies change.

## Boundaries

- Do not mark up invisible, fabricated, misleading, or user-unverified claims.
- Do not guarantee rich results, rankings, or indexing from valid markup.

## Completion standard

Return the requested artifact or findings with enough evidence for a reviewer to understand what changed, what was checked, and what remains uncertain. Distinguish observed facts, inferred risks, and unverified assumptions. Keep the scope tied to the user's request.

## Further reading

- [Field guide](references/field-guide.md) — use for task-specific review questions and edge cases.
- [Source and rights notes](references/source-notes.md) — use when maintaining this package or reviewing its provenance.

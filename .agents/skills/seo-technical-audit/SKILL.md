---
name: seo-technical-audit
description: "Audit a public website for crawlability, indexability, technical page signals, rendering, structured data, and search hygiene. Use when diagnosing organic search visibility or preparing a technical SEO fix plan."
---

# Technical SEO audit

## Goal

Identify verifiable technical barriers and opportunities without promising rankings or treating every tool warning as a defect.

## Workflow

1. Define domain, canonical host, template families, target markets, access limits, and the question the audit should answer.
2. Inspect robots and sitemap behavior, status codes, canonical and redirect chains, index directives, internal links, and representative rendered pages.
3. Review titles, headings, metadata, mobile rendering, performance data, structured data eligibility, and duplicate or thin page patterns where relevant.
4. Validate suspected issues against live pages, Search Console evidence, server logs, or official search guidance; distinguish observation from hypothesis.
5. Prioritize by affected URLs, user impact, evidence strength, effort, and policy risk; provide fixes and a post-change verification plan.

## Decision rules

- Separate crawl access, index eligibility, and ranking performance; they are different conditions.
- Treat automated crawler output as leads and check representative pages manually.
- Prioritize user and business value over chasing a score or isolated keyword.

## Boundaries

- Do not promise rankings, indexing, or rich results.
- Do not recommend cloaking, doorway pages, hidden text, fake reviews, or other policy-violating tactics.

## Completion standard

Return the requested artifact or findings with enough evidence for a reviewer to understand what changed, what was checked, and what remains uncertain. Distinguish observed facts, inferred risks, and unverified assumptions. Keep the scope tied to the user's request.

## Further reading

- [Field guide](references/field-guide.md) — use for task-specific review questions and edge cases.
- [Source and rights notes](references/source-notes.md) — use when maintaining this package or reviewing its provenance.

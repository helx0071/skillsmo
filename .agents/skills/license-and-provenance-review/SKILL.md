---
name: license-and-provenance-review
description: "Review the provenance and license scope of code, documentation, datasets, prompts, and media before adopting or distributing them. Use when curating external skills or preparing a public repository."
---

# License and provenance review

## Goal

Separate clearly licensed, restricted, missing, and unverified material so distribution decisions are evidence-based.

## Workflow

1. List the exact files, package paths, commit, intended reuse, and planned distribution or modification.
2. Inspect repository license, per-folder notices, headers, assets, examples, dependencies, generated data, and upstream attribution requirements.
3. Map each reused file or idea to evidence; distinguish license text, factual references, and independently written expression.
4. Flag missing, conflicting, noncommercial, share-alike, attribution, trademark, or excluded-material terms for human review.
5. Record a keep, rewrite, remove, or escalate decision with source URL, revision, exact path, and uncertainty.

## Decision rules

- Treat absent license as no clear reuse grant; do not infer permission from public visibility.
- Treat a repository-wide license as insufficient when files or media have explicit exceptions.
- When uncertain, keep the source as research-only and write fresh material from authoritative facts.

## Boundaries

- Do not provide definitive legal advice or declare a combination legally compatible without qualified review.
- Do not remove notices from code or assets that are actually reused.

## Completion standard

Return the requested artifact or findings with enough evidence for a reviewer to understand what changed, what was checked, and what remains uncertain. Distinguish observed facts, inferred risks, and unverified assumptions. Keep the scope tied to the user's request.

## Further reading

- [Field guide](references/field-guide.md) — use for task-specific review questions and edge cases.
- [Source and rights notes](references/source-notes.md) — use when maintaining this package or reviewing its provenance.

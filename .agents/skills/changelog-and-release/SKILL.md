---
name: changelog-and-release
description: "Prepare release notes, version decisions, and a change summary from verified repository history. Use when cutting a release or documenting shipped changes."
---

# Release notes and versioning

## Goal

Describe user-visible changes accurately and keep version semantics consistent.

## Workflow

1. Identify the previous release point, intended audience, release type, and changes included in the candidate.
2. Inspect merged changes and linked issues; verify whether items actually shipped and whether any are breaking.
3. Group user-visible additions, changes, fixes, deprecations, and security notes with concise impact.
4. Choose a version change from the project's published compatibility policy and dependency constraints.
5. Review accuracy, links, upgrade actions, and omitted known limitations before tagging or publishing.

## Decision rules

- Base notes on merged and verified changes, not commit message inference alone.
- Use SemVer only when the project follows its public contract.
- Keep internal implementation detail out unless operators need it.

## Boundaries

- Do not publish or tag a release without authorization.
- Do not claim security fixes, compatibility, or availability beyond verified scope.

## Completion standard

Return the requested artifact or findings with enough evidence for a reviewer to understand what changed, what was checked, and what remains uncertain. Distinguish observed facts, inferred risks, and unverified assumptions. Keep the scope tied to the user's request.

## Further reading

- [Field guide](references/field-guide.md) — use for task-specific review questions and edge cases.
- [Source and rights notes](references/source-notes.md) — use when maintaining this package or reviewing its provenance.

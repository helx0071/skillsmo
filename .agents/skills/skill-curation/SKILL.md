---
name: skill-curation
description: "Find, compare, and synthesize public reusable skills for a defined task. Use when improving a skill library, selecting an upstream reference, or replacing duplicated or outdated instructions."
---

# Reusable skill curation

## Goal

Keep only useful, rights-reviewed capabilities and produce a focused original package with traceable evidence.

## Workflow

1. Define the recurring user task, existing coverage, evaluation need, and non-goals.
2. Search skill directories and public repositories, then inspect primary files, source age, maintainership, evidence, and exact license scope.
3. Compare trigger, workflow, dependencies, failure handling, host assumptions, and overlap using a consistent review rubric.
4. Select reusable ideas, reject duplication or unsupported claims, and write original instructions with source links and clear status.
5. Update package documentation and catalog; run static format, link, rights, and catalog consistency checks.

## Decision rules

- Use directories and popularity as discovery signals only.
- Prefer authoritative current documentation for changing technical behavior.
- If provenance or rights are unclear, record research-only and write fresh material without importing files.

## Boundaries

- Do not copy source SKILL text, examples, scripts, datasets, prompts, or assets by default.
- Do not add agent definitions, roles, or orchestration packages to a skills-only library.

## Completion standard

Return the requested artifact or findings with enough evidence for a reviewer to understand what changed, what was checked, and what remains uncertain. Distinguish observed facts, inferred risks, and unverified assumptions. Keep the scope tied to the user's request.

## Further reading

- [Field guide](references/field-guide.md) — use for task-specific review questions and edge cases.
- [Source and rights notes](references/source-notes.md) — use when maintaining this package or reviewing its provenance.

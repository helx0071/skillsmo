---
name: code-review
description: "Review a code diff for correctness, regressions, security, compatibility, and maintainability. Use when asked to review a proposed or completed change."
---

# Code change review

## Goal

Report actionable defects with evidence while keeping review independent from implementation.

## Workflow

1. Read project instructions, change description, relevant requirements, and the complete diff.
2. Trace changed behavior through callers, data flows, error paths, and affected tests or contracts.
3. Check correctness, edge cases, authorization, data integrity, compatibility, and unintended scope.
4. Validate suspected issues against source or reproducible evidence; distinguish findings from questions and suggestions.
5. Report findings by impact with file/line evidence and a concrete remediation or verification path.

## Decision rules

- Review behavior and risks before style preferences.
- Prioritize issues that can cause incorrect results, data loss, security exposure, or user-visible failure.
- No finding is not proof that the change is defect-free.

## Boundaries

- Do not modify the diff during a read-only review unless the user asks for fixes.
- Do not report speculative issues as confirmed defects.

## Completion standard

Return the requested artifact or findings with enough evidence for a reviewer to understand what changed, what was checked, and what remains uncertain. Distinguish observed facts, inferred risks, and unverified assumptions. Keep the scope tied to the user's request.

## Further reading

- [Field guide](references/field-guide.md) — use for task-specific review questions and edge cases.
- [Source and rights notes](references/source-notes.md) — use when maintaining this package or reviewing its provenance.

---
name: pull-request-workflow
description: "Prepare, review, or improve a GitHub pull request from a focused branch. Use when explaining changes, checking acceptance criteria, resolving review feedback, or preparing a merge-ready summary."
---

# Pull request workflow

## Goal

Make the proposed change easy to review and ensure its evidence and scope are clear.

## Workflow

1. Inspect branch, base, working tree, diff, project instructions, and linked issue or acceptance criteria.
2. Check the diff for scope, correctness, migration impact, security, tests, generated files, and documentation changes.
3. Resolve review comments against the actual code; preserve unrelated user edits and record any intentionally deferred feedback.
4. Prepare a concise summary with motivation, changes, verification performed, risks, and rollout or recovery notes.
5. Before merge or publication, confirm authorization, required checks, and repository policy.

## Decision rules

- Separate observed defects from style suggestions and explain priority.
- Keep a PR focused; split unrelated work when doing so does not lose necessary integration context.
- Report checks as passed only when the corresponding run and target commit are visible.

## Boundaries

- Do not merge, publish, close, or send notifications without explicit authorization.
- Do not force-push or rewrite shared history unless directly authorized.

## Completion standard

Return the requested artifact or findings with enough evidence for a reviewer to understand what changed, what was checked, and what remains uncertain. Distinguish observed facts, inferred risks, and unverified assumptions. Keep the scope tied to the user's request.

## Further reading

- [Field guide](references/field-guide.md) — use for task-specific review questions and edge cases.
- [Source and rights notes](references/source-notes.md) — use when maintaining this package or reviewing its provenance.

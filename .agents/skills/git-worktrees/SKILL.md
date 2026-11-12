---
name: git-worktrees
description: "Create and manage isolated Git worktrees for parallel branches or temporary verification. Use when multiple tasks need separate working directories or when protecting uncommitted work during experiments."
---

# Git worktree workflow

## Goal

Keep branch and filesystem state explicit while avoiding accidental edits, commits, or cleanup of the wrong worktree.

## Workflow

1. Inspect repository root, branch, status, current worktrees, and the requested task's isolation needs.
2. Choose a unique worktree path and branch name; confirm the target branch exists or the intended starting commit is known.
3. Create the worktree without cleaning or changing the original checkout; verify branch, path, and status.
4. Make and review changes in the isolated path, keeping each worktree's branch and generated files distinct.
5. Before removal, verify the worktree path and branch, preserve or commit needed changes, then remove only the explicitly disposable worktree.

## Decision rules

- Use a detached worktree for read-only inspection; use a named branch for changes that need preservation.
- Do not reuse a path containing unreviewed user work.
- If two worktrees share a branch, pause and understand Git's checkout restriction before proceeding.

## Boundaries

- Never reset, clean, prune, or delete worktrees merely to resolve an unfamiliar state.
- Never remove the active or only copy of uncommitted user changes.

## Completion standard

Return the requested artifact or findings with enough evidence for a reviewer to understand what changed, what was checked, and what remains uncertain. Distinguish observed facts, inferred risks, and unverified assumptions. Keep the scope tied to the user's request.

## Further reading

- [Field guide](references/field-guide.md) — use for task-specific review questions and edge cases.
- [Source and rights notes](references/source-notes.md) — use when maintaining this package or reviewing its provenance.

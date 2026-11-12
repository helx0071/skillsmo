---
name: delegation-design
description: "Break a bounded engineering request into independent, reviewable work units for a human team or an already available agent system. Use when parallel work is requested and the environment supports it."
---

# Task delegation design

## Goal

Reduce coordination cost while preserving clear ownership, shared interfaces, and integration checks.

## Workflow

1. Confirm parallel work is authorized and identify the shared goal, deadline, tools, and non-negotiable constraints.
2. Separate work by files, artifacts, or questions; define one owner, inputs, output format, and acceptance criteria for each task.
3. Map dependencies and identify shared files, APIs, schemas, and decisions that need a single coordinator.
4. Provide each worker only the necessary context and instructions; keep independent research separate from implementation.
5. Review returned artifacts, resolve conflicts against the agreed contract, integrate in dependency order, and report incomplete work.

## Decision rules

- Parallelize independent research or disjoint implementation; serialize changes to shared interfaces and the same files.
- Use a human owner when access, consent, judgment, or accountability cannot be delegated.
- Reduce task count when coordination or merge cost is larger than the expected speed gain.

## Boundaries

- Do not assume an agent, subagent, tool, or permission exists; verify host capabilities first.
- Do not delegate external, destructive, credential-bearing, or production work without the user's authorization.

## Completion standard

Return the requested artifact or findings with enough evidence for a reviewer to understand what changed, what was checked, and what remains uncertain. Distinguish observed facts, inferred risks, and unverified assumptions. Keep the scope tied to the user's request.

## Further reading

- [Field guide](references/field-guide.md) — use for task-specific review questions and edge cases.
- [Source and rights notes](references/source-notes.md) — use when maintaining this package or reviewing its provenance.

---
name: skill-and-agent-evaluation
description: "Evaluate whether a reusable skill improves results in a specified agent host. Use when comparing versions, checking triggering, or deciding whether a skill is ready to distribute."
---

# Skill and host evaluation

## Goal

Measure task outcomes, over-triggering, boundaries, and reproducibility without exposing expected answers.

## Workflow

1. Define the tasks, host/model/version, installation path, available tools, baseline condition, and intended audience.
2. Create representative normal, ambiguous, edge, and out-of-scope prompts with a prewritten scoring rubric.
3. Run baseline and skill-assisted cases with matched inputs; retain prompts, outputs, tool traces, and environment details safely.
4. Score observable correctness, evidence quality, scope control, permission behavior, and usefulness; investigate disagreements and failures.
5. Revise one cause at a time, rerun affected and control cases, and publish only claims supported by the sample.

## Decision rules

- Separate manifest and link validation from trigger and behavior evaluation.
- Use negative controls to detect unwanted activation and unsupported actions.
- Report sample size and limitations; do not generalize from a single successful example.

## Boundaries

- Do not include secrets or personal information in evaluation fixtures.
- Do not attribute improvements to the skill if the host, model, tools, or task context also changed.

## Completion standard

Return the requested artifact or findings with enough evidence for a reviewer to understand what changed, what was checked, and what remains uncertain. Distinguish observed facts, inferred risks, and unverified assumptions. Keep the scope tied to the user's request.

## Further reading

- [Field guide](references/field-guide.md) — use for task-specific review questions and edge cases.
- [Source and rights notes](references/source-notes.md) — use when maintaining this package or reviewing its provenance.

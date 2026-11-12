---
name: agent-evaluation
description: "Evaluate an AI agent workflow for task success, tool use, boundary compliance, and repeatability. Use when comparing or improving agent behavior across representative tasks."
---

# Agent workflow evaluation

## Goal

Measure observable behavior against a task-specific rubric without leaking expected answers.

## Workflow

1. Define user outcome, supported context, tool permissions, stop conditions, and the failures that matter.
2. Create representative positive, negative, ambiguous, and edge cases from task evidence; use synthetic or redacted data.
3. Specify observable criteria for correctness, evidence, scope control, permission use, and final reporting.
4. Run cases in a named host and version with the intended tools and minimum necessary context; retain raw artifacts securely.
5. Compare outcomes, investigate failures, revise one part of the workflow, and rerun a balanced sample.

## Decision rules

- Keep prompts independent from the answer key and score rubric dimensions separately.
- Repeat cases that may be nondeterministic; report sample size and variation.
- Treat one passing example as evidence for that case, not universal reliability.

## Boundaries

- Do not include credentials or personal data in prompts and logs.
- Do not claim a skill caused an outcome unless the evaluation isolates its use.

## Completion standard

Return the requested artifact or findings with enough evidence for a reviewer to understand what changed, what was checked, and what remains uncertain. Distinguish observed facts, inferred risks, and unverified assumptions. Keep the scope tied to the user's request.

## Further reading

- [Field guide](references/field-guide.md) — use for task-specific review questions and edge cases.
- [Source and rights notes](references/source-notes.md) — use when maintaining this package or reviewing its provenance.

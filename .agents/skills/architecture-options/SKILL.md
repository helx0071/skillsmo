---
name: architecture-options
description: "Compare architecture or technology options for a project using explicit requirements and constraints. Use when choosing or changing a system structure, framework, data store, or integration."
---

# Architecture option analysis

## Goal

Make trade-offs and unresolved assumptions visible before commitment.

## Workflow

1. Define the decision, decision owner, required outcomes, constraints, non-goals, and time horizon.
2. Collect repository and operational evidence; research current product/version details for options that may have changed.
3. Compare a small set of viable options against the same criteria, including migration, security, operability, cost, and team fit.
4. Record assumptions, risks, reversibility, failure modes, and evidence gaps for each option.
5. Recommend one option only when evidence and user priorities support it; otherwise state what decision is needed.

## Decision rules

- Use weighted scoring only when the weights are explicit and the differences are meaningful.
- Prefer reversible experiments when uncertainty is high.
- Keep facts, estimates, and preferences distinct.

## Boundaries

- Do not present popularity or benchmark claims without comparable evidence.
- Do not make a material product decision on the user's behalf when priorities are unresolved.

## Completion standard

Return the requested artifact or findings with enough evidence for a reviewer to understand what changed, what was checked, and what remains uncertain. Distinguish observed facts, inferred risks, and unverified assumptions. Keep the scope tied to the user's request.

## Further reading

- [Field guide](references/field-guide.md) — use for task-specific review questions and edge cases.
- [Source and rights notes](references/source-notes.md) — use when maintaining this package or reviewing its provenance.

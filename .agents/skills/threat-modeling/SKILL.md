---
name: threat-modeling
description: "Identify and prioritize plausible security threats for a system, feature, or data flow. Use before implementation or during review when identities, trust boundaries, sensitive data, or external integrations are involved."
---

# Threat modeling

## Goal

Turn system structure into testable threat scenarios and proportionate mitigations.

## Workflow

1. Define the system boundary, assets, users, attacker assumptions, deployment context, and review depth.
2. Draw or describe components, entry points, data flows, trust boundaries, and privileged operations.
3. Generate threats using a suitable method and concrete abuse cases; focus on assets and boundaries relevant to the feature.
4. Rate each scenario using impact, preconditions, exposure, and existing controls; distinguish evidence from assumptions.
5. Map mitigations to owners and verification checks, then record residual risks and review triggers.

## Decision rules

- Use a lightweight narrative for a small feature and a structured model for complex systems.
- Include misuse, insider, supply-chain, availability, privacy, and indirect prompt injection where relevant.
- Choose controls at architecture boundaries before relying on user education or prompt rules.

## Boundaries

- Do not equate a checklist with a complete threat model.
- Do not test a live system beyond authorization or access real sensitive data.

## Completion standard

Return the requested artifact or findings with enough evidence for a reviewer to understand what changed, what was checked, and what remains uncertain. Distinguish observed facts, inferred risks, and unverified assumptions. Keep the scope tied to the user's request.

## Further reading

- [Field guide](references/field-guide.md) — use for task-specific review questions and edge cases.
- [Source and rights notes](references/source-notes.md) — use when maintaining this package or reviewing its provenance.

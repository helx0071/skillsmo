---
name: security-review
description: "Review an application or feature for material security risks across architecture, configuration, data flows, and dependencies. Use for pre-release assessments or changes with sensitive trust boundaries."
---

# Application security review

## Goal

Produce a scoped risk picture that ties threat scenarios to actual controls and evidence.

## Workflow

1. Define systems, users, assets, deployment environment, review depth, and excluded components.
2. Map entry points, identities, privileges, data stores, external services, and trust boundaries.
3. Review threat scenarios across authentication, authorization, data protection, input handling, configuration, dependencies, and operational recovery.
4. Validate the highest-risk paths with source evidence or safe, authorized checks; record controls and residual risk.
5. Prioritize fixes by impact and likelihood, identify owners, and state what evidence would close each finding.

## Decision rules

- Start with assets and attacker paths, then use checklists to avoid omissions.
- Prioritize exploitable and high-impact defects; keep policy gaps and defense-in-depth recommendations distinct.
- Use a relevant ASVS or OWASP version only when the requested scope supports it.

## Boundaries

- Do not claim certification or comprehensive security from a bounded review.
- Do not run active scanning or exploit code against systems without authorization.

## Completion standard

Return the requested artifact or findings with enough evidence for a reviewer to understand what changed, what was checked, and what remains uncertain. Distinguish observed facts, inferred risks, and unverified assumptions. Keep the scope tied to the user's request.

## Further reading

- [Field guide](references/field-guide.md) — use for task-specific review questions and edge cases.
- [Source and rights notes](references/source-notes.md) — use when maintaining this package or reviewing its provenance.

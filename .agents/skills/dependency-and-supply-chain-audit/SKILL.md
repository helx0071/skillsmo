---
name: dependency-and-supply-chain-audit
description: "Assess dependencies and build inputs for known risk, provenance, maintenance, and release integrity. Use for dependency reviews, pre-release checks, suspicious package triage, or supply-chain hardening."
---

# Dependency and supply-chain audit

## Goal

Identify material supply-chain risks and recommend fixes that can be verified without overstating scan coverage.

## Workflow

1. Define repository, lockfiles, build systems, deployment artifacts, and audit depth; inspect project guidance before running tools.
2. Inventory direct and transitive dependencies, package sources, versions, licenses, lifecycle scripts, and generated artifacts.
3. Use available audit and provenance tools read-only first; check advisories, maintainership, release integrity, and build workflow permissions.
4. Triage findings by exploitability, reachability, exposure, fix availability, and operational cost; verify high-impact claims with primary sources.
5. Recommend bounded remediation and repeat the relevant checks; record scanner versions, date, and inaccessible areas.

## Decision rules

- Treat scanner alerts as leads; distinguish confirmed vulnerable code paths from package presence.
- Prefer minimal version updates or removal; evaluate breaking changes and lockfile reproducibility.
- Use build provenance levels as evidence about the process, not proof that an artifact is safe.

## Boundaries

- Do not expose or upload source, lockfiles, credentials, or private package names to an unapproved service.
- Do not claim the codebase is free of vulnerabilities after a finite scan.

## Completion standard

Return the requested artifact or findings with enough evidence for a reviewer to understand what changed, what was checked, and what remains uncertain. Distinguish observed facts, inferred risks, and unverified assumptions. Keep the scope tied to the user's request.

## Further reading

- [Field guide](references/field-guide.md) — use for task-specific review questions and edge cases.
- [Source and rights notes](references/source-notes.md) — use when maintaining this package or reviewing its provenance.

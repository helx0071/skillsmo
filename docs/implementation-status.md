# Skillsmo implementation status

**Last reviewed:** 2026-11-12  
**Scope:** the independent Skillsmo skills library. No Crewmo, Kitmo, or other project content is in scope.

## Current snapshot

| Area | Status |
|---|---|
| Project scope | Skills only; no agent definitions, personas, team roles, or orchestration runtime. |
| Skill packages | 77 under `.agents/skills/`. All remain experimental. |
| Package files | Each has one `SKILL.md`, one task field guide, and source/rights notes. |
| Field-guide cleanup | The repeated generic checklist and reporting paragraph were removed from all 77 field guides; their task-specific practical-focus content remains. |
| Optional skill resources | No package-level scripts, assets, or examples are present. The repository-level validator is not part of any installable skill. |
| Research register | 74 source records. |
| Static validation | Implemented at `scripts/validate-skills.mjs`. Checks package metadata, catalog and source consistency, declared references, and relative Markdown links. |
| Continuous integration | The latest clean-history run on public `main` passed. See the [validation workflow](https://github.com/helx0071/skillsmo/actions/workflows/validate-skills.yml). |
| Distribution smoke check | Vercel Skills CLI 1.8.1 listed 77 packages and copied one selected package plus references to a disposable Codex target. See the [run record](evaluation-runs/2026-11-12-public-install-smoke.md). |
| Host behavior verification | Zero Skillsmo packages have a recorded task evaluation in a named host/version. |
| Distribution | [Repository is public](https://github.com/helx0071/skillsmo). Installation uses the external Vercel Skills CLI; Skillsmo does not ship an npm CLI or runtime. |
| Release activity | Clean root history is published. No versioned release or tag has been created. |

## Completed

- Established Skillsmo as an independent skills-only project and created 77 original packages.
- Added a browseable index, machine-readable package/source catalogs, source register, rights documentation, contribution and conduct guidance, security policy, GitHub templates, README, and installation guidance.
- Researched public projects and official documentation without bundling upstream skill files or assets.
- Removed the identical five-question review checklist and generic reporting paragraph from all 77 field guides. The remaining field-guide text is task-specific practical guidance.
- Added a dependency-free repository validator and a pull-request/push workflow.
- Replaced the previous reachable history with a verified clean root commit after enabling GitHub's private email setting. The three pre-clean-history Actions runs were deleted before publication.
- Published the repository and reconciled the public catalog, implementation status, roadmap, and release checklist.
- Confirmed successful validator runs on the clean public main history.
- Smoke-tested public listing, Codex-target package copying, reference files, and lock tracking in a disposable project.

## Still open

### Host behavior evaluation

No host installations have a recorded task behavior evaluation. The Codex CLI was present, but its task attempt stopped before model invocation because the managed environment's Codex state database was read-only. OpenCode, Claude Code, and Hermes Agent runtimes were not available. Retry in writable host environments and record exact host/version, trigger behavior, reference loading, available tools, task result, evidence, and limitations. See the [evaluation run guide](evaluation-runs/README.md) and [current smoke report](evaluation-runs/2026-11-12-public-install-smoke.md).

### Registry indexing

The Skills CLI can list and install directly from GitHub. Skillsmo's listing on skills.sh or another registry has not been checked; registry indexing is a separate outcome.

### Future package work

Use the [roadmap](roadmap.md) to prioritize risk-based evaluations, coverage gaps, and any skill-specific resource pilot. Do not add scripts, assets, or examples merely to make package trees look like other repositories.

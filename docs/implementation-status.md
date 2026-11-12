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
| Distribution smoke check | Vercel Skills CLI 1.8.1 listed all 77 packages. A follow-up cloud run verified four Codex-target copy installs, references, lock records, and catalog name parity. See both the [public install smoke](evaluation-runs/2026-11-12-public-install-smoke.md) and [cloud evaluation](evaluation-runs/2026-11-12-cloud-workspace-install-behavior.md). |
| Host behavior verification | Zero Skillsmo packages have a completed task behavior evaluation in a named host/version. Codex stopped before model invocation; other tested hosts were unavailable. |
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
- Verified public listing of all 77 skills and copy installation of four representative packages, including their references and lock tracking, in disposable projects. The cloud run independently matched the CLI listing to the catalog and compared installed files with the tested checkout.

## Still open

### Host behavior evaluation

No host produced a completed task behavior result. The cloud run attempted a UI task with Codex, but `codex exec` failed before model invocation because the managed environment's state database was read-only. Skill loading and task output were not observed; backend, SEO, and humanizer tasks were not submitted. OpenCode, Claude Code, and Hermes Agent runtimes were unavailable. Retry in writable host environments and record exact host/version, trigger behavior, reference loading, available tools, task result, evidence, and limitations. See the [evaluation run guide](evaluation-runs/README.md), [initial public install smoke](evaluation-runs/2026-11-12-public-install-smoke.md), and [four-package cloud run](evaluation-runs/2026-11-12-cloud-workspace-install-behavior.md).

### Registry indexing

The Skills CLI can list and install directly from GitHub. Skillsmo's listing on skills.sh or another registry has not been checked; registry indexing is a separate outcome.

### Future package work

Use the [roadmap](roadmap.md) to prioritize risk-based evaluations, coverage gaps, and any skill-specific resource pilot. Do not add scripts, assets, or examples merely to make package trees look like other repositories.

# Skillsmo implementation status

**Last reviewed:** 2026-11-12  
**Scope:** the independent Skillsmo skills library. No Crewmo, Kitmo, or other project content is in scope.

## Current snapshot

| Area | Status |
|---|---|
| Project scope | Skills only; no agent definitions, personas, team roles, or orchestration runtime. |
| Skill packages | 77 under .agents/skills/. All remain experimental. |
| Package files | Each has one SKILL.md plus a task field guide and source/rights notes. |
| Field-guide cleanup | The repeated generic checklist and reporting paragraph were removed from all 77 field guides; their task-specific practical-focus content remains. |
| Optional skill resources | No package-level scripts, assets, or examples are present. The repository-level validator is not part of any installable skill. |
| Research register | 74 source records. |
| Static validation | Implemented at scripts/validate-skills.mjs. Checks package metadata, catalog and source consistency, declared references, and relative Markdown links. |
| Continuous integration | .github/workflows/validate-skills.yml runs the validator on pull requests and pushes to main. Check the Actions run before release; adding workflow configuration alone is not a passing run. |
| Host verification | Zero Skillsmo packages have a recorded install and task evaluation in a named host/version. |
| Distribution | Repository remains private until the public-history and commit-metadata gate is cleared. Skillsmo has no npm CLI/runtime; installation uses the external Vercel Skills CLI. |
| Release activity | No versioned release or tag has been created. |

## Completed

- Established Skillsmo as an independent skills-only project and created 77 original packages.
- Added a browseable index, machine-readable package/source catalogs, source register, rights documentation, contribution and conduct guidance, security policy, GitHub templates, README, and installation guidance.
- Researched public projects and official documentation without bundling upstream skill files or assets.
- Removed the identical five-question review checklist and generic reporting paragraph from all 77 field guides. The remaining field-guide text is task-specific practical guidance.
- Added a dependency-free repository validator and a pull-request/push workflow.
- Added package anatomy guidance and this implementation record and roadmap.

## Still open

### Public release

The repository remains private while removed historical content and commit author/committer metadata are reviewed. The current GitHub connector does not expose custom author/committer fields. A root-history candidate created through it used the account email, so that candidate was not approved for main or public release. Use GitHub's noreply address in a root commit and inspect the metadata before updating main. Do not make the repository public while private material or an address intended to remain private is reachable. See the [public-release checklist](public-release-checklist.md).

### Validator run

The validator and GitHub Actions workflow are in the tree. The validator completed successfully on main at commit 0c000b8 (Actions run 43213173070). A pull-request run has not yet been observed.

### Host evaluation

No host installations or behavioral evaluations are recorded. The current environment does not provide OpenCode, Claude Code, or Hermes Agent runtimes, and the private-repository install commands have not been run in those hosts. Evaluate them in a suitable environment and record each host/version, install route, skill, task, expected result, observed result, and limitations before changing any compatibility claim. All packages remain experimental.

### Future package work

Use the [roadmap](roadmap.md) to prioritize risk-based evaluations, coverage gaps, and any skill-specific resource pilot. Do not add scripts/assets/examples merely to make package trees look like other repositories.

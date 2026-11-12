# Skillsmo implementation roadmap

**Updated:** 2026-11-12  
**Purpose:** continue the independent Skillsmo skills library. This roadmap covers skill instructions, package resources, validation, host evaluation, and release; it does not define agent profiles or orchestration.

## Phase 0 — Clean public release

**Status: completed**

- [x] Review the approved release tree and remove access to the previous main history.
- [x] Enable GitHub's private email setting and use the privacy-preserving identity for the clean root commit.
- [x] Delete workflow runs that referred to the previous history.
- [x] Verify the clean root commit and confirm only the clean main history is reachable.
- [x] Publish the repository and verify GitHub reports its visibility as public.
- [x] Reconcile the package catalog and release documentation with the public state.

**Acceptance:** the public repository contains the reviewed Skillsmo tree and clean reachable history. No previous branch or tag ref remains. Host behavior and installation checks are tracked separately below.

## Phase 1 — Package usefulness and structure

**Status: completed for the identified boilerplate finding**

- [x] Remove the identical generic review checklist and reporting paragraph from all 77 field guides.
- [x] Keep the task-specific practical-focus section in each field guide.
- [ ] Continue checking future field guides for task-specific value, and remove a guide if it adds too little.

**Acceptance:** every supporting file has a clear task-time or curation-time purpose; generic shared filler does not displace package-specific content.

## Phase 2 — Static consistency checks

**Status: implemented; latest public main validation passed**

- [x] Add a dependency-free validator for frontmatter, package names/paths, SKILL.md line count, index/catalog agreement, source IDs, declared references, and local Markdown links.
- [x] Add a GitHub Actions workflow for pull requests and pushes to main.
- [x] Confirm a clean-history workflow run passes on public main: [validation workflow](https://github.com/helx0071/skillsmo/actions/workflows/validate-skills.yml).
- [ ] Observe a pull-request run and document any edge cases.

**Acceptance:** inconsistent package/catalog/link changes fail with actionable messages. A green static check is not described as host compatibility or behavior quality.

## Phase 3 — Distribution and host behavior

**Status: direct listing/install smoke passed; host behavior evaluation pending**

- [x] Record a public Skills CLI listing and copied install of one representative package in a disposable Codex-target project.
- [x] Confirm the selected skill, both supporting references, and CLI lock entry are present after install.
- [ ] Choose a risk-based behavior pilot across interface design, backend/API work, SEO, writing, security, and media.
- [ ] Define ordinary, ambiguous, edge/failure, and out-of-scope tasks with observable expected outcomes before running each case.
- [ ] Evaluate skills in Codex, OpenCode, Claude Code, and Hermes Agent separately. Installation alone does not count as behavior evaluation.
- [ ] Record host/version, CLI version, trigger behavior, reference loading, available tools, exact task, result, evidence, and limitations.
- [ ] Check skills.sh or other registry indexing separately from direct GitHub installation.

The Codex CLI attempt in the smoke environment stopped before model invocation because the managed environment's state database was read-only. OpenCode, Claude Code, and Hermes Agent executables were absent. Preserve this as a blocked run, not a failed skill evaluation. See [the evaluation guide](evaluation-runs/README.md) and [the public install smoke report](evaluation-runs/2026-11-12-public-install-smoke.md).

**Acceptance:** behavior results can be reproduced from a package revision, host/version, exact task, rubric, and observed evidence. File transfer or one passing example is not universal reliability.

## Phase 4 — Coverage and skill quality

**Status: ongoing, gap-driven**

- [ ] Compare the index against recurring user tasks and issue reports.
- [ ] Research candidate projects and official sources broadly, then verify exact claims and rights narrowly.
- [ ] Revise or merge overlapping skills before adding another package.
- [ ] Improve workflow decisions, recovery paths, evidence, and descriptions where evaluation shows a weakness.
- [ ] Add optional scripts, assets, or examples only when a specific package task benefits and the dependencies/rights are clear.

**Acceptance:** each new or changed package has unique scope, current evidence, rights notes, a complete catalog entry, and an honest maturity status.

## Phase 5 — Versioned maintenance

**Status: not implemented**

- [ ] Choose a tag and changelog scheme before the first versioned release.
- [ ] Keep install guidance aligned with verified host versions and pin revisions when reproducibility matters.
- [ ] Recheck official docs and source projects when their behavior changes.
- [ ] Consider a Skillsmo-owned CLI or registry integration only if the external Skills CLI leaves a concrete user need unmet.
- [ ] Review source register, license scope, GitHub metadata, and security policy for each release.

## Working rule

Keep this roadmap current when work lands. Link evidence, leave unfinished items unchecked, and update [implementation status](implementation-status.md) after each material change. Follow the [authoring guide](skill-authoring-guide.md) for package shape and resource decisions.

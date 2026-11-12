# Skillsmo implementation roadmap

**Updated:** 2026-11-12  
**Purpose:** continue the independent Skillsmo skills library. This roadmap covers skill instructions, package resources, validation, host evaluation, and release; it does not define agent profiles or orchestration.

## Phase 0 — Clean public release

**Status: blocked on clean history and exact commit metadata**

- [ ] Review every reachable ref for removed project material, credentials, and private content.
- [ ] Create a clean-history candidate containing only the approved Skillsmo tree.
- [ ] Ensure every candidate commit uses an address approved for public display.
- [ ] Review the candidate tree, all refs, and exact commit metadata before updating main.
- [ ] Change visibility after the clean-history and metadata checks.
- [ ] Verify the public README, About metadata, license, source register, and install instructions.

**Acceptance:** the public repository contains only the reviewed Skillsmo tree and history. No private material or unapproved personal contact data is reachable.

## Phase 1 — Package usefulness and structure

**Status: completed for the identified boilerplate finding**

- [x] Remove the identical generic review checklist and reporting paragraph from all 77 field guides.
- [x] Keep the task-specific practical-focus section in each field guide.
- [ ] Continue checking future field guides for task-specific value, and remove a guide if it adds too little.

**Acceptance:** every supporting file has a clear task-time or curation-time purpose; generic shared filler does not displace package-specific content.

## Phase 2 — Static consistency checks

**Status: implemented; main validation run passed**

- [x] Add a dependency-free validator for frontmatter, package names/paths, SKILL.md line count, index/catalog agreement, source IDs, declared references, and local Markdown links.
- [x] Add a GitHub Actions workflow for pull requests and pushes to main.
- [x] Confirm the workflow completes successfully on main: [Actions run 43213173070](https://github.com/helx0071/skillsmo/actions/runs/43213173070).
- [ ] Observe a pull-request run and document any edge cases.

**Acceptance:** inconsistent package/catalog/link changes fail with actionable messages. A green static check is not described as host compatibility or behavior quality.

## Phase 3 — Host discovery and behavior evaluation

**Status: no evaluations recorded**

- [ ] Choose a representative risk-based pilot across interface design, backend/API work, SEO, writing, security, and media.
- [ ] Define ordinary, ambiguous, edge/failure, and out-of-scope tasks with observable expected outcomes.
- [ ] Install and evaluate packages separately in Codex, OpenCode, Claude Code, and Hermes Agent.
- [ ] Record host/version, installation route, trigger behavior, reference loading, available tools, task result, evidence, and limitations.
- [ ] Expand package coverage based on risk, usage, and observed gaps.
- [ ] Change maturity or compatibility claims only for the host/version and task boundary actually evaluated.

**Acceptance:** results can be reproduced from a package revision, host/version, task, rubric, and observed evidence. Installation alone does not count as behavior evaluation.

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

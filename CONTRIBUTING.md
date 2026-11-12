# Contributing to Skillsmo

Thanks for helping improve Skillsmo. It is an independent, skills-only collection. Contributions should improve reusable task instructions and their supporting documentation; do not add deployable agent profiles, personas, teams, or orchestration systems.

## Ways to contribute

- Propose a missing task or report a package that overlaps another skill.
- Improve a workflow, decision point, failure path, or evidence requirement.
- Correct a technical claim using an authoritative, version-appropriate source.
- Report unclear triggers, broken references, stale host guidance, or inaccurate compatibility claims.

Use the repository issue forms for skill proposals and package problems. For meaningful changes, open a pull request with the provided template. Check [implementation status](docs/implementation-status.md) and [roadmap](docs/roadmap.md) first so new work addresses a real gap.

## Adding or revising a skill

1. **Define the task.** State the recurring user outcome, activation context, prerequisites, expected result, and non-goals.
2. **Check the collection.** Search [SKILL_INDEX.md](SKILL_INDEX.md) and the [catalog](catalog/skills.json) for duplicate or adjacent packages. Prefer revising or merging when that gives users a clearer choice.
3. **Research carefully.** Start with current official documentation or standards for changing technical claims. Inspect the exact upstream package or page, revision, license, notices, examples, scripts, datasets, media, and dependencies.
4. **Choose the package shape.** Start with `.agents/skills/<skill-name>/SKILL.md`. Add references only for useful optional detail; add scripts, assets, or examples only when that task requires them. Follow the [package anatomy and authoring guide](docs/skill-authoring-guide.md). Do not add folders to imitate another project.
5. **Make every support file earn its place.** Field guides must add task-specific judgment, source notes must document provenance and rights, scripts must have declared dependencies and safe behavior, and assets/examples must have clear usage and reviewed rights.
6. **Update the collection.** Keep the skill index, `catalog/skills.json`, `catalog/sources.json`, and `SOURCES.md` consistent. Repair links when paths change.
7. **Run repository validation.** Run node scripts/validate-skills.mjs and fix any package, catalog, source, reference, or local-link errors. Pull requests also run this check in GitHub Actions.
8. **Show evidence.** Describe static checks separately from host behavior. For behavior claims, record the agent host and version, task examples, expected results, observed results, and limitations. If a check was not run, say so.
9. **Keep the maturity claim honest.** A package stays experimental until evidence supports a stronger status for a named host and version.

## Source and license rules

- Researching a public project does not grant permission to copy its files or substantial wording.
- Do not add third-party text, prompts, examples, code, scripts, datasets, fonts, images, video, or other assets unless their exact rights have been reviewed and the required notices are preserved.
- Keep links and citations as references; distinguish source facts from Skillsmo-authored guidance.
- If a package has a separate license or attribution requirement, document it explicitly and do not imply the root MIT license overrides it.
- By submitting a contribution, you confirm that you have the right to submit it and make it available under the repository's MIT License. You retain copyright in your contribution; no separate contributor license agreement is currently required.

Read [licensing and attribution](docs/licensing-and-attribution.md) before proposing adapted or third-party material.

## Pull request checklist

Before opening a PR, check that:

- [ ] The change stays within Skillsmo's skills-only scope.
- [ ] Skill names, frontmatter, package paths, and relative references are valid.
- [ ] The index, catalogs, and source register are synchronized where relevant.
- [ ] Research sources are specific, current where needed, and pinned when possible.
- [ ] Rights, notices, exclusions, and uncertain claims are recorded.
- [ ] Static validation passes; static checks and host evaluations are reported separately.
- [ ] Unrun checks are marked as unrun; no compatibility or quality outcome is implied without evidence.

## Review and merge

Maintainers may ask for a narrower task boundary, stronger source evidence, clearer rights, or a separate evaluation. Changes can be declined when they duplicate existing coverage, make unsupported claims, or introduce material whose rights cannot be established. Be respectful and follow the [Code of Conduct](CODE_OF_CONDUCT.md).

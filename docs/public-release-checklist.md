# Public-release checklist

This checklist tracks release preparation for the independent Skillsmo skills library.

## Release audit

**Audit date:** 2026-11-12  
**Clean root:** f56f3a464713387badf7943e68e781db2383b010  
**Visibility:** public

- The approved tree contains 77 experimental skill packages, 77 field guides, 77 source/rights notes, and 74 source records.
- The repeated generic checklist and reporting paragraph were removed from all 77 field guides.
- The repository-level validator and GitHub Actions workflow are present. Clean-history validation runs passed on the public main branch.
- Main descends from the reviewed root commit, which has no parent and uses GitHub's privacy-preserving commit identity. No prior history is reachable through the published branch.
- GitHub reports one branch, `main`. No tags or versioned releases were created.
- The three pre-clean-history Actions runs were permanently deleted. The first ten clean-history runs from the public-release audit all passed; later smoke-report edits are covered by the live workflow.
- GitHub's private email setting is enabled.
- The public repository page displays the Skillsmo README, MIT license, About description, and project topics.
- The public Skills CLI listing and copied install smoke check passed for one selected package. See the [run record](evaluation-runs/2026-11-12-public-install-smoke.md).
- No agent definitions or runtime are included. Host behavior evaluations remain unperformed; all packages remain experimental.
- No artifact-listing response was available, so no artifact-level scan is claimed.

## Release preparation

- [x] Add the license, contribution terms, third-party rights scope, contribution and security docs.
- [x] Add README, GitHub About metadata, issue/PR templates, installation guide, status, roadmap, and authoring guide.
- [x] Remove duplicated generic checklist/report content from all 77 field guides.
- [x] Add the package/catalog/link validator and Actions workflow.
- [x] Create a clean root commit and verify its privacy-preserving author/committer identity.
- [x] Verify that only the clean main history remains reachable and remove old workflow-run records.
- [x] Change repository visibility to public.
- [x] Re-fetch the public repository and verify its visibility, main branch, README, MIT license, About description, and topics.
- [x] Confirm successful clean-history validation on public main.
- [x] Run the CLI listing and representative copied install smoke check in a disposable project.
- [x] Record Node, CLI, and host-runtime availability, selected package, observed results, and limitations.
- [ ] Run named-host behavior evaluations and record trigger, reference-loading, and task outcomes.
- [ ] Check skills.sh indexing separately from direct GitHub installation.

## Post-publication smoke record

The CLI listed 77 skills and copied `frontend-design-quality`, including both references, to a disposable Codex-target directory. The `skills list` command showed the install as tracked. The Codex task attempt was blocked before model invocation by the managed environment's read-only state database; this is not a behavior result. See the [full evaluation record](evaluation-runs/2026-11-12-public-install-smoke.md) and [evaluation guide](evaluation-runs/README.md).

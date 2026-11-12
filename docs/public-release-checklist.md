# Public-release checklist

This checklist tracks release preparation for the independent Skillsmo skills library.

## Release audit

**Audit date:** 2026-11-12  
**Clean root:** f56f3a464713387badf7943e68e781db2383b010

- The approved tree contains 77 experimental skill packages, 77 field guides, 77 source/rights notes, and 74 source records.
- The repeated generic checklist and reporting paragraph were removed from all 77 field guides.
- The repository-level validator and GitHub Actions workflow are present. The validator passed on the pre-cleanup history; a fresh run will verify the clean root.
- Main was moved to a verified root commit with no parent, using GitHub's privacy-preserving commit identity. No prior commit history is reachable through main.
- The repository has only the main branch and no tag refs. The three pre-clean-history Actions runs were permanently deleted.
- GitHub's private email setting is enabled.
- No agent definitions or runtime are included. Host installation and behavior evaluations remain unperformed; all packages remain experimental.
- No artifact-listing response was available, so no artifact-level scan is claimed.

## Release preparation

- [x] Add the license, contribution terms, third-party rights scope, contribution and security docs.
- [x] Add README, GitHub About metadata, issue/PR templates, installation guide, status, roadmap, and authoring guide.
- [x] Remove duplicated generic checklist/report content from all 77 field guides.
- [x] Add the package/catalog/link validator and Actions workflow.
- [x] Create a clean root commit and verify its privacy-preserving author/committer identity.
- [x] Verify that only the clean main history remains reachable and remove old workflow-run records.
- [ ] Change repository visibility to public.
- [ ] Re-fetch the public repository and verify the tree, README, license, topics, About metadata, and refs.
- [ ] Run `npx skills add helx0071/skillsmo --list` and representative install smoke checks in disposable projects.
- [ ] Record Node, CLI, and host versions, selected skills, observed results, and limitations.

## First public installation smoke check

After publication:

1. List packages with `npx skills add helx0071/skillsmo --list` and compare with [SKILL_INDEX.md](../SKILL_INDEX.md).
2. Install a representative skill to Codex and OpenCode in disposable projects.
3. Inspect installed folders and confirm references resolve.
4. Verify discovery and task behavior in fresh sessions for each named host/version.
5. Evaluate Claude Code and Hermes Agent separately before making compatibility claims.
6. Check skills.sh indexing separately; direct repository installation and registry indexing are different outcomes.

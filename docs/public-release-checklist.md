# Public-release checklist

This checklist tracks release preparation for the independent Skillsmo skills library. Visibility must remain private until the clean-history and commit-metadata checks pass.

## Current release audit

**Audit date:** 2026-11-12  
**Main head at audit:** 83a13267a13f3040d6941fad954808d36fd6b884

- The tree contains 77 experimental skill packages, 77 SKILL.md files, 77 field guides, and 77 source/rights notes.
- The five-question generic review checklist and generic reporting paragraph were removed from all 77 field guides.
- There are no package-level scripts, assets, or examples. The repository-level validator is at scripts/validate-skills.mjs.
- The GitHub Actions workflow is present at .github/workflows/validate-skills.yml. The main run at 0c000b8 succeeded; no pull-request run has been observed.
- The catalog has 74 source records. The main branch is the only branch; no tag refs, releases, open PRs, or issues were returned at the audit.
- Two successful Actions runs currently point to pre-clean-history commits. The validator logs contained no email-like strings, but each run's metadata refers to the old history and includes commit author details. Review or remove all runs tied to old history before public visibility.
- Main's reachable history still contains material that is absent from the current Skillsmo-only tree.
- A root-commit candidate created through the current GitHub connector used the account email because the connector does not expose custom author/committer fields. That candidate is not referenced by main and must not be used for public release.
- Host installation and behavior evaluations remain unperformed. All packages remain experimental.
- No separate artifact-listing response was available. No artifact-level scan is claimed.

## Release preparation

- [x] Add root MIT license, contribution license terms, third-party rights scope, contribution and security docs.
- [x] Add README, GitHub About metadata, issue/PR templates, installation guide, status, roadmap, and authoring guide.
- [x] Remove duplicated generic checklist/report content from all 77 field guides.
- [x] Add package/catalog/link validator and Actions workflow; main validator run passed.
- [ ] Create a clean root commit with the complete approved Skillsmo tree and a GitHub noreply author/committer address.
- [ ] Inspect the exact root commit metadata, tree, and every reachable ref; ensure no old-history branch or tag remains.
- [ ] Review or delete the successful Actions run whose head points to the old history; check any remaining runs, logs, and artifacts.
- [ ] Change repository visibility to public after the clean-history and metadata review.
- [ ] Re-fetch the public repository and verify the tree, README, license, topics, metadata, and refs.
- [ ] Run the first public npx skills add helx0071/skillsmo --list and representative install smoke checks in disposable projects.
- [ ] Record Node, CLI, host versions, selected skills, observed results, and limitations.

The current GitHub commit connector cannot set custom commit author/committer fields. Do not publish a root candidate whose metadata contains an address intended to remain private. Moving main to a root commit changes commit IDs and affects existing clones. Delete temporary branches that retain old history before publishing.

## First public installation smoke check

After the history gate is cleared and the repository is public:

1. List packages with npx skills add helx0071/skillsmo --list and compare with [SKILL_INDEX.md](../SKILL_INDEX.md).
2. Install a representative skill to Codex and OpenCode in disposable projects.
3. Inspect installed folders and confirm references resolve.
4. Verify discovery and task behavior in fresh sessions for each named host/version.
5. Evaluate Claude Code and Hermes Agent separately before making compatibility claims.
6. Check skills.sh indexing separately; direct repository installation and registry indexing are different outcomes.

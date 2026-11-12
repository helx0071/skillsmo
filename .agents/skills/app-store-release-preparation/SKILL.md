---
name: app-store-release-preparation
description: "Prepare an iOS or Android release by reviewing build, signing, metadata, privacy, testing tracks, and rollout choices. Use before submitting or releasing a mobile build."
---

# Mobile app store release preparation

## Goal

Surface release blockers and make rollout decisions reviewable.

## Workflow

1. Confirm platform, app identity, build number, release channel, target countries, owner, and current submission status.
2. Review signing, entitlements/permissions, privacy disclosures, data safety answers, store listing, screenshots, and policy-sensitive behavior.
3. Verify that the submitted binary matches the intended commit/configuration and that required device/platform checks are recorded.
4. Choose internal/beta/production track and staged or manual release behavior; identify who can pause or roll back.
5. Prepare the release checklist and stop before submission or production rollout unless that action is explicitly authorized.

## Decision rules

- Check current Apple and Google requirements for the intended release path.
- Treat store metadata, privacy declarations, and binary contents as one release record.
- Document app-store review uncertainty and operational fallback.

## Boundaries

- Do not upload, submit, or publish a build without explicit authorization.
- Do not promise approval or availability based on a successful upload.

## Completion standard

Return the requested artifact or findings with enough evidence for a reviewer to understand what changed, what was checked, and what remains uncertain. Distinguish observed facts, inferred risks, and unverified assumptions. Keep the scope tied to the user's request.

## Further reading

- [Field guide](references/field-guide.md) — use for task-specific review questions and edge cases.
- [Source and rights notes](references/source-notes.md) — use when maintaining this package or reviewing its provenance.

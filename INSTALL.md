# Install Skillsmo skills

Skillsmo publishes selected Agent Skills as folders that compatible agents can discover. It does not require a Skillsmo runtime or agent of its own.

## Requirements

- Node.js and npm/npx installed.
- The current Vercel Skills CLI documentation lists Node.js 22.20 or later. Check the CLI's [current command reference](https://github.com/vercel-labs/skills/blob/main/docs/commands.md) before installing because requirements can change.
- A compatible agent host. Host discovery and behavior depend on that host and its version.

## Preview the collection

List the packages exposed by the CLI:

```sh
npx skills add helx0071/skillsmo --list
```

Compare the result with [SKILL_INDEX.md](SKILL_INDEX.md). The list command is a preview; it does not install a skill.

## Install a selected skill

Choose a directory name under `.agents/skills/` and select a target agent:

```sh
npx skills add helx0071/skillsmo --skill frontend-design-quality --agent codex
npx skills add helx0071/skillsmo --skill seo-technical-audit --agent opencode
```

Replace the skill name with the package you want. The Skills CLI also documents installing from a direct GitHub skill-folder URL. After the project establishes versioned releases, pin installs to a tag or commit when reproducibility matters.

Install only the skills relevant to the work. Large collections can contain overlapping triggers and consume unnecessary context.

## Host notes

| Host | Documented route | Skillsmo status |
|---|---|---|
| Codex | Skills CLI target `codex`; Codex also documents its own skill discovery. | Listing and a copied install to a Codex target were verified in a disposable project. Task behavior remains untested. |
| OpenCode | Skills CLI target `opencode`; OpenCode documents the shared skill format. | Intended route; runtime is not installed in the smoke environment. |
| Claude Code | Skills CLI target `claude-code`. | Intended route; runtime is not installed in the smoke environment. |
| Hermes Agent | Follow Hermes' current external skills directory and configuration instructions. | Research only; no Hermes-specific setup or install is included. |
| Other compatible agents | Check the current CLI target list and the host's own skill-loading documentation. | Version and host dependent. |

## Verification status

The public repository was listed through Vercel Skills CLI 1.8.1 with Node.js 24.22.1 and npm 11.9.0. The CLI found 77 packages and copied `frontend-design-quality` plus its field guide and source/rights notes into a disposable Codex-target project. See the [smoke report](docs/evaluation-runs/2026-11-12-public-install-smoke.md).

This verifies distribution and file transfer only. Codex task behavior could not be evaluated because the managed environment's Codex state database is read-only; OpenCode, Claude Code, and Hermes Agent runtimes were unavailable. All 77 packages remain experimental until trigger behavior and task outcomes are evaluated in named hosts and versions.

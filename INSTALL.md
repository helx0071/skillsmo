# Install Skillsmo skills

Skillsmo publishes selected Agent Skills as folders that compatible agents can discover. It does not require a Skillsmo runtime or agent of its own.

## Requirements

- Node.js and npm/npx installed.
- The current Vercel Skills CLI documentation lists Node.js 22.20 or later. Check the CLI's current requirements before installing because they can change.
- A compatible agent host. Host discovery and behavior depend on that host and its version.

## Preview the collection

Once the repository is publicly accessible, list the packages exposed by the CLI:

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
| Codex | Skills CLI target `codex`; Codex also documents its own skill discovery. | Intended route; Skillsmo discovery and behavior not evaluated. |
| OpenCode | Skills CLI target `opencode`; OpenCode documents the shared skill format. | Intended route; Skillsmo discovery and behavior not evaluated. |
| Claude Code | Skills CLI target `claude-code`. | Intended route; Skillsmo discovery and behavior not evaluated. |
| Hermes Agent | Follow Hermes' current external skills directory and configuration instructions. | Research only; no Hermes-specific setup or install is included. |
| Other compatible agents | Check the current CLI target list and the host's own skill-loading documentation. | Version and host dependent. |

## Verification status

The command examples follow the CLI documentation. They have not yet been smoke-tested against Skillsmo. All 77 packages remain experimental because no Skillsmo package has a recorded installation and task evaluation in a named host/version.

After public release, use a disposable project to test package listing, installation, nested reference files, fresh-session discovery, and task behavior. Record CLI, Node, and host versions plus observed outcomes before making compatibility claims. See the [public release checklist](docs/public-release-checklist.md).

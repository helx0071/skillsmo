<div align="center">

# Skillsmo

**Practical, portable skills for AI coding agents.**

Independent collection · Skills only · 77 experimental packages

[![License: MIT](https://img.shields.io/badge/license-MIT-2f855a?style=flat-square)](LICENSE)
![Skills: 77](https://img.shields.io/badge/skills-77-5b5bd5?style=flat-square)
![Status: Experimental](https://img.shields.io/badge/status-experimental-b7791f?style=flat-square)

</div>

Skillsmo is an independent library of focused Agent Skills for recurring software and creative work. Every package currently includes a SKILL.md plus two linked references: a task field guide and source/rights notes. No package currently bundles scripts, assets, or examples; those folders are optional and should earn their place. Read the [package anatomy guide](docs/skill-authoring-guide.md) for the selection rules.

**Skillsmo contains skills only.** It does not provide agent profiles, personas, team roles, an orchestration runtime, or a model.

## Quick start

After the repository is publicly available, preview the packages with the [Vercel Skills CLI](https://github.com/vercel-labs/skills):

```sh
npx skills add helx0071/skillsmo --list
```

Install one skill for a compatible agent:

```sh
npx skills add helx0071/skillsmo --skill frontend-design-quality --agent codex
```

The same package can be selected for OpenCode:

```sh
npx skills add helx0071/skillsmo --skill frontend-design-quality --agent opencode
```

These examples follow the CLI documentation; Skillsmo has not yet completed a host installation and behavior evaluation. See [INSTALL.md](INSTALL.md) for prerequisites, host notes, and the current verification status.

## Explore the collection

Browse all packages in the [skill index](SKILL_INDEX.md) or machine-readable [skill catalog](catalog/skills.json).

| Area | Example skills |
|---|---|
| Interface design and accessibility | [frontend-design-quality](.agents/skills/frontend-design-quality/SKILL.md), [design-system-implementation](.agents/skills/design-system-implementation/SKILL.md), [accessibility-review](.agents/skills/accessibility-review/SKILL.md) |
| Backend and APIs | [backend-engineering](.agents/skills/backend-engineering/SKILL.md), [api-contracts](.agents/skills/api-contracts/SKILL.md), [backend-authorization](.agents/skills/backend-authorization/SKILL.md) |
| SEO and content | [seo-technical-audit](.agents/skills/seo-technical-audit/SKILL.md), [seo-structured-data](.agents/skills/seo-structured-data/SKILL.md), [seo-content-brief](.agents/skills/seo-content-brief/SKILL.md) |
| Writing and editing | [humanizer](.agents/skills/humanizer/SKILL.md), [user-story-writing](.agents/skills/user-story-writing/SKILL.md) |
| Security and quality | [security-review](.agents/skills/security-review/SKILL.md), [prompt-injection-review](.agents/skills/prompt-injection-review/SKILL.md), [code-review](.agents/skills/code-review/SKILL.md) |
| Media | [ffmpeg-media-workflow](.agents/skills/ffmpeg-media-workflow/SKILL.md), [motion-design](.agents/skills/motion-design/SKILL.md) |

Install a small set that matches the task. Loading every skill at once can introduce overlapping guidance and use unnecessary context.

## How the skills are curated

- **Task focused:** one package should solve one recognizable task.
- **Portable:** instructions use the Agent Skills folder format and keep host-specific setup separate.
- **Evidence aware:** workflows distinguish what was inspected, what was inferred, and what remains unverified.
- **Independently written:** public skills and official documentation inform research; source files, prompts, examples, code, datasets, and media are not bundled.
- **Experimental by default:** static format checks do not prove host discovery or task quality.

See the [research report](docs/skill-quality-research.md), [source register](SOURCES.md), [curation workflow](docs/curation-workflow.md), and [quality bar](docs/quality-bar.md) for details.

## Documentation

- [Install guide](INSTALL.md)
- [Skill index](SKILL_INDEX.md)
- [Contribution guide](CONTRIBUTING.md)
- [License scope and attribution](docs/licensing-and-attribution.md)
- [Security policy](SECURITY.md)
- [Code of conduct](CODE_OF_CONDUCT.md)
- [Implementation status](docs/implementation-status.md)
- [Implementation roadmap](docs/roadmap.md)
- [Skill package anatomy and authoring guide](docs/skill-authoring-guide.md)
- [Public release checklist](docs/public-release-checklist.md)
- [Machine-readable catalog](catalog/skills.json)
- [Source catalog](catalog/sources.json)


## Validate the collection

Run the repository's dependency-free validator before opening a package or catalog pull request:

    node scripts/validate-skills.mjs

The same check runs on pushes to main and on pull requests. It checks package metadata, catalog/source consistency, declared references, and relative Markdown links. It does not test host discovery or skill behavior.

## Contribute

You can propose a skill, report unclear instructions, or improve an existing package. Start with [CONTRIBUTING.md](CONTRIBUTING.md); the repository also provides GitHub issue and pull request templates.

## License

Original Skillsmo-authored material is licensed under the [MIT License](LICENSE). The license does not grant rights to third-party content merely referenced by URL. See [licensing and attribution](docs/licensing-and-attribution.md) and [SOURCES.md](SOURCES.md) for scope and provenance.

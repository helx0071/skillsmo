# Skillsmo library maintenance: source and rights notes

Reviewed: 2026-11-12.

This package is independently authored for Skillsmo. The sources below were consulted as research inputs. No upstream skill file, prompt, example, script, dataset, media, or asset is bundled in this package. Source ownership and license terms remain with their publishers.

## Agent Skills specification (agent-skills-spec)

- Source: [https://agentskills.io/specification](https://agentskills.io/specification)
- Revision and rights: Living specification; reviewed 2026-11-12
- Review decision: No content reproduced; used to shape portable folder and manifest conventions.

## Vercel Skills CLI (skills-cli)

- Source: [https://github.com/vercel-labs/skills/blob/e781cb4d07433dfe1d19e924ed45cc61738c55ec/docs/commands.md](https://github.com/vercel-labs/skills/blob/e781cb4d07433dfe1d19e924ed45cc61738c55ec/docs/commands.md)
- Revision and rights: Commit e781cb4d07433dfe1d19e924ed45cc61738c55ec; MIT; reviewed 2026-11-12
- Review decision: Documents GitHub installation, `--skill`, `--agent`, and `--list`; commands remain untested against this private repository.

## OpenAI Skills documentation (openai-skills)

- Source: [https://developers.openai.com/codex/skills](https://developers.openai.com/codex/skills)
- Revision and rights: Living docs; reviewed 2026-11-12
- Review decision: Host-specific discovery and usage are treated separately from the cross-host package format.

## OpenCode skills documentation (opencode-skills)

- Source: [https://opencode.ai/docs/skills](https://opencode.ai/docs/skills)
- Revision and rights: Living docs; reviewed 2026-11-12
- Review decision: Use only for OpenCode compatibility notes; verify current version at install time.

## Hermes Agent skills documentation (hermes-skills)

- Source: [https://github.com/hermes-agent-org/hermes/blob/main/website/docs/user-guide/features/skills.md](https://github.com/hermes-agent-org/hermes/blob/main/website/docs/user-guide/features/skills.md)
- Revision and rights: Rolling repository page; reviewed 2026-11-12
- Review decision: Hermes path/config is a host concern; this library does not ship Hermes agent configuration.

## VoltAgent awesome-agent-skills index (voltagent-skills)

- Source: [https://github.com/VoltAgent/awesome-agent-skills/tree/6d483e29da745a010d88974ef6d0e50d15755e9a](https://github.com/VoltAgent/awesome-agent-skills/tree/6d483e29da745a010d88974ef6d0e50d15755e9a)
- Revision and rights: MIT index; commit 6d483e29da745a010d88974ef6d0e50d15755e9a (2026-11-05); listed packages may have separate licenses
- Review decision: Discovery only. Every candidate must be independently inspected; no catalog entries or skills copied.

For the full source register and curation method, see [SOURCES.md](../../../../SOURCES.md) and [the research report](../../../../docs/skill-quality-research.md).

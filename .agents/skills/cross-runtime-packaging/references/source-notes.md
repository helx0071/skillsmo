# Cross-runtime package design: source and rights notes

Reviewed: 2026-11-12.

This package is independently authored for Skillsmo. The sources below were consulted as research inputs. No upstream skill file, prompt, example, script, dataset, media, or asset is bundled in this package. Source ownership and license terms remain with their publishers.

## Node.js API documentation (node)

- Source: [https://nodejs.org/api/](https://nodejs.org/api/)
- Revision and rights: Living docs; reviewed 2026-11-12
- Review decision: Match the runtime release used by the target project.

## TypeScript documentation (typescript)

- Source: [https://www.typescriptlang.org/docs/](https://www.typescriptlang.org/docs/)
- Revision and rights: Living docs; reviewed 2026-11-12
- Review decision: Type-system reference; runtime checks still required.

## npm package.json and package exports documentation (npm-packaging)

- Source: [https://docs.npmjs.com/cli/v11/configuring-npm/package-json](https://docs.npmjs.com/cli/v11/configuring-npm/package-json)
- Revision and rights: npm CLI v11 docs; reviewed 2026-11-12
- Review decision: Package metadata and export-map reference; align with the project's installed npm and Node versions.

## Agent Skills specification (agent-skills-spec)

- Source: [https://agentskills.io/specification](https://agentskills.io/specification)
- Revision and rights: Living specification; reviewed 2026-11-12
- Review decision: No content reproduced; used to shape portable folder and manifest conventions.

For the full source register and curation method, see [SOURCES.md](../../../../SOURCES.md) and [the research report](../../../../docs/skill-quality-research.md).

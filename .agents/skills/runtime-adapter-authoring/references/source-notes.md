# Runtime adapter authoring: source and rights notes

Reviewed: 2026-11-12.

This package is independently authored for Skillsmo. The sources below were consulted as research inputs. No upstream skill file, prompt, example, script, dataset, media, or asset is bundled in this package. Source ownership and license terms remain with their publishers.

## Node.js API documentation (node)

- Source: [https://nodejs.org/api/](https://nodejs.org/api/)
- Revision and rights: Living docs; reviewed 2026-11-12
- Review decision: Match the runtime release used by the target project.

## Python documentation (python)

- Source: [https://docs.python.org/3/](https://docs.python.org/3/)
- Revision and rights: Versioned docs; reviewed 2026-11-12
- Review decision: Match the supported interpreter version.

## TypeScript documentation (typescript)

- Source: [https://www.typescriptlang.org/docs/](https://www.typescriptlang.org/docs/)
- Revision and rights: Living docs; reviewed 2026-11-12
- Review decision: Type-system reference; runtime checks still required.

## Model Context Protocol specification (mcp)

- Source: [https://modelcontextprotocol.io/specification/2026-07-28](https://modelcontextprotocol.io/specification/2026-07-28)
- Revision and rights: 2026-07-28 spec; reviewed 2026-11-12
- Review decision: Use the negotiated/current protocol version; security implications must be reviewed.

For the full source register and curation method, see [SOURCES.md](../../../../SOURCES.md) and [the research report](../../../../docs/skill-quality-research.md).

# Database schema migration review: source and rights notes

Reviewed: 2026-11-12.

This package is independently authored for Skillsmo. The sources below were consulted as research inputs. No upstream skill file, prompt, example, script, dataset, media, or asset is bundled in this package. Source ownership and license terms remain with their publishers.

## MySQL 8.4 Reference Manual (mysql84)

- Source: [https://dev.mysql.com/doc/refman/8.4/en/](https://dev.mysql.com/doc/refman/8.4/en/)
- Revision and rights: MySQL 8.4; reviewed 2026-11-12
- Review decision: Check actual engine and deployed version.

## PostgreSQL documentation (postgres)

- Source: [https://www.postgresql.org/docs/current/](https://www.postgresql.org/docs/current/)
- Revision and rights: Current version docs; reviewed 2026-11-12
- Review decision: Use deployed major for behavior and syntax.

## Convex documentation (convex)

- Source: [https://docs.convex.dev/](https://docs.convex.dev/)
- Revision and rights: Living docs; reviewed 2026-11-12
- Review decision: Use installed SDK and deployment configuration.

## Supabase documentation (supabase)

- Source: [https://supabase.com/docs](https://supabase.com/docs)
- Revision and rights: Living docs; reviewed 2026-11-12
- Review decision: Postgres, Auth, Storage, functions, and RLS reference.

## Laravel documentation (laravel)

- Source: [https://laravel.com/docs](https://laravel.com/docs)
- Revision and rights: Version selector; reviewed 2026-11-12
- Review decision: Select the installed major version.

For the full source register and curation method, see [SOURCES.md](../../../../SOURCES.md) and [the research report](../../../../docs/skill-quality-research.md).

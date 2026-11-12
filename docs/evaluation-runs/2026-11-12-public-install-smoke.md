# Public Skills CLI install smoke check

- **Run date:** 2026-11-12
- **Status:** listing and selected-package installation passed; host behavior evaluation blocked before model invocation.
- **Skillsmo revision tested:** `63e5e62f1096575a683bf6b933d8d21c7d0fbd26`
- **Platform:** Linux x86_64
- **Versions:** Node.js 24.22.1; npm 11.9.0; Vercel Skills CLI 1.8.1; Codex CLI 0.167.0-alpha.4
- **Scope:** temporary project outside the repository; telemetry disabled with `DISABLE_TELEMETRY=1`.

Vercel's CLI documentation describes `skills add --list`, agent selection, skill selection, and Node.js 22.20 or later. The tested Node version meets that requirement. See the [CLI command reference](https://github.com/vercel-labs/skills/blob/main/docs/commands.md) and [official CLI repository](https://github.com/vercel-labs/skills).

## Procedure and results

| Check | Command or method | Result |
|---|---|---|
| Public catalog listing | `DISABLE_TELEMETRY=1 npx --yes skills@1.8.1 add helx0071/skillsmo --list` | **Passed.** CLI cloned the public source and reported 77 available skills. |
| Selected Codex-target installation | `DISABLE_TELEMETRY=1 npx --yes skills@1.8.1 add helx0071/skillsmo --skill frontend-design-quality --agent codex --copy --yes` | **Passed.** CLI copied one selected package to `.agents/skills/frontend-design-quality`. |
| Installed package contents | Inspected the disposable installation directory | **Passed.** It contains `SKILL.md`, `references/field-guide.md`, and `references/source-notes.md`. |
| Lock tracking | `DISABLE_TELEMETRY=1 npx --yes skills@1.8.1 list` | **Passed.** CLI lists `frontend-design-quality` as a Codex skill sourced from `helx0071/skillsmo`. A version 2 `skills-lock.json` records copy mode and a computed hash. |
| Codex task behavior | Attempted a scoped `codex exec` task in the same temporary project without naming the skill in the task | **Blocked before model invocation.** The Codex CLI could not initialize its app-server because the managed environment's state database was on a read-only filesystem. No skill trigger or task behavior was observed. |
| Other host runtimes | Checked executable availability for OpenCode, Claude Code, and Hermes Agent | **Unavailable in this environment.** Only Codex CLI was present. |

The CLI emitted a non-fatal npm configuration warning about an unknown `http-proxy` setting; listing, installation, and `skills list` still completed successfully.

## What this establishes

The public repository is discoverable by Vercel Skills CLI 1.8.1, the CLI lists all 77 packages, and a selected Codex-target copy install includes the skill's supporting references. The install command and lockfile work in this disposable project.

This does **not** establish that Codex or another host discovers or follows the skill during a task. No package received a behavioral pass, so the catalog's `hostEvaluated` count remains zero and all packages remain experimental.

## Next steps

- Repeat a task evaluation in a writable Codex CLI environment; record automatic discovery, reference loading, output quality, and task-specific criteria.
- Install and evaluate representative packages in OpenCode, Claude Code, and Hermes Agent when those runtimes are available.
- Check skills.sh indexing separately from direct repository listing and installation.

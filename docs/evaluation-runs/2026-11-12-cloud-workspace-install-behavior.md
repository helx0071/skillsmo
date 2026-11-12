# Skillsmo evaluation record: cloud workspace installation and host behavior

- **Date:** 2026-11-12
- **Status:** Inconclusive. Repository validation, public listing, and four copy installs passed; host behavior was blocked before model invocation.
- **Repository revision:** `3d252dc7dc2eff97dd99324f273d3baadef98b65`
- **Skills tested:** `frontend-design-quality`, `backend-engineering`, `seo-technical-audit`, and `humanizer`
- **Evaluation type:** Catalog/list, installation, and host behavior
- **Platform:** Linux 6.18.57 x86_64
- **Runtime/tool versions:** Node.js 24.22.1; npm 11.9.0; Vercel Skills CLI 1.8.1; Codex CLI 0.167.0-alpha.4
- **Source:** Public `https://github.com/helx0071/skillsmo`, `main`
- **Target:** Fresh temporary consumer projects under `/tmp/skillsmo-cloud-eval-20261112-1Wuung/`

## Objective

Check repository consistency, public CLI discovery, copied installation of four representative packages, and whether an installed skill is discovered and followed during a task in an available host. The scope is the independent Skillsmo skills collection.

## Baseline and procedure

The checkout at `/workspace/skillsmo` was confirmed as the Skillsmo repository. No applicable `AGENTS.md` files were present. Before testing:

- `git status --short --branch`: `## work` (clean)
- Current commit: `3d252dc7dc2eff97dd99324f273d3baadef98b65`
- Origin: `https://github.com/helx0071/skillsmo.git`
- `git ls-remote origin refs/heads/main`: `3d252dc7dc2eff97dd99324f273d3baadef98b65`

The public `main` commit matched the checkout. Repository validation used the checkout; CLI listing and installs used the public GitHub source.

Repository validator:

```sh
node scripts/validate-skills.mjs
```

Output: `Skillsmo validation passed: 77 skill packages; 74 sources; metadata, references, and local Markdown links are consistent.`

An independent read-only comparison counted skill directories, `SKILL.md` files, catalog entries, index links, and catalog-declared references. It compared package names, frontmatter names, references declared in `SKILL.md` and the catalog, and reference file existence and containment.

CLI version:

```sh
DISABLE_TELEMETRY=1 npm_config_cache=<fresh-temp>/npm-cache npx --yes skills@1.8.1 --version
```

Output: `1.8.1`.

Public listing:

```sh
DISABLE_TELEMETRY=1 TMPDIR=<fresh-temp>/tmp XDG_CACHE_HOME=<fresh-temp>/xdg-cache npm_config_cache=<fresh-temp>/npm-cache npx --yes skills@1.8.1 add helx0071/skillsmo --list
```

Each package was installed in its own consumer project:

```sh
DISABLE_TELEMETRY=1 TMPDIR=<fresh-temp>/tmp XDG_CACHE_HOME=<fresh-temp>/xdg-cache npm_config_cache=<fresh-temp>/npm-cache GIT_TERMINAL_PROMPT=0 npx --yes skills@1.8.1 add helx0071/skillsmo --skill <package-name> --agent codex --copy --yes
```

The four package names are listed at the top of this report. Each consumer was disposable and outside the Skillsmo checkout.

## Task and success criteria

The UI task was submitted without naming the skill:

> Please improve this signup page for a small product team. Keep all existing fields, labels, validation rules, form action, and submit behavior intact. Improve the visual hierarchy and mobile layout, and make labels and keyboard focus clear. Work in the existing HTML and CSS files, then briefly explain what you changed and which checks you could actually perform. Do not install dependencies.

The attempted host command was:

```sh
codex exec --ephemeral --json --sandbox workspace-write --cd <frontend-consumer> --output-last-message <frontend-consumer>/codex-last.md "<natural task prompt>"
```

The remaining tasks were prepared but not submitted after Codex failed to start:

- **Backend:** Review a user-profile route for release readiness. Check input validation, authorization and ownership, not-found handling, and propose focused tests. Use route evidence; do not edit files.
- **SEO:** Audit an HTML page’s technical SEO. Provide prioritized findings with exact evidence and separate observations from assumptions.
- **Humanizer:** Rewrite product copy to sound natural and clear. Preserve every supplied fact and add none. Return only the revised copy.

Installation passed when each copied package had a usable `SKILL.md`, its declared references, and a version 2 `skills-lock.json` entry identifying the GitHub source and copy mode. Behavior would require an actual host invocation and observable task output; a host startup failure is not a skill failure.

## Results

| Check | Result | Evidence |
|---|---|---|
| Workspace identity and baseline | **PASS** | `/workspace/skillsmo` is the Git root for `github.com/helx0071/skillsmo`. The checkout began clean at `3d252dc7dc2eff97dd99324f273d3baadef98b65`, matching public `main`. |
| Repository validator | **PASS** | `node scripts/validate-skills.mjs` exited successfully and validated 77 packages and 74 sources. It passed again after the report was added in the cloud workspace. |
| Independent repository comparison | **PASS** | 77 skill directories, 77 `SKILL.md` files, 77 catalog entries, 77 index links, and 154 declared references. Name and reference sets matched; all references existed within their package. |
| Public CLI listing | **PASS** | Vercel Skills CLI 1.8.1 on Node.js 24.22.1 and npm 11.9.0 reported 77 skills. Names matched all 77 catalog names; no names were missing or extra. |
| Copy installs and lock records | **PASS** | Each of the four consumer projects contained a copied `SKILL.md`, both declared references, and a version 2 lockfile entry with source `helx0071/skillsmo`, `sourceType: github`, and `installMode: copy`. Installed package files matched the tested checkout byte for byte. |
| Codex host discovery | **PASS** | `codex --version` reported `codex-cli 0.167.0-alpha.4`. The CLI warned that it could not create PATH aliases on a read-only filesystem. |
| UI skill loading and behavior | **BLOCKED** | The task exited with code 1 before model invocation. Stderr: `failed to initialize in-process app-server client: Read-only file system (os error 30)`. No task output or JSON events were produced; skill loading was not observed. |
| Backend, SEO, and humanizer behavior | **NOT RUN** | The remaining prepared tasks were not submitted after the Codex startup failure. No behavior or skill loading is claimed for these packages. |
| Other host discovery | **UNAVAILABLE** | OpenCode, Claude Code, and Hermes executables were not available in `PATH`; no other hosts were installed. |
| Registry indexing | **NOT RUN** | This run tested direct GitHub discovery through the Skills CLI, not a separate registry. |

## Workspace state

The cloud checkout was clean before testing. At the end of the evaluation, the only change was the new, untracked evaluation report. The validator passed again after adding it. The cloud session did not commit or push.

## Limitations and conclusion

This run confirms that the repository is internally consistent, the public Skills CLI lists all 77 catalog entries, and four representative packages copy-install with their references and lock records. It does **not** establish that Codex or another host discovers or follows any Skillsmo skill during a task.

Codex was present but could not initialize its app-server because the filesystem was read-only. The UI task was blocked; backend, SEO, and humanizer behavior were not run. OpenCode, Claude Code, and Hermes were unavailable. No package received a behavioral pass, so all packages remain experimental and the catalog's host-evaluated count remains zero.

Next, rerun the prepared tasks in a writable Codex environment and evaluate other named hosts when available. Check skills.sh or other registry indexing separately from direct GitHub listing and installation.

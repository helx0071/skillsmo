# Skillsmo evaluation runs

This directory stores reproducible checks of Skillsmo package distribution and behavior. Keep evidence scoped to the exact package revision, tool version, host, and task.

## Distinguish evaluation types

- **Catalog/list smoke check:** confirms that a distribution tool can enumerate Skillsmo packages.
- **Installation smoke check:** confirms selected package files and declared references can be copied to a target directory.
- **Host behavior evaluation:** confirms a named host/version discovers and follows the skill during an actual task.
- **Registry/index check:** confirms that a separate skill registry lists the repository. This does not follow from direct GitHub installation.

A listing or install pass is not a host behavior pass. Do not update `hostEvaluated`, maturity, or compatibility claims based on file transfer alone.

## Run record requirements

For each run, record:

1. Date, tested repository commit, skill name, and package file revision.
2. Runtime, operating system, Node/npm/CLI versions, and host/version.
3. Exact source and installation command, target scope, and whether files were copied or linked.
4. Exact task prompt and success criteria chosen before execution.
5. Observed output and installed files, with evidence that avoids credentials and personal data.
6. Result for each check, blockers, retries, and limitations.

Use [TEMPLATE.md](TEMPLATE.md) for new reports. Keep blocked, failed, and inconclusive runs; do not overwrite them with later results. Add a new dated record for each attempt.

# Skillsmo library maintenance: field guide

## Practical focus

The public installer should expose one selectable package per task. Audit current tree and full Git refs separately: replacing files does not erase old content from history. Keep `npx skills add ... --list` as the first post-publication smoke check, then test one package in each claimed host.

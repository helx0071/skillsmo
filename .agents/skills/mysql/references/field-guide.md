# MySQL database workflow: field guide

## Practical focus

Use the actual engine and collation: similar SQL does not guarantee equivalent behavior. Inspect `EXPLAIN` for relevant queries and check whether the planned migration rebuilds or locks a large table. Include backup and recovery evidence before high-risk changes.

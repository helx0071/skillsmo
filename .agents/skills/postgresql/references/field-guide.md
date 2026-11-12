# PostgreSQL database workflow: field guide

## Practical focus

Check `EXPLAIN (ANALYZE, BUFFERS)` only in a safe environment because it executes the query. Review lock acquisition, index validity, RLS role context, and connection-pool behavior. For high-value data, document restore evidence.

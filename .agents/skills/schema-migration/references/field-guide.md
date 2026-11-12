# Database schema migration review: field guide

## Practical focus

Test both fresh installation and upgrade from the supported previous schema. Check migration idempotency only if the framework expects it. Verify backfill progress, constraint validation, application rollback compatibility, and indexes after migration.

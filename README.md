# ndndndn1.github.io

GitHub Pages root portal for `ndndndn1` project sites.

- Root URL: `https://ndndndn1.github.io/`
- Dashboard URL: `https://ndndndn1.github.io/semiconductor-process-dashboard/`

The portal builds `sites.json` from `catalog.config.json` in GitHub Actions. If a listed repository is private or outside the workflow token scope, the build keeps the configured fallback metadata and still deploys.

To enrich private repository metadata, add a repository secret named `CATALOG_GITHUB_TOKEN` with read access to the listed repositories. The build script uses that token before falling back to `GITHUB_TOKEN`.

Individual project repositories should not copy their HTML into this repository. They deploy their own project Pages site, then optionally send a `repository_dispatch` event with type `catalog-refresh` so this portal rebuilds `sites.json`.

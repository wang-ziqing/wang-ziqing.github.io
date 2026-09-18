# Validation and handoff

Prepared: 2026-09-18.

## Provenance

- Upstream starter: `alshedivat/al-folio`.
- Starter commit: `8ec1f3608d997491e0206c4e7a9368547a5ef255`.
- Theme dependency: `al_folio_core = 1.0.15`.
- `Gemfile` and `Gemfile.lock` retained byte-for-byte from the starter.
- Personalized content derives from the supplied CV and portrait. Publication titles and DOI links were extracted from the CV, not invented.
- Site-specific components were added without shadowing gem-owned files. No shared theme behavior was patched.

## Checks passed

- `npm ci`.
- `npm run lint:prettier`.
- JavaScript syntax check.
- Parsed all YAML data, configuration, and page front matter.
- Validated 10 unique page/project routes and the six intended navigation items.
- Checked literal internal page/asset links against existing destinations.
- Checked all 25 publication titles against the original CV; 25 unique DOI records and 6 selected papers.
- Rendered the actual publication Liquid components with LiquidJS and tested the actual filter script in a DOM environment: initial list, case-insensitive search, search + topic, no results, reset, URL state, direct topic links, unknown topics, and safe text input.
- Parsed all three SVG project illustrations.
- Confirmed the site URL and empty personal-site base URL.
- Confirmed all analytics identifiers are empty and no tracking service is enabled.
- Checked deployment-workflow structure and dependency between build and deploy jobs.
- Confirmed the public CV header has email and Scholar, without the original telephone line. The public PDF was carried over from the previously prepared, visually checked version.

## Not yet verified

The environment has no Ruby runtime and does not permit the attempted system installation. No attempt was made to bypass that restriction. Therefore the following were **not** run:

- `bundle install` and the real `bundle exec jekyll build`.
- The Ruby-based al-folio upgrade and override audits.
- GitHub Actions deployment.
- Desktop/mobile browser rendering, theme switching, and visual/accessibility review of the built website.

LiquidJS/DOM tests are useful checks, not a substitute for the real Jekyll build. The first GitHub Actions run remains the build gate. If it fails, inspect the failed step before publishing or changing unrelated files.

Publication metadata has not been independently checked against every publisher. Dates and counts follow the supplied CV and may need author confirmation.

## Scope

No files were pushed to the user's repository. No existing website was replaced. No analytics account was created and no visitor data was collected.

# Ziqing Wang — academic website

A personalized site built from the actual [al-folio](https://github.com/alshedivat/al-folio) starter, using its pinned `al_folio_core` 1.0.15 theme and plugin stack. The original theme owns the page layouts, navigation, typography, responsiveness, and light/dark mode. Its MIT license is retained in `LICENSE`.

The website is configured for **https://wang-ziqing.github.io**.

Start with **START_HERE.md** (Chinese, beginner instructions). Content updates are explained in **MAINTENANCE.md**. See **VALIDATION.md** for checks performed and limitations.

There is no active visitor-analytics service. Do not put analytics passwords, secret dashboard URLs, API credentials, or unpublished research in this public repository.

## Build

Ruby 3.3.5, Bundler from `Gemfile.lock`, and Node.js are needed locally. No local setup is needed when building through the included GitHub Actions workflow.

```sh
bundle install
bundle exec jekyll build
```

For a personal root-domain GitHub Pages site, `baseurl` is intentionally empty. Do not change it to `/al-folio`.

## Customization

Site-specific files are `assets/css/wang.css`, `assets/js/publications.js`, and the two `_includes/wang-*.liquid` files. These are new components, not copies of gem-owned layouts. Publications are rendered from `_data/publications.json`; the default Scholar bibliography rendering is not used. This keeps all 25 citations, full authors, and topic filtering in one editable data source.

No gem-owned file is shadowed. No automated scraping of Google Scholar is enabled. Scholar metrics are an explicitly dated snapshot from the supplied CV.

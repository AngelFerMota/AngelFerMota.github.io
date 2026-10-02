# Ángel Fernández Mota — portfolio

Professional single-page portfolio built with Angular 20.3, TypeScript, standalone components, signals, modern CSS and static prerendering.

Published URL: https://angelfermota.github.io/

## Local development

Use Node.js 24 and npm.

```sh
npm ci
npm start
```

Open http://localhost:4200. Edit content in `src/app/content.ts` and `src/app/app.html`. Employment details must remain grounded in verified information.

## Validation and build

```sh
npm run typecheck
npx playwright install chromium
npm test
npm run build
```

Tests cover six viewport widths, mobile menu/keyboard behavior, theme persistence, axe accessibility in both themes, section targets and the PDF download. There is no separate lint configuration. Production output is `dist/portfolio/browser/`; the root is never the output directory. Prerendering supplies readable content before Angular hydrates. `scripts/legacy-routes.mjs` preserves old URLs through section redirects.

## Deployment

`.github/workflows/pages.yml` runs npm ci, TypeScript checking, Chromium tests and production build on pull requests. Only pushes to main or manual runs on main deploy via the official Pages artifact/deployment actions. Select **GitHub Actions** as the Pages source in repository Settings → Pages before merging. No secrets or manual dist copying are needed. GitHub Pages availability and branch protection depend on repository settings.

## Structure

```text
src/app/             component, template, verified project data and application providers
src/styles.css       responsive design and theme tokens
public/              CV, recommendation, favicon, social preview, robots and sitemap
scripts/             legacy route generation
tests/               Playwright and axe browser tests
docs/                audit and validation evidence
.github/workflows/   PR checks and Pages deployment
```

Spanish content with professional English role names. Themes follow system preference until manually chosen; storage failure is tolerated. Project illustrations are conceptual diagrams, not application screenshots. Downloaded CV and recommendation are retained from the previous published assets. The legacy repository audit is in `docs/audit.md`.

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

Nine browser tests cover seven viewport widths, mobile menu/keyboard behavior, theme persistence, axe accessibility in both themes and an expanded case study, section targets, the PDF download, active navigation, reduced motion, project filters, clipboard success/denial, the original avatar, actual background movement and pause/resume, and mobile navigation without JavaScript. Production output is `dist/portfolio/browser/`; the root is never the output directory. Prerendering supplies readable content before Angular hydrates. `scripts/legacy-routes.mjs` preserves old URLs through section redirects.

Project cases include conceptual diagrams, native expandable architecture details and links to code evidence. Position-only reveals preserve text contrast. The full-stack hero and social metadata share the same professional title. New employment entries require verified dates and descriptions; public search snippets alone are not used as CV facts.

The October 2026 content review includes Grupo cerQuo, Cojali and verified education/certifications from the owner's LinkedIn profile. The two Hybo entries for the same period are consolidated. The downloadable PDF remains the original 2025 CV; current experience is represented on the website.

`npm run sync:github` refreshes a build-time snapshot of public repository counts, main languages, stars and latest commit dates in `src/app/github-snapshot.ts`. The date is shown beside the metrics; these are not live counters. The workflow refreshes them before validation and build. Its optional `GITHUB_TOKEN` stays in the build environment and is never included in the site.

## Deployment

`.github/workflows/pages.yml` validates pull requests and deploys only main via the official Pages artifact/deployment actions. **GitHub Actions** is now the repository's Pages source. A legacy `main /` publishing source would render the README rather than this Angular application. The deploy job checks Pages configuration and verifies the published Git revision, prerendered content, JavaScript, CSS and CV after publication. No manual dist copying is needed.

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

The original illustrated profile is preserved as `public/profile.png`. A lossless WebP version with identical decoded pixels is served at low priority. The dynamic background uses floating technology labels, moving SVG signals and CSS glows. The header pauses and resumes both background and contact connectors; they remain static under reduced-motion preferences or without JavaScript. No animation library or background raster is downloaded. The contact panel prioritizes email, groups professional networks and separates the supporting PDFs. The floating LinkedIn shortcut is hidden while contact is the active section to avoid covering its actions. Desktop/light/mobile captures and a motion recording are in `docs/contact-*`; the GIF is review evidence and is not loaded by the portfolio.

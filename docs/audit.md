# Repository audit — 2 October 2026

`main` contained an Angular 20.2.3 deployment, not a development workspace. The branch `origin/feature/0002-Add-Js-FuncionalityNAV-ADD-BackRound-Image` contained `CvAngular20/` source. Its TypeScript configuration and standalone Angular approach were recovered; templates and architecture were redesigned rather than editing generated bundles.

## Findings

- Ten separate navigation destinations fragmented the profile. Most route HTML contained an empty router outlet, leaving professional content dependent on JavaScript despite SSG markup.
- Favicon: 1,424,758 bytes. Decorative raster backgrounds and social icon bitmaps added avoidable requests.
- Two copies of the CV (different file sizes) and recommendation letter. The redesign preserves the existing `assets/files` documents as the canonical downloads.
- Repeated inline CSS across generated HTML and CSS targeting generated `_ngcontent` identifiers made changes brittle. The profile portrait was injected using a pseudo-element.
- No source/build separation, README, test workflow or Pages deployment workflow in main.
- Missing description, canonical, social metadata, robots and sitemap. HTML used English while source content mixed languages.
- Percentage skill bars, repeated card layouts, large shadows and gradients weakened hierarchy. The old contact form relied on an external Formspree endpoint; its delivery was not verified.

## Content provenance

Employment and dates: existing compiled work-experience chunk and recovered source. Hybo (Nov 2024–May 2025), Copermática (2024, 200-hour internship), Cedipsa (2022–2024). No current employer or role invented. Education: recovered education template; “Desde 2023” avoids asserting current enrollment or completion. Languages: existing language chunk. LinkedIn: existing contact chunk. No new email published.

Public repositories reviewed through GitHub's API: Reddit-Brief, TuCompra.Kcal, ToDoTareas-Angular-.NET, flutter_weather_app, quantum-computing-experiments and JuegoAhorcadoAngular20. Three selected for complementary backend/full-stack/mobile evidence. Reddit-Brief's package manifests and digest service confirm NestJS, React, Prisma and digest generation; no claim of an AI production deployment. Cestaria's README and source tree document Flutter, Riverpod, SQLite, nutrition and export. ToDoTareas includes .NET endpoints/services/migrations and Angular source. No public live demo verified. Visuals are explicitly conceptual diagrams, not screenshots.

Python/FastAPI/React/Docker and cloud technologies are included from the owner's supplied profile; they are not attributed to a specific employer. No company-internal names or architecture published.

## Replacement

Angular 20.3, standalone OnPush component, signals for navigation, zoneless rendering and static prerendering. System fonts, no animation/icon library, tiny SVG favicon, CSS diagrams and one social preview image. Semantic sections, keyboard focus, skip link, reduced motion and persistent system-aware themes. Legacy routes redirect to sections. GitHub Actions validates PRs and deploys main only after merge.

The original published deployment remains on main until review and merge. Historical generated assets remain recoverable in Git history.

## Full-stack refinement

The owner approved a name/role-led hero, project hierarchy, technical evidence and subtle motion. Reddit-Brief is featured with its modular API, replaceable summary provider and service tests. ToDoTareas now explicitly identifies the MySQL provider confirmed in `TareasApi.csproj`; its typed endpoints and no-tracking reads link directly to source. Cestaria illustrates shopping, nutrition and local storage. Native details expose problem, work and a technical decision; project evidence is separated from any unverified production/demo claim.

The published Hybo recommendation was extracted and visually reviewed. It identifies the placement as an internship, so the role qualifier was corrected from the inherited “Junior Consultant” to “Prácticas”. A brief attributed excerpt appears with the original PDF link. The PDF itself remains unchanged.

LinkedIn's full profile was behind an authentication wall. Indexed references to other employers are not sufficient to establish current job dates or duties, so no newer employment was invented. Navigation highlights visible sections and project links connect the stack to evidence. Reveals animate position only, preserving contrast, and respect reduced motion. Mobile navigation and project details also work without JavaScript.

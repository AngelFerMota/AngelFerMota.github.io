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

Initial employment data came from the recovered portfolio and public PDF: Hybo (Nov 2024–May 2025), Copermática (2024, 200-hour internship), Cedipsa (2022–2024). The authenticated October 2026 LinkedIn review below supersedes the older education dates and fills in newer employment. The email now shown on the site is already published in the unchanged original CV. No phone number or private account data was added to the page.

Public repositories reviewed through GitHub's API: Reddit-Brief, TuCompra.Kcal, ToDoTareas-Angular-.NET, flutter_weather_app, quantum-computing-experiments and JuegoAhorcadoAngular20. Three selected for complementary backend/full-stack/mobile evidence. Reddit-Brief's package manifests and digest service confirm NestJS, React, Prisma and digest generation; no claim of an AI production deployment. Cestaria's README and source tree document Flutter, Riverpod, SQLite, nutrition and export. ToDoTareas includes .NET endpoints/services/migrations and Angular source. No public live demo verified. Visuals are explicitly conceptual diagrams, not screenshots.

Python/FastAPI/React/Docker and cloud technologies are included from the owner's supplied profile; they are not attributed to a specific employer. No company-internal names or architecture published.

## Replacement

Angular 20.3, standalone OnPush component, signals for navigation, zoneless rendering and static prerendering. System fonts, no animation/icon library, tiny SVG favicon, CSS diagrams and one social preview image. Semantic sections, keyboard focus, skip link, reduced motion and persistent system-aware themes. Legacy routes redirect to sections. GitHub Actions validates PRs and deploys main only after merge.

The original deployment was preserved until the first PR was reviewed and merged. This full-stack refinement is delivered through a separate review PR. Historical generated assets remain recoverable in Git history.

## Full-stack refinement

The owner approved a name/role-led hero, project hierarchy, technical evidence and subtle motion. Reddit-Brief is featured with its modular API, replaceable summary provider and service tests. ToDoTareas now explicitly identifies the MySQL provider confirmed in `TareasApi.csproj`; its typed endpoints and no-tracking reads link directly to source. Cestaria illustrates shopping, nutrition and local storage. Native details expose problem, work and a technical decision; project evidence is separated from any unverified production/demo claim.

The published Hybo recommendation was extracted and visually reviewed. It identifies the placement as an internship, so the role qualifier was corrected from the inherited “Junior Consultant” to “Prácticas”. A brief attributed excerpt appears with the original PDF link. The PDF itself remains unchanged.

LinkedIn's full profile was behind an authentication wall. Indexed references to other employers are not sufficient to establish current job dates or duties, so no newer employment was invented. Navigation highlights visible sections and project links connect the stack to evidence. Reveals animate position only, preserving contrast, and respect reduced motion. Mobile navigation and project details also work without JavaScript.

## Publication repair and authenticated profile review — 2 October 2026

The owner reported that the published page displayed the README. Both the automatic legacy Pages build and the custom Angular workflow ran on main. The Pages API confirmed `build_type: legacy`, source `main /`. The setting was corrected to `workflow` and the already merged main was redeployed. Run `36994250761` succeeded, and a browser verified HTTP 200 and the prerendered Angular portfolio. No PR was merged by the agent.

The owner then signed into LinkedIn and authorized reading the complete profile. Relevant professional fields were reviewed through the visible experience, education, certification and skills pages. Private analytics, job-seeking visibility, messages, contacts and suggested courses were excluded from the website and repository.

- Grupo cerQuo: Programador full stack, Aug 2026–present, full time, Tomelloso/presencial. Declared stack: React, TypeScript, Python, FastAPI, MySQL, SQLAlchemy, REST, Git, Vite, TanStack Query, Tailwind CSS, Pydantic and Alembic. The hero retains the Full Stack Developer role and connects the current stack with earlier .NET experience.
- Cojali S. L.: Desarrollador full stack, Oct 2025–Feb 2026, training contract. No project duties, employer-specific architecture or technology claims were invented because the entry supplies none.
- Hybo has two entries for Nov 2024–May 2025 (Junior Consultant and Dotnet Consultant). The page consolidates them into one internship entry; the public recommendation confirms the placement.
- UCAM: listed Software Engineering/Computer Science + Multiplatform studies, Sept 2022–Sept 2025. These dates replace the older CV's 2023–present; no graduation or degree award is asserted.
- Copermática frontend course: May–Dec 2025, Angular/TypeScript/HTML5/CSS/MariaDB. Backend course: Jan–Jul 2024, C#/.NET/Git/Fork/Azure DevOps.
- CCC: higher vocational studies, Sept 2022–Jun 2024, final project with Flutter. Chemistry at UCLM has no LinkedIn dates; 2019–2023 is retained from the original CV and described as studies, not a completed degree.
- Eleven training entries: the ten public certificates plus the Instituto Europeo attendance certificate in AI model conditioning, associated with Python/TensorFlow. No issuance date is invented for that certificate. Public learning credential links are retained; the CCC enrollment identifier is omitted.
- English is described as intermediate, matching the CV and LinkedIn's basic professional competence; an unverified CEFR range was removed.

Sources: [LinkedIn profile](https://www.linkedin.com/in/%C3%A1ngel-fern%C3%A1ndez-mota/), its visible experience/education/certification sections, [public GitHub repositories](https://github.com/AngelFerMota?tab=repositories), and the unchanged public CV/recommendation. A fourth case, Weather App, was checked against its repository contracts, data mapping and Riverpod providers. Extra exploration links cover Angular Signals, Qiskit notebooks and the portfolio itself. No verified public demo URLs or quantified business outcomes were found, so none are claimed.

The reference design is implemented with a deep navy/LinkedIn-blue palette, a three-cell metrics row, Web/Móvil/Backend filters, native architecture/training/context disclosures, email copy feedback and a persistent LinkedIn link. All project anchors restore the full list before scrolling to a filtered-out destination. Public GitHub metrics are dated build snapshots rather than real-time or inflated success indicators. The warning budget was adjusted from 280 to 300 kB to accommodate the verified professional history and four cases; the 350 kB error budget is unchanged. No runtime dependency was added.

The owner also requested the original chibi avatar and a dynamic background. The avatar was recovered from the old deployment (`assets/img/profile.png`); the original file's Git blob hash is unchanged. A lossless WebP encoding preserves every decoded RGB pixel and reduces the delivered image from 297,376 to 223,112 bytes. Low-priority loading prevents it from competing with the main content. The background is decorative SVG/CSS with slow transform animation, a pause/resume control and a static reduced-motion presentation. The old 850+ kB background rasters are not required.

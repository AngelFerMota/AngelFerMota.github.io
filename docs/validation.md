# Validation

- Clean `npm ci`: passed on Node 24.19.0.
- `npm run typecheck`: passed.
- `npm test`: six browser tests passed; 360, 390, 768, 1024, 1440 and 1920 px; no horizontal overflow; menu interaction, Escape and focus return; section links; theme persistence; PDF signature; axe checks in light and dark plus expanded case study; active contact navigation; reduced motion; project details and mobile navigation without JavaScript.
- `npm run build`: static homepage prerendered, legacy route redirects generated, production budgets passed without Angular warnings.
- Initial production assets after full-stack refinement: approximately 272.5 kB raw / 76.2 kB estimated transfer. SVG favicon: 273 bytes versus 1,424,758 bytes previously. Social PNG: approximately 23 kB. No external font or icon requests.
- Lighthouse local production mobile run: Performance 96, Accessibility 100, Best Practices 100, SEO 100. This is a local measurement, not a promise for the live site. Summary in `lighthouse-summary.json`. Mobile navigation is marked for enhancement before first paint to prevent a hydration layout shift (CLS: 0).
- Desktop, mobile and light-theme screenshots are actual browser captures in `desktop.png`, `mobile.png` and `light.png`; the hero and expanded project views are also available separately. Visual review covers the final responsive hierarchy and technical details.
- Common secret-pattern scan of application, public assets, tests and workflow: no matches. No employer-internal project details added.
- Public repository links verified against GitHub API. LinkedIn preserved from the published portfolio; its destination requires third-party access and was not independently authenticated.
- CV and recommendation copied byte-for-byte from previously published assets. CV browser test checks HTTP response and PDF signature.
- Old routes are static redirect documents, not client-only router fallbacks. Main has no new client routes.

GitHub Pages deployment requires the repository Pages source to be **GitHub Actions**. This setting must be coordinated with the merge so the existing branch deployment is preserved until review. Workflow validation runs on the PR; the actual production deployment occurs after merge. No merge performed. There was no existing lint configuration.

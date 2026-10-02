import { mkdir, writeFile, readFile } from "node:fs/promises";
if (process.env.GITHUB_SHA) {
  const path = "dist/portfolio/browser/index.html";
  const html = await readFile(path, "utf8");
  await writeFile(
    path,
    html.replace(
      "</head>",
      `<meta name="portfolio-revision" content="${process.env.GITHUB_SHA}"></head>`,
    ),
  );
}
const routes = {
  contact: "contact",
  "work-experience": "experience",
  "technical-skills": "stack",
  "soft-skills": "about",
  education: "education",
  languages: "about",
  "personal-strengths": "about",
  courses: "education",
  downloads: "contact",
};
for (const [route, section] of Object.entries(routes)) {
  await mkdir(`dist/portfolio/browser/${route}`, { recursive: true });
  await writeFile(
    `dist/portfolio/browser/${route}/index.html`,
    `<!doctype html><html lang="es"><head><meta charset="utf-8"><meta name="robots" content="noindex"><meta http-equiv="refresh" content="0;url=/#${section}"><link rel="canonical" href="https://angelfermota.github.io/"><title>Ángel Fernández Mota</title></head><body><a href="/#${section}">Ir al portfolio</a></body></html>`,
  );
}

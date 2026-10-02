import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
test("responsive layout and accessible navigation", async ({ page }) => {
  for (const width of [360, 390, 768, 1024, 1440, 1920]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/");
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
    ).toBe(true);
    if (width <= 768) {
      await page.getByRole("button", { name: "Menú", exact: true }).click();
      await page
        .getByRole("navigation")
        .getByRole("link", { name: "Proyectos" })
        .click();
      await expect(
        page.getByRole("button", { name: "Menú", exact: true }),
      ).toHaveAttribute("aria-expanded", "false");
    }
  }
});
test("theme preference, accessibility and CV", async ({ page, request }) => {
  await page.emulateMedia({ colorScheme: "dark" });
  await page.goto("/");
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
  expect((await new AxeBuilder({ page }).analyze()).violations).toEqual([]);
  await page
    .getByRole("button", { name: "Cambiar tema claro u oscuro" })
    .click();
  await page.reload();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
  expect((await new AxeBuilder({ page }).analyze()).violations).toEqual([]);
  const cv = await request.get("/files/cv-angel-fernandez-mota.pdf");
  expect(cv.ok()).toBe(true);
  expect((await cv.body()).subarray(0, 4).toString()).toBe("%PDF");
});
test("section links resolve and keyboard menu works", async ({ page }) => {
  await page.goto("/");
  for (const href of await page
    .locator('a[href^="#"]')
    .evaluateAll((links) =>
      links.map((a) => a.getAttribute("href")).filter((h) => h !== "#"),
    )) {
    await expect(page.locator(href!)).toHaveCount(1);
  }
  await page.setViewportSize({ width: 390, height: 844 });
  const menu = page.getByRole("button", { name: "Menú", exact: true });
  await menu.focus();
  await page.keyboard.press("Enter");
  await page
    .getByRole("navigation")
    .getByRole("link", { name: "Proyectos" })
    .focus();
  await page.keyboard.press("Escape");
  await expect(menu).toHaveAttribute("aria-expanded", "false");
  await expect(menu).toBeFocused();
});
test("project cases expose evidence with keyboard and highlight navigation", async ({
  page,
}) => {
  await page.goto("/");
  const featured = page.locator("#reddit");
  const summary = featured.locator("summary");
  await summary.focus();
  await page.keyboard.press("Enter");
  await expect(
    featured.getByText("Una decisión técnica", { exact: true }),
  ).toBeVisible();
  await expect(
    featured.getByRole("link", { name: "Pruebas del servicio" }),
  ).toHaveAttribute("href", /digests\.service\.spec\.ts$/);
  expect((await new AxeBuilder({ page }).analyze()).violations).toEqual([]);
  await page.keyboard.press("Enter");
  await expect(featured.locator("details")).not.toHaveAttribute("open", "");
  await page
    .getByRole("navigation")
    .getByRole("link", { name: "Contacto" })
    .click();
  await expect(
    page.getByRole("navigation").getByRole("link", { name: "Contacto" }),
  ).toHaveAttribute("aria-current", "location");
});
test("reduced motion retains content and disables transitions", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/#projects");
  await expect(
    page.getByRole("heading", { name: "Ideas llevadas a código." }),
  ).toBeVisible();
  expect(
    await page
      .locator(".project")
      .first()
      .evaluate((element) => getComputedStyle(element).transitionDuration),
  ).toBe("0s");
  expect(await page.evaluate(() => document.getAnimations().length)).toBe(0);
});
test("prerendered project details remain usable without JavaScript", async ({
  browser,
}) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  await page.goto("http://localhost:4200/");
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "Fernández Mota",
  );
  await page.locator("#todo summary").click();
  await expect(
    page.locator("#todo").getByText("Una decisión técnica", { exact: true }),
  ).toBeVisible();
  await page.setViewportSize({ width: 390, height: 844 });
  await page
    .getByRole("navigation")
    .getByRole("link", { name: "Proyectos" })
    .click();
  await expect(
    page.getByRole("heading", { name: "Ideas llevadas a código." }),
  ).toBeVisible();
  await context.close();
});
test("project filtering preserves keyboard exploration and anchor targets", async ({
  page,
}) => {
  await page.goto("/#projects");
  const filters = page.getByRole("group", {
    name: "Filtrar proyectos por especialidad",
  });
  await filters.getByRole("button", { name: "Móvil", exact: true }).focus();
  await page.keyboard.press("Enter");
  await expect(filters.getByRole("button", { name: "Móvil" })).toHaveAttribute(
    "aria-pressed",
    "true",
  );
  await expect(page.locator(".project:visible")).toHaveCount(2);
  await expect(page.locator("#todo")).toBeHidden();
  await page.locator('.stack-evidence a[href="#todo"]').click();
  await expect(page.locator("#todo")).toBeVisible();
  await expect(page.locator("#todo")).toBeInViewport();
  await expect(page.locator(".project:visible")).toHaveCount(4);
  await filters.getByRole("button", { name: "Backend", exact: true }).click();
  await expect(page.locator(".project:visible")).toHaveCount(2);
  expect((await new AxeBuilder({ page }).analyze()).violations).toEqual([]);
});
test("email copy writes the published address and handles clipboard denial", async ({
  page,
  context,
}) => {
  await context.grantPermissions(["clipboard-read", "clipboard-write"]);
  await page.goto("/#contact");
  await page.getByRole("button", { name: "Copiar email", exact: true }).click();
  await expect(page.locator(".email-contact [role=status]")).toHaveText(
    "Correo copiado ✓",
  );
  const email = await page
    .locator('.email-contact a[href^="mailto:"]')
    .innerText();
  expect(await page.evaluate(() => navigator.clipboard.readText())).toBe(email);
  await page.evaluate(() => {
    navigator.clipboard.writeText = async () => {
      throw new Error("denied");
    };
  });
  await page.getByRole("button", { name: "Copiar email", exact: true }).click();
  await expect(page.locator(".email-contact [role=status]")).toContainText(
    "No se pudo copiar",
  );
  await expect(
    page.locator('.email-contact a[href^="mailto:"]'),
  ).toHaveAttribute("href", `mailto:${email}`);
});
test("original avatar loads and decorative background can be paused", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "no-preference" });
  await page.goto("/");
  const avatar = page.getByRole("img", {
    name: "Avatar ilustrado de Ángel Fernández Mota",
  });
  await expect
    .poll(() =>
      avatar.evaluate((image: HTMLImageElement) => image.naturalWidth),
    )
    .toBe(512);
  await page.getByRole("button", { name: "Pausar fondo animado" }).click();
  await expect(
    page.getByRole("button", { name: "Activar fondo animado" }),
  ).toBeVisible();
  expect(
    await page
      .locator(".ambient-background")
      .evaluate((element) =>
        element
          .getAnimations({ subtree: true })
          .every((animation) => animation.playState === "paused"),
      ),
  ).toBe(true);
  await page.emulateMedia({ reducedMotion: "reduce" });
  await expect(
    page.getByRole("button", { name: "Activar fondo animado" }),
  ).toBeHidden();
  expect(
    await page
      .locator(".ambient-background")
      .evaluate((element) => element.getAnimations({ subtree: true }).length),
  ).toBe(0);
});

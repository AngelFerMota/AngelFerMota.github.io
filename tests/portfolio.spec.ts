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
});

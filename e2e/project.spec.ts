import { test, expect } from "@playwright/test";

test.describe("project detail page", () => {
  test("renders the case study with deliverables, metrics and the CTA", async ({ page }) => {
    await page.goto("/proyectos/dealio-automotriz");

    await expect(page.getByRole("heading", { level: 1 })).toContainText("Dealio");
    await expect(page.getByRole("heading", { name: "Entregables" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Resultados" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Agendar Diagnóstico Operativo" })).toBeVisible();
  });

  test("unknown project slug returns 404", async ({ page }) => {
    const response = await page.goto("/proyectos/does-not-exist");
    expect(response?.status()).toBe(404);
  });

  test("list lists every project and links to its detail page", async ({ page }) => {
    await page.goto("/proyectos");

    const cards = page.locator("main a[href^='/proyectos/']");
    await expect(cards).toHaveCount(4);
    await cards.first().click();
    await expect(page).toHaveURL(/\/proyectos\/[a-z0-9-]+$/);
  });

  test("category filter narrows the list", async ({ page }) => {
    await page.goto("/proyectos?categoria=Gastronomía");

    const cards = page.locator("main a[href^='/proyectos/']");
    await expect(cards).toHaveCount(1);
  });
});

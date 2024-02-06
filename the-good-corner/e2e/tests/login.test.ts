import { test, expect } from "@playwright/test";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

test("Go to login page", async ({ page }) => {
  await page.goto("http://frontend:3000/");

  await page.waitForLoadState("networkidle");
  await page.getByRole("link", { name: "Login" }).click();

  await page.waitForLoadState("networkidle");
  await expect(page.getByText("Login Page")).toBeVisible();
});

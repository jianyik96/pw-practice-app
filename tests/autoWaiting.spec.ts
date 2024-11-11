import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => [
  await page.goto(process.env.URL),
  await page.getByText("Button Triggering AJAX Request").click(),
]);

test("auto wating", async ({ page }) => {
  const succesButton = page.locator(".bg-success");

  //   await succesButton.waitFor({ state: "attached" });
  //   const text = await succesButton.textContent();
  //   expect(text).toEqual("Data loaded with AJAX get request.");

  await expect(succesButton).toHaveText("Data loaded with AJAX get request.", {
    timeout: 20000,
  });
  //   await succesButton.click();
});

test("alternative waits", async ({ page }) => {
  const successButton = page.locator(".bg-success");

  //___wait for element
//   await page.waitForSelector(".bg-success");

  //___wait for particular response
//   await page.waitForResponse('http://uitestingplayground.com/ajaxdata')

  //___wait for network calls to be completed ('NOT RECOMMENDED')
  await page.waitForLoadState('networkidle')

  const text = await successButton.allTextContents();
  expect(text).toContain("Data loaded with AJAX get request.");
});

test("timeout", async({page}) => {
    const successButton = page.locator('bg-success');
    await successButton.click()
})

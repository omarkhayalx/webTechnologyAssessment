import { expect, test } from '@playwright/test';

test('User can add a product to the cart', async ({ page }) => {
  await page.goto('https://demo.vercel.store');
  await page.click('text=Shirts');
  await page.click('text=USD', { timeout: 5000 });
  await page.click('text=Black');
  await page.click('text=XXL');
  await page.click('text=Add to Cart');

  await page.click('button[aria-label="Close cart"]');

  const button = page.locator('button[aria-label="Open cart"]');
  const divInsideButton = button.locator('div').locator('div');
  await expect(divInsideButton).toHaveText('1');
});

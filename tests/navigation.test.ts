import { expect, test } from '@playwright/test';

test('User can navigate to the All Products page', async ({ page }) => {
  await page.goto('https://demo.vercel.store');
  await page.click('text=All');
  await expect(page).toHaveURL('https://demo.vercel.store/search');
});

import { expect, test } from '@playwright/test';
import * as fs from 'fs';

interface SearchData {
  query: string;
  expectedResults: number;
}

const testData: SearchData[] = JSON.parse(fs.readFileSync('./data/searchData.json', 'utf-8'));

test.describe('Search Functionality', () => {
  testData.forEach(({ query, expectedResults }) => {
    test(`Search for ${query}`, async ({ page }) => {
      await page.goto('https://demo.vercel.store');
      await page.fill('input[placeholder="Search for products..."]', query);
      await page.press('input[placeholder="Search for products..."]', 'Enter');
      await expect(
        page.locator(`text=Showing ${expectedResults} ${expectedResults === 1 ? 'result' : 'results'} for`)
      ).toBeVisible();
    });
  });
});

import { test } from '@playwright/test';
import { ExampleHomePage } from '../pages/PlaywrightHomePage';

test.describe('Sample Playwright framework', () => {
  test('should open example.com and validate content', async ({ page }) => {
    const homePage = new ExampleHomePage(page);
    await homePage.goto();
    await homePage.expectHeroTitle();
    await homePage.expectFirstParagraph();
  });
});

import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test.describe('Opent the Login Page', () => {
  test('Open the Actimo Login Page', async ({ page }) => {
    const homePage = new Login(page);
    await homePage.goto();
  });
});

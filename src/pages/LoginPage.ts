import { expect, type Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
  readonly usernameInput = this.page.locator('input[name="email"]');
  readonly passwordInput = this.page.locator('input[name="password"]');
  readonly signInButton = this.page.locator('button:has-text("Sign in")');
  readonly acceptCookiesButton = this.page.locator('button:has-text("Accept All Cookies")').first();


  async goto() {
    await super.goto('https://app.actimo.com/admin');
  }

  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.signInButton.click();
  }

  async expectSignInButtonVisible() {
    await expect(this.signInButton).toBeVisible();
  }

  async closeCookiesPopup() {
    const isCookiesButtonVisible = await this.acceptCookiesButton.isVisible().catch(() => false);
    if (isCookiesButtonVisible) {
      await this.acceptCookiesButton.click();
    }
  }

  async expectCookiesPopupVisible() {
    await expect(this.acceptCookiesButton).toBeVisible();
  }
}

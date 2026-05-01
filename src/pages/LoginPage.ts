import { expect, type Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class ExampleHomePage extends BasePage {
  readonly usernameInput = this.page.locator('input[name="username"]');
  readonly passwordInput = this.page.locator('input[name="password"]');
  readonly signInButton = this.page.locator('button:has-text("Sign In")');


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
}

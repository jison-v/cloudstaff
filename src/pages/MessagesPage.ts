import { expect, type Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class MessagesPage extends BasePage {
  readonly createMessageButton = this.page.locator('.ao-actimo-button__content', { hasText: 'Create message' });;
  readonly loadingSpinner = this.page.locator('[class*="loading"], [class*="spinner"], .ao-suspense, [role="progressbar"]');

  async clickCreateMessage() {
    await this.createMessageButton.click({ force: true });
  }

  async expectCreateMessageButtonVisible() {
    await expect(this.createMessageButton).toBeVisible;
  }

  async waitForPageLoad() {
    // Wait for network to be idle
    await this.page.waitForLoadState('networkidle');
  }

  async waitForLoadingToComplete() {
    // Wait for loading spinner to disappear
    await this.loadingSpinner.first().waitFor({ state: 'hidden', timeout: 10000 }).catch(() => {
      // If no loading spinner is found, continue
    });
  }
}

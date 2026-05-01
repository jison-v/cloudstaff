import { expect, type Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class ExampleHomePage extends BasePage {
  readonly heroTitle = this.page.locator('h1');
  readonly firstParagraph = this.page.locator('p').first();

  async goto() {
    await super.goto('https://app.actimo.com/admin');
  }

  async expectHeroTitle() {
    await expect(this.heroTitle).toHaveText('Example Domain');
  }

  async expectFirstParagraph() {
    await expect(this.firstParagraph).toContainText('This domain is for use in documentation examples');
  }
}

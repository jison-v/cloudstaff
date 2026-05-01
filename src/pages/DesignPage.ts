import { expect, type Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class CommunicationDesignPage extends BasePage {
  // Button locators
  readonly gridButton = this.page.locator('button:has-text("GRID")');
  readonly textButton = this.page.locator('button:has-text("TEXT")');
  readonly quizButton = this.page.locator('button:has-text("QUIZ")');
  readonly surveyButton = this.page.locator('button:has-text("SURVEY")');
  readonly reactionsCheckbox = this.page.locator('input[type="checkbox"]').filter({ hasText: 'Reactions' });
  readonly commentsCheckbox = this.page.locator('input[type="checkbox"]').filter({ hasText: 'Comments' });
  readonly shareCheckbox = this.page.locator('input[type="checkbox"]').filter({ hasText: 'Share' });

  // Header elements
  readonly menuButton = this.page.locator('button[name="menu"]');
  readonly searchButton = this.page.locator('button[name="search"]');
  readonly chatButton = this.page.locator('button[name="chat"]');
  readonly headerLogo = this.page.locator('img.ao-header__logo');

  // Insights/Tabs
  readonly openRateTab = this.page.locator('text=Open rate');
  readonly progressTab = this.page.locator('text=Progress');
  readonly openRateValue = this.page.locator('ao-insights-value').filter({ has: this.page.locator('text=Open rate') }).locator('ao-animated-number');
  readonly progressValue = this.page.locator('ao-insights-value').filter({ has: this.page.locator('text=Progress') }).locator('ao-animated-number');

  // Navigation footer buttons
  readonly homeNavButton = this.page.locator('div.ao-device-preview-navbar-footer button[name="home"]');
  readonly directoryButton = this.page.locator('button[name="directory"]');
  readonly taskButton = this.page.locator('button[name="task"]');
  readonly notificationsButton = this.page.locator('button[name="notifications"]');
  readonly profileButton = this.page.locator('button[name="profile"]');

  // Sidebar elements
  readonly sidebarHomeLink = this.page.locator('a.ao-sidebar-content__link:has-text("Home")');

  // Module area
  readonly addModulesMessage = this.page.locator('text=Add modules to build your message');

  // Social actions
  readonly shareButton = this.page.locator('button:has-text("Share")');
  readonly commentsSection = this.page.locator('ol.ao-social-post__comments');

  //Grid Module
readonly oneTileGridOption1 = this.page.locator('xpath=//ao-content-card[1]');
readonly oneTileGridOption2 = this.page.locator('xpath=//ao-content-card[2]');
readonly oneTileGridOption3 = this.page.locator('xpath=//ao-content-card[3]');
readonly gridTileTextInput = this.page.locator('input[placeholder="Title"]');
readonly gridAddImageMediaLibraryButton = this.page.locator('button[class*="ao-media-upload__button-with-icon"]');
readonly searchFromLibraryInput = this.page.locator('input[placeholder="Search"]');
readonly searchFromLibraryResult = this.page.locator('ao-media-card[class*="ng-star-inserted"]');
readonly gridSaveButton = this.page.locator('button[type="submit"]');

async clickSaveButton() {
    await this.gridSaveButton.click();
  }

  async clickGridButton() {
    await this.gridButton.click();
  }

  async uploadImageToGrid() {
    await this.gridAddImageMediaLibraryButton.click();

    await this.searchFromLibraryInput.fill('Person');
    await this.searchFromLibraryResult.first().click();

  }

  async selectTileOption(options: string) {

    switch (options) {
      case '1-tile':
        await this.oneTileGridOption1.click();
        break;
      case '2-tiles':
        await this.oneTileGridOption2.click();
        break;
      case '3-tiles':           
        await this.oneTileGridOption3.click();
        break;
      
      default:
        throw new Error(`Option ${options} not recognized`);
    }
    
  }

  async setGridTileText(input: string) {
    await this.gridTileTextInput.fill(input);
  }

  async clickTextButton() {
    await this.textButton.click();
  }

  async clickQuizButton() {
    await this.quizButton.click();
  }

  async clickSurveyButton() {
    await this.surveyButton.click();
  }

  async expectGridButtonVisible() {
    await expect(this.gridButton).toBeVisible();
  }

  async expectTextButtonVisible() {
    await expect(this.textButton).toBeVisible();
  }

  async expectQuizButtonVisible() {
    await expect(this.quizButton).toBeVisible();
  }

  async expectSurveyButtonVisible() {
    await expect(this.surveyButton).toBeVisible();
  }

  async checkReactions() {
    await this.reactionsCheckbox.check();
  }

  async checkComments() {
    await this.commentsCheckbox.check();
  }

  async checkShare() {
    await this.shareCheckbox.check();
  }

  async uncheckedReactions() {
    await this.reactionsCheckbox.uncheck();
  }

  async uncheckedComments() {
    await this.commentsCheckbox.uncheck();
  }

  async uncheckedShare() {
    await this.shareCheckbox.uncheck();
  }

  async expectReactionsCheckboxVisible() {
    await expect(this.reactionsCheckbox).toBeVisible();
  }

  async expectCommentsCheckboxVisible() {
    await expect(this.commentsCheckbox).toBeVisible();
  }

  async expectShareCheckboxVisible() {
    await expect(this.shareCheckbox).toBeVisible();
  }

  // Header interactions
  async clickMenuButton() {
    await this.menuButton.click();
  }

  async clickSearchButton() {
    await this.searchButton.click();
  }

  async clickChatButton() {
    await this.chatButton.click();
  }

  async expectHeaderLogoVisible() {
    await expect(this.headerLogo).toBeVisible();
  }

  // Tabs interactions
  async clickOpenRateTab() {
    await this.openRateTab.click();
  }

  async clickProgressTab() {
    await this.progressTab.click();
  }

  async expectOpenRateTabVisible() {
    await expect(this.openRateTab).toBeVisible();
  }

  async expectProgressTabVisible() {
    await expect(this.progressTab).toBeVisible();
  }

  // Navigation buttons interactions
  async clickHomeNavButton() {
    await this.homeNavButton.click();
  }

  async clickDirectoryButton() {
    await this.directoryButton.click();
  }

  async clickTaskButton() {
    await this.taskButton.click();
  }

  async clickNotificationsButton() {
    await this.notificationsButton.click();
  }

  async clickProfileButton() {
    await this.profileButton.click();
  }

  async expectHomeNavButtonVisible() {
    await expect(this.homeNavButton).toBeVisible();
  }

  async expectDirectoryButtonVisible() {
    await expect(this.directoryButton).toBeVisible();
  }

  async expectTaskButtonVisible() {
    await expect(this.taskButton).toBeVisible();
  }

  async expectNotificationsButtonVisible() {
    await expect(this.notificationsButton).toBeVisible();
  }

  async expectProfileButtonVisible() {
    await expect(this.profileButton).toBeVisible();
  }

  // Sidebar interactions
  async clickSidebarHomeLink() {
    await this.sidebarHomeLink.click();
  }

  async expectSidebarHomeLinkVisible() {
    await expect(this.sidebarHomeLink).toBeVisible();
  }

  // Module area interactions
  async expectAddModulesMessageVisible() {
    await expect(this.addModulesMessage).toBeVisible();
  }

  // Social actions interactions
  async clickShareButton() {
    await this.shareButton.click();
  }

  async expectShareButtonVisible() {
    await expect(this.shareButton).toBeVisible();
  }

  async expectCommentsSectionVisible() {
    await expect(this.commentsSection).toBeVisible();
  }
}

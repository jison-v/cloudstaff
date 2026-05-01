import { expect, type Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class PublishPage extends BasePage {
  // Card header
  readonly accessCardTitle = this.page.locator('p.ao-card-header__title:has-text("Access")');
  readonly accessCardSubtitle = this.page.locator('p.ao-card-header__subtitle:has-text("Manage who can access this content")');

  // Header tabs
  readonly publishTab = this.page.locator('a.ao-admin-header__tab--active:has-text("Publish")');

  // Contact search and select
  readonly addContactsLabel = this.page.locator('p.contact-search-and-select__add:has-text("Add contacts")');
  readonly searchInput = this.page.locator('input.ao-search-input__input');
  readonly searchResultItem = this.page.locator('span.ao-select-dropdown-item__content');
  readonly browseGroupsContactsButton = this.page.locator('button.ao-recipient__browse-recipients:has-text("Browse groups / contacts")');

  // Advanced access section
  readonly advancedAccessHeader = this.page.locator('button.ao-collapsible-block__header:has-text("Advanced access")');
  readonly expirationCheckbox = this.page.locator('input[name="expiration"]');
  readonly enableLinkedAccessCheckbox = this.page.locator('input[name="disable_deeplink"]');
  readonly enablePublicLinkCheckbox = this.page.locator('input[name="allowPublicLinks"]');

  // Advanced access labels
  readonly expirationLabel = this.page.locator('span:has-text("Expiration")');
  readonly enableLinkedAccessLabel = this.page.locator('span:has-text("Enable linked access")');
  readonly enablePublicLinkLabel = this.page.locator('span:has-text("Enable public link")');

  // Info and help icons
  readonly expirationInfoIcon = this.page.locator('a.ao-access-card-advanced__tooltip-icon');
  readonly enableLinkedAccessHelpIcon = this.expirationLabel.locator('xpath=following-sibling::ao-icon[@name="help"]').first();
  readonly enablePublicLinkHelpIcon = this.enablePublicLinkLabel.locator('xpath=following-sibling::ao-icon[@name="help"]').first();

  // Categories card
  readonly categoriesCardTitle = this.page.locator('p.ao-card-header__title:has-text("Categories")');
  readonly categoriesCardSubtitle = this.page.locator('p.ao-card-header__subtitle:has-text("Assign categories to control which feeds show your content")');
  readonly addCategoryButton = this.page.locator('button[aria-label="Add category"]');
  readonly searchCategoriesInput = this.page.locator('input.ao-search-input__input[placeholder="Search categories..."]');

  // Categories dropdown
  readonly categoriesDropdownCard = this.page.locator('div.ao-select-dropdown__card');
  readonly categoriesDropdownSearchWrapper = this.page.locator('div.ao-select-dropdown__search-wrapper');
  readonly categoriesDropdownSearchIcon = this.page.locator('ao-icon[name="search"]');
  readonly categoriesDropdownContent = this.page.locator('div.ao-select-dropdown__content');
  readonly categoryDropdownItem = this.page.locator('ao-select-dropdown-item');

  // Content preview card
  readonly contentPreviewCardTitle = this.page.locator('p.ao-card-header__title:has-text("Content preview")');
  readonly contentPreviewCardSubtitle = this.page.locator('p.ao-card-header__subtitle:has-text("Customise how this content appears in feeds/academies and email notifications")');
  readonly contentPreviewInfoIcon = this.page.locator('ao-tooltip-icon').first();
  readonly editButton = this.page.locator('button:has-text("Edit")');
  readonly messagePreviewItem = this.page.locator('ao-messagelist-item.admin-message-publish__preview');
  readonly messagePreviewHeadline = this.page.locator('h3.ao-messagelist-item__headline:has-text("New message")');

  // Notifications card
  readonly notificationsCardTitle = this.page.locator('p.ao-card-header__title:has-text("Notifications")');
  readonly notificationsCardSubtitle = this.page.locator('p.ao-card-header__subtitle:has-text("Manage how to notify the added contacts")');

  // Notify contacts section
  readonly notifyContactsHeader = this.page.locator('button.ao-collapsible-block__header:has-text("Notify contacts")');
  readonly viaPushNotificationCheckbox = this.page.locator('label:has-text("Via push notification") input[type="checkbox"]').first();
  readonly viaSmsCheckbox = this.page.locator('label:has-text("Via SMS") input[type="checkbox"]').first();
  readonly viaEmailCheckbox = this.page.locator('label:has-text("Via email") input[type="checkbox"]').first();

  // Push notification fields
  readonly pushTitleInput = this.page.locator('input[formcontrolname="pushTitle"]');
  readonly pushBodyInput = this.page.locator('input[formcontrolname="pushBody"]');

  // SMS fields
  readonly smsTemplateEditor = this.page.locator('textarea.ao-admin-text-editor').first();
  readonly smsCharacterCount = this.page.locator('.ao-admin-text-editor__count').first();

  // Email fields
  readonly emailFromNameInput = this.page.locator('input[formcontrolname="emailFromName"]');
  readonly emailFromAddressInput = this.page.locator('input[formcontrolname="emailFromAddress"]');
  readonly emailSubjectInput = this.page.locator('input[formcontrolname="emailSubject"]');
  readonly emailTitleInput = this.page.locator('input[formcontrolname="emailTitle"]');
  readonly emailContentPreviewRadio = this.page.locator('input#contentPreview');
  readonly emailExtendedPreviewRadio = this.page.locator('input#extendedPreview');

  // Scheduling and reminders section
  readonly schedulingRemindersHeader = this.page.locator('button.ao-collapsible-block__header:has-text("Scheduling and reminders")');
  readonly sendRemindersCheckbox = this.page.locator('input[formcontrolname="sendReminders"]');
  readonly restrictNotificationTimeCheckbox = this.page.locator('input[formcontrolname="restrictNotificationTime"]');
  readonly scheduleForLaterCheckbox = this.page.locator('input[formcontrolname="scheduleForLater"]');

  // Action buttons
  readonly publishAndNotifyButton = this.page.locator('button[ao-actimo-button]:has-text("Publish and notify")');

  // Card header interactions
  async expectAccessCardTitleVisible() {
    await expect(this.accessCardTitle).toBeVisible();
  }

  async expectAccessCardSubtitleVisible() {
    await expect(this.accessCardSubtitle).toBeVisible();
  }

  // Contact search interactions
  async fillSearchInput(text: string) {
    await this.searchInput.fill(text);
  }

  async clickSearchResultItem() {
    await this.searchResultItem.first().click();
  }

  async clickBrowseGroupsContactsButton() {
    await this.browseGroupsContactsButton.click();
  }

  async expectSearchInputVisible() {
    await expect(this.searchInput).toBeVisible();
  }

  async expectBrowseGroupsContactsButtonVisible() {
    await expect(this.browseGroupsContactsButton).toBeVisible();
  }

  // Advanced access interactions
  async clickAdvancedAccessHeader() {
    await this.advancedAccessHeader.click();
  }

  async checkExpirationCheckbox() {
    await this.expirationCheckbox.check();
  }

  async uncheckExpirationCheckbox() {
    await this.expirationCheckbox.uncheck();
  }

  async isExpirationCheckboxChecked() {
    return await this.expirationCheckbox.isChecked();
  }

  async checkEnableLinkedAccess() {
    await this.enableLinkedAccessCheckbox.check();
  }

  async uncheckEnableLinkedAccess() {
    await this.enableLinkedAccessCheckbox.uncheck();
  }

  async isEnableLinkedAccessCheckboxChecked() {
    return await this.enableLinkedAccessCheckbox.isChecked();
  }

  async checkEnablePublicLink() {
    await this.enablePublicLinkCheckbox.check();
  }

  async uncheckEnablePublicLink() {
    await this.enablePublicLinkCheckbox.uncheck();
  }

  async isEnablePublicLinkCheckboxChecked() {
    return await this.enablePublicLinkCheckbox.isChecked();
  }

  // Visibility assertions
  async expectAdvancedAccessHeaderVisible() {
    await expect(this.advancedAccessHeader).toBeVisible();
  }

  async expectExpirationCheckboxVisible() {
    await expect(this.expirationCheckbox).toBeVisible();
  }

  async expectEnableLinkedAccessCheckboxVisible() {
    await expect(this.enableLinkedAccessCheckbox).toBeVisible();
  }

  async expectEnablePublicLinkCheckboxVisible() {
    await expect(this.enablePublicLinkCheckbox).toBeVisible();
  }

  async expectExpirationLabelVisible() {
    await expect(this.expirationLabel).toBeVisible();
  }

  async expectEnableLinkedAccessLabelVisible() {
    await expect(this.enableLinkedAccessLabel).toBeVisible();
  }

  async expectEnablePublicLinkLabelVisible() {
    await expect(this.enablePublicLinkLabel).toBeVisible();
  }

  // Categories card interactions
  async expectCategoriesCardTitleVisible() {
    await expect(this.categoriesCardTitle).toBeVisible();
  }

  async expectCategoriesCardSubtitleVisible() {
    await expect(this.categoriesCardSubtitle).toBeVisible();
  }

  async clickAddCategoryButton() {
    await this.addCategoryButton.click();
  }

  async searchAndSelectCategory(text: string) {
    await this.searchCategoriesInput.fill(text);
    await this.categoryDropdownItem.first().click();
  }

  async expectAddCategoryButtonVisible() {
    await expect(this.addCategoryButton).toBeVisible();
  }

  // Content preview card interactions
  async expectContentPreviewCardTitleVisible() {
    await expect(this.contentPreviewCardTitle).toBeVisible();
  }

  async expectContentPreviewCardSubtitleVisible() {
    await expect(this.contentPreviewCardSubtitle).toBeVisible();
  }

  async clickEditButton() {
    await this.editButton.click();
  }

  async expectEditButtonVisible() {
    await expect(this.editButton).toBeVisible();
  }

  async expectMessagePreviewItemVisible() {
    await expect(this.messagePreviewItem).toBeVisible();
  }

  async expectMessagePreviewHeadlineVisible() {
    await expect(this.messagePreviewHeadline).toBeVisible();
  }

  async getMessagePreviewHeadlineText() {
    return await this.messagePreviewHeadline.textContent();
  }

  // Notifications card interactions
  async expectNotificationsCardTitleVisible() {
    await expect(this.notificationsCardTitle).toBeVisible();
  }

  async expectNotificationsCardSubtitleVisible() {
    await expect(this.notificationsCardSubtitle).toBeVisible();
  }

  async clickNotifyContactsHeader() {
    await this.notifyContactsHeader.click();
  }

  async checkViaPushNotification() {
    await this.viaPushNotificationCheckbox.check();
  }

  async uncheckViaPushNotification() {
    await this.viaPushNotificationCheckbox.uncheck();
  }

  async isViaPushNotificationChecked() {
    return await this.viaPushNotificationCheckbox.isChecked();
  }

  async checkViaSms() {
    await this.viaSmsCheckbox.check();
  }

  async uncheckViaSms() {
    await this.viaSmsCheckbox.uncheck();
  }

  async isViaSmsChecked() {
    return await this.viaSmsCheckbox.isChecked();
  }

  async checkViaEmail() {
    if(!(await this.isViaEmailChecked())) {
      await this.viaEmailCheckbox.check();
    }
  }

  async uncheckViaEmail() {
    await this.viaEmailCheckbox.uncheck();
  }

  async isViaEmailChecked() {
    return await this.viaEmailCheckbox.isChecked();
  }

  // Push notification interactions
  async fillPushTitle(text: string) {
    await this.pushTitleInput.fill(text);
  }

  async fillPushBody(text: string) {
    await this.pushBodyInput.fill(text);
  }

  // Email interactions
  async fillEmailFromName(text: string) {
    await this.emailFromNameInput.fill(text);
  }

  async fillEmailFromAddress(text: string) {
    await this.emailFromAddressInput.fill(text);
  }

  async fillEmailSubject(text: string) {
    await this.emailSubjectInput.fill(text);
  }

  async fillEmailTitle(text: string) {
    await this.emailTitleInput.fill(text);
  }

  async selectEmailContentPreview() {
    await this.emailContentPreviewRadio.click();
  }

  async selectEmailExtendedPreview() {
    await this.emailExtendedPreviewRadio.click();
  }

  // Scheduling and reminders interactions
  async clickSchedulingRemindersHeader() {
    await this.schedulingRemindersHeader.click();
  }

  async checkSendReminders() {
    await this.sendRemindersCheckbox.check();
  }

  async uncheckSendReminders() {
    await this.sendRemindersCheckbox.uncheck();
  }

  async isSendRemindersChecked() {
    return await this.sendRemindersCheckbox.isChecked();
  }

  async checkRestrictNotificationTime() {
    await this.restrictNotificationTimeCheckbox.check();
  }

  async uncheckRestrictNotificationTime() {
    await this.restrictNotificationTimeCheckbox.uncheck();
  }

  async isRestrictNotificationTimeChecked() {
    return await this.restrictNotificationTimeCheckbox.isChecked();
  }

  async checkScheduleForLater() {
    await this.scheduleForLaterCheckbox.check();
  }

  async uncheckScheduleForLater() {
    await this.scheduleForLaterCheckbox.uncheck();
  }

  async isScheduleForLaterChecked() {
    return await this.scheduleForLaterCheckbox.isChecked();
  }

  // Visibility assertions for notifications
  async expectViaPushNotificationCheckboxVisible() {
    await expect(this.viaPushNotificationCheckbox).toBeVisible();
  }

  async expectViaSmsCheckboxVisible() {
    await expect(this.viaSmsCheckbox).toBeVisible();
  }

  async expectViaEmailCheckboxVisible() {
    await expect(this.viaEmailCheckbox).toBeVisible();
  }

  async expectSendRemindersCheckboxVisible() {
    await expect(this.sendRemindersCheckbox).toBeVisible();
  }

  async expectRestrictNotificationTimeCheckboxVisible() {
    await expect(this.restrictNotificationTimeCheckbox).toBeVisible();
  }

  async expectScheduleForLaterCheckboxVisible() {
    await expect(this.scheduleForLaterCheckbox).toBeVisible();
  }

  // Action button interactions
  async clickPublishAndNotifyButton() {
    await this.publishAndNotifyButton.click();
  }

  async expectPublishAndNotifyButtonVisible() {
    await expect(this.publishAndNotifyButton).toBeVisible();
  }

  async isPublishAndNotifyButtonEnabled() {
    return await this.publishAndNotifyButton.isEnabled();
  }
}

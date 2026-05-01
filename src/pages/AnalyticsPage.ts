import { expect, type Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class AnalyticsPage extends BasePage {
  // Header and title
  readonly messageDataHeader = this.page.locator('h3.ao-message-analytics__header:has-text("Message data")');

  // Action buttons
  readonly remindButton = this.page.locator('button:has-text("Remind")');
  readonly createReportButton = this.page.locator('button:has-text("Create report")');
  readonly dropdownMenuButton = this.page.locator('button[aria-haspopup="true"]').last();

  // Analytics cards
  readonly recipientsProgressCard = this.page.locator('ao-recipients-progress');
  readonly uniqueViewsText = this.page.locator('p:has-text("0 unique views")');
  readonly noRateAvailableLabel = this.page.locator('span:has-text("No rate available")');

  readonly recipientsFunnelCard = this.page.locator('ao-recipients-funnel');
  readonly funnelChart = this.page.locator('[data-highcharts-chart="0"]');
  readonly funnelPercentage = this.page.locator('div.ao-recipients-funnel__bottom-percentage__value');

  readonly trafficSourcesCard = this.page.locator('ao-analytics-traffic-sources');
  readonly trafficSourcesTitle = this.page.locator('div.ao-traffic-sources__title:has-text("Traffic sources")');
  readonly trafficSourcesNoDataMessage = this.page.locator('div.ao-traffic-sources__no-data');

  // Module Analytics section
  readonly moduleAnalyticsHeader = this.page.locator('button.ao-collapsible-block__header:has-text("Module Analytics")');
  readonly moduleAnalyticsLabel = this.page.locator('ao-label:has-text("0")');

  // Analytics table
  readonly analyticsTableHeader = this.page.locator('ao-tabbed-table-header');
  readonly employeesTab = this.page.locator('a[ao-tab]:has-text("Employees")');
  readonly groupsTab = this.page.locator('a[ao-tab]:has-text("Groups")');
  readonly departmentsTab = this.page.locator('a[ao-tab]:has-text("Departments")');

  // Table search and controls
  readonly tableSearchInput = this.page.locator('input[placeholder="Search"]').first();
  readonly tableNameHeader = this.page.locator('th span:has-text("Name")');
  readonly tableNotificationHeader = this.page.locator('th span:has-text("Notification")');
  readonly tableOpenedOnHeader = this.page.locator('th span:has-text("Opened on")');
  readonly tableTrafficSourcesHeader = this.page.locator('th span:has-text("Traffic sources")');
  readonly tableEmailHeader = this.page.locator('th span:has-text("Email")');
  readonly tableMobilePhoneHeader = this.page.locator('th span:has-text("Mobile phone")');
  readonly tableDepartmentHeader = this.page.locator('th span:has-text("Department")');
  readonly tableColumnSettingsIcon = this.page.locator('ao-table-column-select');

  // Table content
  readonly adminTable = this.page.locator('ao-admin-table');
  readonly noRecipientsFoundMessage = this.page.locator('h5:has-text("No recipients found")');
  readonly tablePaginator = this.page.locator('ao-paginator');

  // Social sidebar
  readonly socialSidebar = this.page.locator('ao-admin-social-sidebar');
  readonly socialSidebarToggle = this.page.locator('button span:has-text("Social")');
  readonly reactionsKPI = this.page.locator('ao-icon[name="mood_fill"]').first();
  readonly commentsKPI = this.page.locator('ao-icon[name="chat_bubble"]').first();

  async goto(messageId: string = '1733754') {
    await super.goto(`https://app.actimo.com/admin/#/editor/communication/edit/${messageId}/analytics`);
  }

  // Header and title interactions
  async expectMessageDataHeaderVisible() {
    await expect(this.messageDataHeader).toBeVisible();
  }

  // Remind button interactions
  async clickRemindButton() {
    await this.remindButton.click();
  }

  async expectRemindButtonVisible() {
    await expect(this.remindButton).toBeVisible();
  }

  // Create report button interactions
  async clickCreateReportButton() {
    await this.createReportButton.click();
  }

  async expectCreateReportButtonVisible() {
    await expect(this.createReportButton).toBeVisible();
  }

  // Dropdown menu interactions
  async clickDropdownMenu() {
    await this.dropdownMenuButton.click();
  }

  // Recipients progress card interactions
  async expectRecipientsProgressCardVisible() {
    await expect(this.recipientsProgressCard).toBeVisible();
  }

  async expectUniqueViewsTextVisible() {
    await expect(this.uniqueViewsText).toBeVisible();
  }

  async expectNoRateAvailableLabelVisible() {
    await expect(this.noRateAvailableLabel).toBeVisible();
  }

  // Recipients funnel card interactions
  async expectRecipientsFunnelCardVisible() {
    await expect(this.recipientsFunnelCard).toBeVisible();
  }

  async expectFunnelChartVisible() {
    await expect(this.funnelChart).toBeVisible();
  }

  async getFunnelPercentageValue() {
    return await this.funnelPercentage.textContent();
  }

  // Traffic sources card interactions
  async expectTrafficSourcesCardVisible() {
    await expect(this.trafficSourcesCard).toBeVisible();
  }

  async expectTrafficSourcesTitleVisible() {
    await expect(this.trafficSourcesTitle).toBeVisible();
  }

  async expectTrafficSourcesNoDataMessageVisible() {
    await expect(this.trafficSourcesNoDataMessage).toBeVisible();
  }

  // Module Analytics interactions
  async clickModuleAnalyticsHeader() {
    await this.moduleAnalyticsHeader.click();
  }

  async expectModuleAnalyticsHeaderVisible() {
    await expect(this.moduleAnalyticsHeader).toBeVisible();
  }

  // Tab interactions
  async clickEmployeesTab() {
    await this.employeesTab.click();
  }

  async clickGroupsTab() {
    await this.groupsTab.click();
  }

  async clickDepartmentsTab() {
    await this.departmentsTab.click();
  }

  async expectEmployeesTabVisible() {
    await expect(this.employeesTab).toBeVisible();
  }

  async expectGroupsTabVisible() {
    await expect(this.groupsTab).toBeVisible();
  }

  async expectDepartmentsTabVisible() {
    await expect(this.departmentsTab).toBeVisible();
  }

  // Table search interactions
  async fillTableSearch(text: string) {
    await this.tableSearchInput.fill(text);
  }

  async clearTableSearch() {
    await this.tableSearchInput.clear();
  }

  // Table header interactions
  async expectTableNameHeaderVisible() {
    await expect(this.tableNameHeader).toBeVisible();
  }

  async expectTableNotificationHeaderVisible() {
    await expect(this.tableNotificationHeader).toBeVisible();
  }

  async expectTableOpenedOnHeaderVisible() {
    await expect(this.tableOpenedOnHeader).toBeVisible();
  }

  async expectTableTrafficSourcesHeaderVisible() {
    await expect(this.tableTrafficSourcesHeader).toBeVisible();
  }

  async expectTableEmailHeaderVisible() {
    await expect(this.tableEmailHeader).toBeVisible();
  }

  async expectTableMobilePhoneHeaderVisible() {
    await expect(this.tableMobilePhoneHeader).toBeVisible();
  }

  async expectTableDepartmentHeaderVisible() {
    await expect(this.tableDepartmentHeader).toBeVisible();
  }

  async clickTableColumnSettings() {
    await this.tableColumnSettingsIcon.click();
  }

  // Table content interactions
  async expectAdminTableVisible() {
    await expect(this.adminTable).toBeVisible();
  }

  async expectNoRecipientsFoundMessageVisible() {
    await expect(this.noRecipientsFoundMessage).toBeVisible();
  }

  async expectTablePaginatorVisible() {
    await expect(this.tablePaginator).toBeVisible();
  }

  // Social sidebar interactions
  async expectSocialSidebarVisible() {
    await expect(this.socialSidebar).toBeVisible();
  }

  async clickSocialSidebarToggle() {
    await this.socialSidebarToggle.click();
  }

  async expectReactionsKPIVisible() {
    await expect(this.reactionsKPI).toBeVisible();
  }

  async expectCommentsKPIVisible() {
    await expect(this.commentsKPI).toBeVisible();
  }
}

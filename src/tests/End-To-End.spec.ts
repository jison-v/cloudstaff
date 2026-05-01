import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { MessagesPage } from '../pages/MessagesPage';
import { PublishPage } from '../pages/PublishPage';
import { AnalyticsPage } from '../pages/AnalyticsPage';
import { DesignPage } from '../pages/DesignPage';

//The end-to-end scenario of creating, publishing and monitoring the campaign message
// is the main feature of Messages. Adding this in the automated regression suite will 
// help ensure that the main functionality is always working without issue every build/deployment.


test.describe('End-to-End: Login and Create Message', () => {
  test('Login to account and click Create message button', async ({ page }) => {
    // Login to the application
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.closeCookiesPopup();
    await loginPage.expectSignInButtonVisible();
    await loginPage.login('vladyslavl+hiring5@kahoot.com', '94%f^LtPyIJ9'); // Replace with valid credentials
    
    
    // Navigate to Messages page and create a message
    const messagesPage = new MessagesPage(page);
    await messagesPage.waitForLoadingToComplete();
    await messagesPage.expectCreateMessageButtonVisible();
    await messagesPage.clickCreateMessage();

    // Add a Design module-Navigation
    const designPage = new DesignPage(page);
    await designPage.clickGridButton(); 
    await designPage.selectTileOption('1-tile');
    await designPage.setGridTileText('Grid Tile Message');
    await designPage.uploadImageToGrid();
    await designPage.clickSaveButton();
    

    // Setup and Publish the campaign message 
    const publishPage = new PublishPage(page);
    await publishPage.fillSearchInput('Test');
    await publishPage.clickSearchResultItem();

    await publishPage.clickAddCategoryButton();
    await publishPage.searchAndSelectCategory('News');
    
    await publishPage.checkViaEmail();
    await publishPage.clickPublishAndNotifyButton

    // Monitor and Review the performance of campaign message
    const analyticsPage = new AnalyticsPage(page);

  });
});

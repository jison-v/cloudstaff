import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { MessagesPage } from '../pages/MessagesPage';
import { CommunicationDesignPage } from '../pages/DesignPage';

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

    // Add a Design module
    const designPage = new CommunicationDesignPage(page;
    await designPage.waitForLoadingToComplete();
    await designPage.expectAddDesignModuleButtonVisible();
    await designPage.clickAddDesignModule();
    )
  });
});

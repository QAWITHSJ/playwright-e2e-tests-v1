import {test, expect} from '../utils/pageFixtures';

test.describe('Dashboard Tests', () => {


    test.beforeEach(async ({ loginPage }) => {
        await loginPage
    })


    test('@dashboard @regression Verify Dashboard Page Title', async ({ dashboardPage }) => {
        await dashboardPage.pageTitle();
    })

    test('@dashboard @regression Verify Welcome Message', async ({ dashboardPage }) => {      
        await dashboardPage.getWelcomeMessageText();
    })

    test('@dashboard @regression Verify Menu Items Count', async ({ dashboardPage }) => {
        await dashboardPage.menuItemsCountShouldBeFiften(15);
    });

})
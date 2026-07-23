import {test, expect} from '../utils/pageFixtures';

test.describe('Dashboard Tests', () => {
    test.beforeEach(async ({page})=>{
       await page.goto('https://demo.guru99.com/V4/manager/Managerhomepage.php')
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
import {test, expect} from '../utils/pageFixtures';

test.describe('Dashboard Tests', () => {


    test.beforeEach(async ({ loginPage }) => {
        loginPage.doLogin('mngr663722', 'aruqYbA');
    })


    test('Verify Dashboard Page Title', async ({ dashboardPage }) => {
        await dashboardPage.pageTitle();
    })

    test('Verify Welcome Message', async ({ dashboardPage }) => {      
        await dashboardPage.getWelcomeMessageText();
    })

    test('Verify Menu Items Count', async ({ dashboardPage }) => {
        await dashboardPage.menuItemsCountShouldBeFiften(15);
    });

})
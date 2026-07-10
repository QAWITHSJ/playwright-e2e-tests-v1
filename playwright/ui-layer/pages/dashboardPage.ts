import { expect, Locator, Page } from "@playwright/test";
import { Default_MediumTimeOut } from "../utils/helpers";

export class DashboardPage{

    private readonly page: Page;
    readonly welcomeMessage:Locator;
    readonly menuItems: Locator;
    

    constructor(page: Page) {
        this.page = page;
        this.welcomeMessage = page.getByText('Welcome To Manager\'s Page of Guru99 Bank');
        this.menuItems = page.locator('ul.menusubnav>li>a');

    }

    async pageTitle(){
        await expect(this.page).toHaveTitle('Guru99 Bank Manager HomePage');
    }

    async getWelcomeMessageText(){
        await expect(this.welcomeMessage).toBeVisible();
    }

    async menuItemsCountShouldBeFiften(expectedMenuItemscount:number){
        await expect(this.menuItems.first()).toBeVisible({timeout:Default_MediumTimeOut})
        await expect(this.menuItems).toHaveCount(expectedMenuItemscount, {timeout:Default_MediumTimeOut});
    }
      
}
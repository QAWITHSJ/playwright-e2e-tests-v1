import { expect, Locator, Page } from "@playwright/test";
import { Default_MediumTimeOut } from "../utils/helpers";

export class CustomerPage{

    private readonly page: Page;
    readonly nameInput:Locator;
    readonly menuItems: Locator;
    readonly dobInput: Locator;
    readonly addressInput: Locator;
    readonly cityInput: Locator;
    readonly stateInput: Locator;
    readonly pinInput: Locator;
    readonly mobileNumberInput: Locator;
    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly submitBtn: Locator;

    //Customer Registartion Message Page
    readonly customerRegistrationSuccessMsg:Locator
    readonly customerIdTable : Locator

    constructor(page: Page) {
        this.page = page;
        this.nameInput = page.locator('input[name="name"]');
        this.menuItems = page.getByRole('link', {name:'New Customer', exact:true})
        this.dobInput = page.locator('input[name="dob"]');
        this.addressInput = page.locator('textarea[name="addr"]');
        this.cityInput = page.locator('input[name="city"]');
        this.stateInput = page.locator('input[name="state"]');
        this.pinInput = page.locator('input[name="pinno"]');
        this.mobileNumberInput = page.locator('input[name="telephoneno"]');
        this.emailInput = page.locator('input[name="emailid"]');
        this.passwordInput = page.locator('input[name="password"]');
        this.submitBtn = page.locator('input[name="sub"]')

    

        //Customer Registartion Message Page
        this.customerRegistrationSuccessMsg = page.getByText('Customer Registered Successfully!!!',{exact:true})
        this.customerIdTable = page.locator('table#customer')
    }

    async navigateToNewCustomerPage(){
        await this.menuItems.click();
    }   

    async fillCustomerForm(name: string, dob: string, address: string, city: string, state: string, pin: string, mobileNumber: string, email: string, password: string) {
        await this.nameInput.fill(name);
        await this.dobInput.click()
        await this.dobInput.fill(dob); 
        await this.addressInput.fill(address);
        await this.cityInput.fill(city);
        await this.stateInput.fill(state);
        await this.pinInput.fill(pin);
        await this.mobileNumberInput.fill(mobileNumber);
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
    }

    async clicksubmitBtn(){
        await this.submitBtn.click()
    }

    async successRegistrationMsgValidation(){
        await expect(this.customerRegistrationSuccessMsg).toBeVisible({timeout:Default_MediumTimeOut})
    }

    async getCustomerId(){
         const customerID=await this.customerIdTable.getByRole('row').nth(3).locator('td').nth(1).textContent()
        expect(customerID).toBeTruthy()
         return customerID
    }

    async invalidPinCodeErrorMessage(invalidPincodeErrorMsg:string){
        await expect(this.page.getByText(invalidPincodeErrorMsg)).toBeVisible({timeout:Default_MediumTimeOut})
    }

      
}
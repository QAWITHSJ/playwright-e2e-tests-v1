import {test, expect} from '../utils/pageFixtures';


test.describe('Customer Tests', () => {

    test('@customer @customer_creation @regression Verify New Customer Form Submission', async ({ customerPage }) => {
        const date=new Date();

        await customerPage.navigateToNewCustomerPage();
        await customerPage.fillCustomerForm('John Doe', '1990-01-02', '123 Main St', 'New York', 'NY', '100011', '1234567890',`johndoe${Date.now()}@gmail.com`, "john@123");
        await customerPage.clicksubmitBtn()
        await customerPage.successRegistrationMsgValidation()
        const customerIdStr = await customerPage.getCustomerId()
        let customerId = Number(customerIdStr);
        console.log(`Customer ID: ${customerId}`)
    })

    test('@customer @customer_creation @regression Verify New Customer Form Submission with 5 digits PINCODE error message', async ({ customerPage }) => {
        await customerPage.navigateToNewCustomerPage();
        await customerPage.fillCustomerForm('John Doe', '1990-01-02', '123 Main St', 'New York', 'NY', '10001', '1234567890',`johndoe${Date.now()}@gmail.com`, "john@123");
        await customerPage.clicksubmitBtn()
        await customerPage.invalidPinCodeErrorMessage('PIN Code must have 6 Digits')
    })

    test('@customer @customer_creation @regression submit form without filling data and verify alert message', async({page,customerPage})=>{
        await customerPage.navigateToNewCustomerPage();
        
        page.once('dialog', async dialog=>{
            expect(dialog.message()).toContain('please fill all fields')
            dialog.accept()
        })
        await customerPage.clicksubmitBtn()

    })

})
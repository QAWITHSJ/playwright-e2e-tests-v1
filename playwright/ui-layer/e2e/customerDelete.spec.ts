import {test, expect} from '../utils/pageFixtures';


test.describe('Delete Customer Tests', () => {


    test('@customer @customer_delete @regression Verify Delete Customer', async ({ customerPage, deleteCustomerPage, page }) => {
        await customerPage.navigateToNewCustomerPage();
        await customerPage.fillCustomerForm('John Doe', '1990-01-02', '123 Main St', 'New York', 'NY', '100011', '1234567890',`johndoe${Date.now()}@gmail.com`, "john@123");
        await customerPage.clicksubmitBtn()
        await customerPage.successRegistrationMsgValidation()
        const customerId=await customerPage.getCustomerId()
        console.log(`Customer ID: ${customerId}`)
        await deleteCustomerPage.navigateToDeleteCustomerPage()
        await deleteCustomerPage.enterCustomerIdInput(customerId!)  
        await deleteCustomerPage.handleAlertWithAccept()
        await deleteCustomerPage.clickOnAccountSubmit()
        await page.goBack()
        await deleteCustomerPage.navigateToDeleteCustomerPage() 
        await deleteCustomerPage.enterCustomerIdInput(customerId!)    
        await deleteCustomerPage.clickOnAccountSubmit()   


    })
})

//deleteCustomer.spec.ts
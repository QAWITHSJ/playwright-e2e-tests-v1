import {test as Base, expect} from '@playwright/test'
import { LoginPage } from '../pages/loginpage'
import { CustomerPage } from '../pages/customerPage'
import { DeleteCustomerPage } from '../pages/deleteCustomerPage'
import {DashboardPage} from '../pages/dashboardPage'
import dotenv from 'dotenv'
dotenv.config()

// type MyPageFixture={

//     name: String,
//     age: number
// }

type MyPageFixture={

    //loginPage: LoginPage,
    customerPage: CustomerPage,
    deleteCustomerPage: DeleteCustomerPage,
    dashboardPage: DashboardPage
    //age:number
}

export const test = Base.extend<MyPageFixture>({

    // age: async ({}, use)=>{
    //     await use(50)
    // },

    // loginPage: async ({page},use)=>{
    //     const lp=new LoginPage(page) 
    //     await lp.doLogin(process.env.GURU99_USERNAME!, process.env.GURU99_PASSWORD!);
    //     await use(lp)  
    // },

    customerPage: async ({page},use)=>{
        const cp = new CustomerPage(page)
        await use(cp)
    },
    deleteCustomerPage: async({page},use)=>{
        const dp = new DeleteCustomerPage(page)
        await use(dp)
    },
    dashboardPage: async ({page},use)=>{
        const dashboardpage = new DashboardPage(page)
        await use(dashboardpage)
    }
})

export {expect}

import {test,expect,  APIResponse} from '@playwright/test'
import { getAllBooksApi } from '../services/bookingsApiService'

test.describe('Get All Books API Tests', ()=>{

    let response:any

    test.beforeEach(async({request})=>{
         response= await getAllBooksApi(request)
    })


    test('status is 200', async({request})=>{
       const responseBody = await response.json()
       console.log(responseBody)
       await expect(response.status()).toBe(200)
    })

    test('bookingid validations', async({request})=>{
       const responseBody = await response.json()
       console.log(responseBody)
       responseBody.forEach((element:any)=> {
        expect(element).toHaveProperty('bookingid')
        expect(typeof element.bookingid).toBe('number')
       });
    })

})
import {test, expect, APIResponse} from '../fixtures/generate-token-fixture'
import { updateBookingApi } from '../services/bookingsApiService'
import payload from '../utility/payloads/createBookingPayload.json'

test.describe('Update Booking API Tests', ()=>{

    let updateBookingApiResponse:APIResponse

    test.beforeEach(async({request, authToken})=>{
        updateBookingApiResponse=await updateBookingApi(request,payload.createBookingpayload,authToken)

    })


    test('status is 200', async({request})=>{
       const responseBody = await updateBookingApiResponse.json()
       console.log(responseBody)
       await expect(updateBookingApiResponse.status()).toBe(200)
    })

       test('response data validation', async()=>{
        const responseBody = await updateBookingApiResponse.json()
        expect(responseBody.firstname).toBe(payload.createBookingpayload.firstname)
        expect(responseBody.lastname).toBe(payload.createBookingpayload.lastname)
       })

})

test.describe('Update Booking API Tests - Invalid Tests', ()=>{


    test('invalid token response is 403', async({request})=>{
       const updateBookingApiResponse=await updateBookingApi(request,payload.createBookingpayload,"6ydvjhgdbdvx")
       await expect(updateBookingApiResponse.status()).toBe(403)
    })

       test('empty token response is 403', async({request})=>{

        const updateBookingApiResponse=await updateBookingApi(request,payload.createBookingpayload,"")
       await expect(updateBookingApiResponse.status()).toBe(403)
       })

})
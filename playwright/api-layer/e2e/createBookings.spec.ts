import { test, expect, APIResponse } from '@playwright/test'
import { createBookingApi } from '../services/bookingsApiService'
import payload from '../utility/payloads/createBookingPayload.json'
import { createBooking } from '../utility/types/createBooking-interface'


test.describe('Create Booking API Tests', () => {
   let responseBodyCreateBookingApi: createBooking
   let response: any

   test.beforeEach(async ({ request }) => {
    response = await createBookingApi(request, payload.createBookingpayload)
    responseBodyCreateBookingApi = await response.json()
    console.log(responseBodyCreateBookingApi)

   })

   test('status is 200', async({request})=>{
     expect(await response.status()).toBe(200)
   })

   test('response data validation', async()=>{
    expect(responseBodyCreateBookingApi.booking.firstname).toBe(payload.createBookingpayload.firstname)
    expect(responseBodyCreateBookingApi.booking.lastname).toBe(payload.createBookingpayload.lastname)
   })

    test('schema validation', async()=>{
    expect(typeof responseBodyCreateBookingApi.bookingid).toBe('number')
    expect(typeof responseBodyCreateBookingApi.booking).toBe('object')
    expect(typeof responseBodyCreateBookingApi.booking.bookingdates).toBe('object')
    expect(typeof responseBodyCreateBookingApi.booking.firstname).toBe('string')
   })


})

test.describe('Create Booking API Invalid Tests', () => {

    test('remove required params in payload response is 500', async({request})=>{
        const response=await createBookingApi(request, payload.createBookingInvalidpayload)
        await expect(response.status()).toBe(500)
    })
})
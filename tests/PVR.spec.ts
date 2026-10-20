import {test , expect} from "@playwright/test"

test("PVR Cinemas" , async({page})=>{

    //Open the web link    
    await page.goto("https://www.pvrcinemas.com/")
    const URL = page.url()
    console.log(`Link is ${URL}`);

    //wait for the content to be loaded
    await page.waitForLoadState("domcontentloaded")
    //select the city
    await page.getByRole('button', {name: '[object Object]'}).click()
    await page.getByPlaceholder('Search for city').fill('Chennai')
    await page.getByRole('option', {name: 'Chennai'}).click()
    //select cinema
    await page.getByText('Cinema', {exact: true}).click()
    await page.getByRole('button', {name:'Select Cinema'}).click()
    //select the location
    await page.getByText('INOX The Marina Mall, OMR, Chennai',{exact: true}).click()
    //select movie
    await page.locator('li[class="p-dropdown-item"]').nth(1).click()
    await page.getByText('JAILER 2',{exact: true}).last().click()
    //select show time
    await page.getByText('04:05 PM', {exact: true}).click()
    //click okay
    await page.getByRole('button', {name:'Submit'}).click()
    await page.waitForTimeout(3000)
    //agree terms and conditions 
    await page.getByRole('button', {name: 'Accept'}).click()
    //select the seat
    await page.locator('[id="CL.CLUB|F:5"]').click()
    //verifying the seat info
    let seatInfo= page.locator('[class="seat-info"]')
    await expect (seatInfo).toContainText('CLUB')
    await expect (seatInfo).toContainText('F5')  
    //check the price
    let grandTotal = page.locator('[class="grand-prices"]')
    await expect (grandTotal).toHaveText('218.02')
    //click proceed 
    await page.getByRole('button', {name: 'Proceed'}).click()
})
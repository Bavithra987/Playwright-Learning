import {test, expect} from "@playwright/test"

test('Decathlon', async({page})=>{
    
//Launch website
await page.goto("https://www.decathlon.in/")
await page.waitForLoadState('domcontentloaded')
const Title = await page.title()
console.log("The page title is ", Title)
//await expect(page.getByRole('link', {name: "Decathlon Home"})).toBeVisible()
//await expect(page).toHaveURL("https://www.decathlon.in/")
//await expect (page.locator('//input[@type= "search"]'))
await page.getByPlaceholder('Search for 60+ sports and 6,000+ products').fill('shoes')
await page.locator('li[class="py-2 text-sm! text-black"]').nth(4).click()
await expect(page.locator('//h1[text()="Football Footwear"]')).toContainText('Football Footwear')
await page.locator('span[data-test-id="title:Sport"]').click()
await page.locator('input[data-test-id="filter-checkbox-sport_pratice_en-Football"]').click()
await page.locator('span[data-test-id="title:Gender"]').click()
await page.locator('input[data-test-id="filter-checkbox-gender_id_en-GIRLS"]').click()
await page.locator('span[data-test-id="title:Size"]').click()
await page.locator('input[data-test-id="filter-checkbox-indian_size-UK 2.5  EU35"]').click()
await page.locator('span[data-test-id="title:Price"]').click()
await page.locator('div[data-test-id="product-card:product-card:title"]').nth(0).click()
await page.locator('span[data-test-id="pdp-size-option-text-6"]').click()
await page.locator('//span[text()="Add to cart"]').click()
let cartValue = await page.locator('span[data-test-id="header-desktop:cart-count-badge"]').allTextContents()
console.log(cartValue);
})

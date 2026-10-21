import {test, expect} from "@playwright/test"

test('Decathlon', async({page})=>{
    
//Launch website
await page.goto("https://www.decathlon.in/")
const Title = page.title()
console.log("The page title is ", Title)
await expect(page).toHaveURL("https://www.decathlon.in/")
await expect (page.getByRole('searchbox')).toBeEnabled()
await page.getByTestId('search-input-desktop:container').fill('shoes')


})
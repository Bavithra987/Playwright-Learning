import {test} from "@playwright/test"

import login from '../Utils/data.json'

for(let data of login){
test(`Learn read json file ${data.TestcaseID}`, async({page})=>
{
    await page.goto("https://login.salesforce.com/?locale=in")
    await page.locator('[id="username"]').fill(data.userName)
    await page.locator('[id="Login"]').click()
    await page.locator('[id="password"]').fill(data.password)
    await page.locator('[id="Login"]').click()
    

})
}
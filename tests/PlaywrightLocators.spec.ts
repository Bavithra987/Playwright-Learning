import {test,expect} from '@playwright/test'

test('learn', async({page})=>{

await page.goto('https://leaftaps.com/opentaps/control/login')
await page.getByLabel('Username', {exact:true}).fill('democsr')
await page.getByLabel('Password', {exact:true}).fill('crmsfa')
await page.getByRole('button', {name:'Login'}).click()
await expect (page.getByAltText('CRM/SFA')).toBeVisible
await page.waitForTimeout(2000)
}
)

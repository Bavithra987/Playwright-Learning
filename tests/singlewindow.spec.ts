import { test} from "@playwright/test";

test('single window handling',async({page,context})=>{
//Launch the website
await page.goto('https://leafground.com/window.xhtml')
//create promise for newwindow as well as click the link toopen new window
let [newwindow] = await Promise.all([context.waitForEvent('page'), page.locator('[id="j_idt88:new"]').click()])
//printing both window title
console.log(`First window title is ${await page.title()}`)
await newwindow.waitForEvent('domcontentloaded')
console.log(`Second window title is ${await newwindow.title()}`)
await page.bringToFront()
await newwindow.bringToFront()
//fill the data in new window
await newwindow.getByPlaceholder('E-mail Address').fill('test123@testleaf.com')
await newwindow.locator('[id="message"]').fill('Playwright window handling')
await newwindow.waitForTimeout(2000)
})


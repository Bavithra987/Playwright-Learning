import {test, expect} from "@playwright/test"

test("learn nested frame", async({page})=>{

await page.goto("https://www.leafground.com/frame.xhtml")                   //opening the Frame URL
let parentframe = page.frameLocator('//iframe[@src="page.xhtml"]')          //locating the parentlocator
let childframe = parentframe.frameLocator('#frame2')                        //locating the childlocator from parent locator
await page.waitForTimeout(2000)
let beforeclick = await childframe.locator('#Click').innerText()            //getting the text before clicked
console.log(`Before text is ${beforeclick}`)
await childframe.locator('#Click').click()                                  //clicked the nested frame
await page.waitForTimeout(2000)
expect(childframe.locator('#Click')).toHaveText('Hurray! You Clicked Me.')  // verify the exact text
let afterclick = await childframe.locator('#Click').innerText()             // getting the text after clicked
console.log(`After text is ${afterclick}`)
})
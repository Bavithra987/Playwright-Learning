//Launch this "https://www.leafground.com/alert.xhtml"
//click the prompt alert 
//handle the alert by typing the message

import test from "@playwright/test"

   test('learn alert', async({page})=>{

    page.on("dialog",async(alert)=>{
      const message = alert.message()
      console.log("Alert message shows", message)
      console.log("Alert type is " , typeof alert)
      await alert.accept("Bavithra")
    })
    await page.goto("https://www.leafground.com/alert.xhtml")
    await page.locator("(//span[text()='Show'])").nth(4).click()
    //page.waitForTimeout(2000)
    })

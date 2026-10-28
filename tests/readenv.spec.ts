import test from "@playwright/test"
import dotenv from 'dotenv'
import {log} from 'console'

//setting an QA or Prod into a variable
let fileName = process.env.envData || 'qa' || 'prod'
dotenv.config({path:`Data/${fileName}.env`})

test("learn to use env file" , async({page})=>{

    //console.log(process.env) // to access the local system data
    await page.goto(process.env.S_URL as string)
    await page.locator('[id="username"]').fill(process.env.S_USERNAME as string)
    await page.waitForTimeout(2000)
    await page.locator('[id="Login"]').click()
    await page.locator('[id="password"]').fill(process.env.S_PASSWORD as string)
    await page.locator('[id="Login"]').click()

})

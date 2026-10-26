import {test,expect} from "@playwright/test"
import path from "node:path"
import * as fs from "fs";

test("file download" , async({page})=>{
    //open the link
    await page.goto("https://the-internet.herokuapp.com/download")
    //create event listener
    const filedownloadpromise = page.waitForEvent('download')
    //click the download action
    page.locator('a[href="download/Images.txt"]').click()
    //resolve event listener
    const filedownload = await filedownloadpromise
    //save the file in the downloads folder
    filedownload.saveAs(path.join(__dirname, '../Downloads', filedownload.suggestedFilename()))
    //await filedownload.saveAs(`Downloads/${filedownload.suggestedFilename()}`)
    //check the downloaded file
    expect(filedownload.suggestedFilename()).toContain('Images')
    const customfilePath = 'Downloads/Images.txt'
    expect(fs.existsSync(customfilePath)).toBeTruthy()
})
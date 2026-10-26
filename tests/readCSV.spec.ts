import test from "@playwright/test"
import {parse} from "csv-parse/sync"
import fs from 'fs'
import path from "path"

let files= fs.readFileSync('Utils/data.csv','utf-8')
console.log(files)

let files1:any[]=parse(files,{columns:true,skip_empty_lines:true})

for(let data of files1){
test(`readCSV code ${data.tcid}`, async({page})=>{

    await page.goto("https://leaftaps.com/opentaps/control/main")
    await page.locator('[id="username"]').fill(data.username)
    await page.locator('[id="password"]').fill(data.password)
    await page.locator('//input[@type="submit"]').click()

})
}
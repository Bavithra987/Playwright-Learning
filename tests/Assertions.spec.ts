import test, { expect } from "@playwright/test";

test('learn' , async({page})=>{

await page.goto("https://www.leafground.com/input.xhtml")
const Title = page.title()
console.log(Tittle);
const Url = page.url
console.log(Url);
// rety assertion or location based assertion
await expect(page).toHaveURL("https://leaftaps.com/opentabs/contro/login")

})
import test, { expect } from "@playwright/test";

test('learn assertions' , async({page})=>{

await page.goto("https://leaftaps.com/opentaps/control/main")
const Title = page.title()
console.log(Title);
const Url = page.url
console.log(Url);

// rety assertion or location based assertion
await expect(page).toHaveURL("https://leaftaps.com/opentabs/contro/login")

//check to be disabled 
await page.locator ('id="username"')

})
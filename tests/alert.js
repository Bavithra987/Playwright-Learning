import test from "@playwright/test";
test("learn alert", async ({ page }) => {
    page.goto("https://www.leafground.com/alert.xhtml");
    page.locator('//span[class="ui-button-text ui-c"][6]').click();
    page.once("dialog", async (alert) => {
        const message = alert.message();
        console.log("Alert message shows", message);
        alert.accept("Bavithra");
    });
});

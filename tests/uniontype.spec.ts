import test from "@playwright/test";

test('learn union type ',async({page})=>{

type paymentMethods = "UPI" | "CreditCard" | "paypal"

function makePayment(paymentmode: paymentMethods)
{
    console.log(paymentmode);
}
makePayment("UPI")
makePayment("debitcard")

})
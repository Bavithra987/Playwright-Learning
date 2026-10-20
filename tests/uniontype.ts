//Creating union type with three values 
//created a function to send that value as parameter
//veified with valid data and invalid data

type paymentMethods = "UPI" | "CreditCard" | "paypal"

function makePayment(paymentmode: paymentMethods)
{
    console.log(paymentmode);
}
//makePayment("UPI")
makePayment("debitcard")




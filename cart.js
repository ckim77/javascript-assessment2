///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

const total = cart.reduce((a, b) => a + b.price, 0)
// console.log(total)


//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

const calcFinalPrice = (cartTotal, couponValue, tax) => {
    let total = cartTotal * (tax+1) - couponValue;
    return total;
}


//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
I would have the 4 following objects: name, address, phone number, card type, card number, and tip percentage.
I would use name, address and phone number so that I can contact the customer in case of an emergency.  This would be especially important for delivery.  Card is the most essential as this is the 
payment method.  The tip amount is for the delivery guy, which is necessary for transactions in the States.

*/

/*
    Now, create a customer object following your own
    guidelines.
*/

const customer = {
    name: 'Chris',
    address: '7777 Willy Wonka Land',
    phoneNumber: 123-4565-7654,
    cardType: "Master Card",
    cardNumber: 12342323456,
    tipPct: 15 
}
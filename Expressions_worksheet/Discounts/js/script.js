//Patrick Little
//Sept. 10, 2014
//Expressions_Worksheet
//Discounts

//Original price
var original = 200;

//discount percentage
var discount = 20;

//Description of item
var description = "Diamond ring";

//sales tax percentage
var saleTax = .08;

//the discount
var discountResult = original/discount;

//price of the item without tax
var priceWithoutTax = original - discountResult;

//the tax
var saleTaxResult = priceWithoutTax * saleTax;

//price of the item with tax
var priceWithTax = Number(saleTaxResult) + Number(priceWithoutTax);





//print the result
console.log("Your " +description+ " was originally $"+original+", but after a " +discount+"% discount, it is now $"+priceWithoutTax+ " without tax, and $"+priceWithTax+ " with tax.");




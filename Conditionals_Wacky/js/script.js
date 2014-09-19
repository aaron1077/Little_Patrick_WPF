//Patrick Little
//Sept. 18 2014
//Assignment: Conditionals
//Conditionals_Wacky

//variable error
var error = "";
//alert
alert("If a donkey is older than 2 years old or 2 feet tall it can rome free in the pasture.");
//prompt stating how old the donkey is
var age = prompt("How old is your donkey?");
//prompt stating how tall your donkey is
var tall = prompt("How tall is your donkey?");
//variable result
var result;
//if  age == error or tall == error the prompt the message
if(age == error || tall == error ){
    //prompt the message
    var errorMessage = prompt("enter your answer please.");
}
//if result age greater than 2 or tall greater than 2 then alert message otherwise alert the second message
result = (age > 2 || tall > 2) ? alert("Your donkey can rome free in the pasture") : alert("Your donkey is not qualified to rome free."); 

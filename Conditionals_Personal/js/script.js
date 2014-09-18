//Patrick Little
//sept. 18 2014
//Assignment: Conditionals
//Conditionals Personal

//blank variable
var blank = "";
//variable how many t-shirts you want
var howMany = prompt("How many t-shirts would you like to buy");
//print how many
console.log(howMany);
//if statement: if howMany is greater than 0 than alert the message
if(howMany > 0){
    //alert the message if greater than zero
    alert("You have ordered " +howMany+ " t-shirts.");
//else if statement
}else if (howMany == blank){
    //if hwMany equals blank variable than print prompt
    var errorInput = prompt("Please enter the amount of t-shirts you want to buy.");
    //print errorInput
    console.log(errorInput);
}

//variable size
var size = prompt("What size t-shirt would you like to buy? We have medium, small, and large.");

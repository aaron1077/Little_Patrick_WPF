//Patrick Little
//Sept. 23 2014
//Assignment:Functions
//Personal

//Created first alert
alert("You bought a bag of apples, oranges, and bananas. We are going to find out how many pieces of fruits you have.");
//Variable fruits holding a function
var fruits = function (a, o, b){
    //variable howMany
    var howMany = Number(a) + Number(o) + Number(b);
    //return howMany
    return howMany;
}
//variable total
var total = fruits(prompt("How many apples did you have?"), prompt("How many oranges did you have?"), prompt("How many bananas did you have?"));

console.log("You have a total of " +total+ " fruits.");





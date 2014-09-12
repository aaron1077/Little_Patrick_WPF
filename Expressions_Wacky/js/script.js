//Patrick Little
//Sept. 11, 2014
//Assignment: Expressions
//Expressions_Wacky

// first alert
alert("We are going to find the perimeter of your house and shed and add them together in feet.");

//variable length of house
var houseLength = prompt("What is the length of the house?");

//print the length
console.log(houseLength);

//variable width of house
var houseWidth = prompt("What is the width of the house?");

//print the width
console.log(houseWidth);


//variable perimeter of house
var housePerimeter = (houseLength * 2) + (houseWidth * 2);

//print the perimeter of house
console.log(housePerimeter);

//alert the perimeter
alert("The perimeter of your house is " +housePerimeter+ " feet.")

//Variable length of shed
var shedLength = prompt("What is the length of the shed?")

//print the length of shed
console.log(shedLength);

//Variable width of shed
var shedWidth = prompt("What is the width of the shed?");

//Print the width of shed
console.log(shedWidth);

//Variable perimeter of shed
var shedPerimeter = (shedLength * 2) + (shedWidth * 2);

//Print the perimeter of the shed
console.log(shedPerimeter);

//alert the perimeter
alert("The perimeter of your shed is " +shedPerimeter+ " feet.");


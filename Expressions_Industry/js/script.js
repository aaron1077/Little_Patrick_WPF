//Patrick Little
//Sept. 11 2014
//Assignment: Expressions
//Expressions_Industry

//alerting that we are going to find the are of a trapezoid
alert("We are going to find the area of a trapezoid screen laptop, would you like to help me?")

//length of the top base
var topBase = prompt("The top base of the trapezoid is how many inches?");

//length of the bottom base
var bottomBase = prompt("The bottom base of the trapezoid is how many inches?");

//length of the height
var height = prompt("The height of the trapezoid is how many inches?");

//area of a trapezoid
var area = ((Number(topBase) + Number(bottomBase)) * (Number(height))/2);

//print the area
console.log(area);

//The result of the trapezoid
var result = "The area of your trapezoid screen is " +area+ " inches squared!";

//alert the result out
alert(result);
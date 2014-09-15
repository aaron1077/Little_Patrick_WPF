//Patrick Little
//Sept. 15, 2014
//Activity; Conditional Worksheet

//variable number
var number = 120;

//variable c, the formula to convert fahrenheit to celsius
var c = (number - Number(32)) * (5/9);

//variable degree either F for fahrenheit or C for celsius
var degree = "F";

//if statement saying if degree is equal to F
if(degree == "F"){
    //then run this string
    console.log("The temperature is " +number+ " degrees Fahrenheit");
// if the degree is equal to C
}else if(degree =="C"){
    //if equal to C then run this string
    console.log("The temperature is " +c+ " degrees Celsius");
}


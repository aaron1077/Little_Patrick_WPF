//Go To Training Week2
//Patrick Little
//Sept 10 2014
//WPF Section 02
//alert("hello");

// Create a calculator for age

//Ask the user their name
var name = prompt("Please type in your name:");

//Test to make sure this works
console.log(name);

//Alert to user and explain what we are doing
alert("Welcome "+name+"! Let's go ahead and figure out how old you are!");

//Ask the user what year they were born in
//Create a variable to catch the answer
var yearBorn = prompt("What year were you born?");
console.log(yearBorn);

//Current year - year born
var currentYear = 2014;

//Calculate the age
var age = currentYear - yearBorn-1;

//alert the user with their age
alert(name+" you are "+age+" years old.");
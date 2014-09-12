//Patrick Little
//Sept. 11, 2014
//Activity Expression worksheet
//Expressions_Personal

// stating an alert, how much money you earn in a given time
alert("We are going to figure out how much money you earn in a period of time before taxes.");

// Variable saying how much money you make an hour
var perHour = prompt("How much money do you make an hour?");

//print the amount of hours
console.log(perHour);

//How many hours do you work a week?
var hoursWeek = prompt("How many hours do you work a week?");

//print the hours
console.log(hoursWeek);

//How much money you make a week
var moneyPerWeek = perHour * hoursWeek;

//print the money you make a week
console.log(moneyPerWeek);

//first statement pertaining to the money he makes
var firstStatement = "You make $"+moneyPerWeek+ " every week.";

//printing the statement
alert(firstStatement);

//How many months do u want to calculate
var howManyMonths = prompt("How many months do you want to calculate?");

//how much money you make in the given months
var moneyPerMonths = moneyPerWeek * howManyMonths;

//store the amount of months in a variable
var months = howManyMonths;

//print the amount of months
console.log(months);

//giving the result
var result = prompt("You make $"+moneyPerMonths+ " in " +months+ " months!");

//print the result to console
console.log(moneyPerMonths);






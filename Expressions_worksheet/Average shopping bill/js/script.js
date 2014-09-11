//Patrick Little
//Sept. 10, 2014
//Expressions_worksheet
//Average shopping bill

//An array with five weekly grocery totals
var groceryWeeks = [80, 60, 90, 100, 70];

//Total amount spent on grocerys
var total = groceryWeeks[0] + groceryWeeks[1] + groceryWeeks[2] + groceryWeeks[3] + groceryWeeks[4];

//Average weekly grocery spending
var average = (groceryWeeks[0] + groceryWeeks[1] + groceryWeeks[2] + groceryWeeks[3] + groceryWeeks[4])/5;

//write the result
console.log("You have spent a total of $"+total+ " on groceries over 5 weeks. That is an average of $"+average+ " per week.");
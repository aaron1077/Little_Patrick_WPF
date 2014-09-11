//Patrick Little
//Sept. 10, 2014
//Expressions_worksheet
//Slice of pie part 1

//number of slices per pizza
var numberOfSlices = 8;

//number of people at the party
var numberOfPeople = 15;

//number of pizzas ordered
var numberOfPizzas = 22;

//number of slices per person
var slicesPerPerson = numberOfSlices * numberOfPizzas / numberOfPeople;

//write the result
console.log("Each person ate " +slicesPerPerson+ " slices of pizza at the party.");
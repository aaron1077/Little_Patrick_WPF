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
console.log(age);

//alert the user with their age
alert(name+" you are "+age+" years old.");

//Let's make this more complex!!
//How old the user will be in the future...

//Ask the user how many years in the future we should look
var yearsMore = prompt("How many years in the future would you like to know?");
console.log(yearsMore);

//calculate the future age
//age + yearsMore
//Casting
var futureAge = age + Number(yearsMore);
console.log(futureAge);

//Make the results pretty
console.log("You will be " +futureAge+" in "+yearsMore+" more years.");
alert("You will be " +futureAge+" in "+yearsMore+" more years.");



//Ask if they want a dog
var wantDog = prompt("Do you want a dog? YEs or No?");

if(wantDog === "yes"){
    //Prompt more questions
    var breed = prompt("what breed do you want?");
}else{
    console.log("That's sad, dogs are adorable!");
}




//Patrick Little
//Sept. 15 2014
//Activity: Conditionals Worksheet
//Group 3 movie ticket price

//variable age
var age = 12;
//variable time
var time = 2;
//price of ticket
var price = 12;
//discounted price
var discount = 7;
//if statement for if the age is older/equal to 65, under 10, or if your seeing a movie between 3pm and 5pm.
if(age >= 55 || age < 10 || time >= 3 && time <= 5){
    //then print
    console.log("The ticket price is $"+discount+".");
//else statement if the if statement is false then print the else statement
}else{
    //print
    console.log("The ticket price is $"+price+".");
}
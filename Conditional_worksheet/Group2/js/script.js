//Patrick Little
//Sept. 15 2014
//Activity: Conditionals Worksheet
//Group 2 Grade letter calculator

//variable correct username
var correctUsername = "aaron";

// variable correct password
var correctPassword = "cheese";

//variable your username
var username = "aaron";

//variable your password
var password = "cheese";

//if your password and username are correct
if(username == correctUsername && password == correctPassword){
    //if true then print
    console.log("Welcome, " +correctUsername+ "!");
//if username does not equal correctUsername
}else if(username != correctUsername){
    //then print
    console.log("User not found. Try again.");
//if password does not equal correctPassword
}else if(password != correctPassword){
    //then print
    console.log("Password does not match our records");
}



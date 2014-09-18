//Patrick Little
//Sept. 17 2014
//Assignment conditionals
//Conditionals_Industry

//variable firstCheck
var checkAnswer = "";
//first alert
alert("Were going to find out if you qualify for our Web Design and Development job, lets begin the interview.");
//first prompt
var firstPrompt = prompt("How many years have you been working on web development?");
//Print firstPrompt
console.log(firstPrompt);
//if statement saying if firstPrompt is less than 2 thank print to the console
if(firstPrompt > 2){
    //Create an alert for the concern of experience
    alert("Very cool");
    //else if statement in case they entered nothing
}else if(firstPrompt == checkAnswer){
    //Prompt for if they don't input anything
    var pleaseInput = prompt("Please input something?");
    //Print the number entered
    console.log(pleaseInput);
}

//variable second prompt
var secondPrompt = prompt("How many years of college experience do you have?");
//print second prompt
console.log(secondPrompt);
//if  statement saying if secondPrompt is greater than two then alert that's awesome
if(secondPrompt > 2){
    //alert that's awesome
    alert("That's awesome");
//else if statement that says if secondPrompt equals checkAnswer than prompt please input something
}else if(secondPrompt == checkAnswer){
    //prompt please input something
    var pleaseInput2 = prompt("please input something");
    //print please input
    console.log(pleaseInput2);
}


//if statement saying if firstPrompt plus secondPrompt is equal or greater than 4, if pleaseInput plus pleaseInput2 is equal or greater than 4, if firstPrompt plus pleaseInput2 is equal or greater than 4, or if secondPrompt plus pleaseInput is greater than or equal to 4 then alert the message
if(Number(firstPrompt) + Number(secondPrompt) >= 4 || Number(pleaseInput) + Number(pleaseInput2) >= 4 || Number(firstPrompt) + Number(pleaseInput2) >= 4 || Number(secondPrompt) + Number(pleaseInput) >= 4){
    //alert the message
    alert("Awesome interview, come in tomorrow and fill out some papers. You got the job!");
//else if statement 
}else if(Number(firstPrompt) + Number(secondPrompt) <= 3 || Number(pleaseInput) + Number(pleaseInput2) <= 3 || Number(firstPrompt) + Number(pleaseInput2) <= 3 || Number(pleaseInput) + Number(secondPrompt) <= 3){
    //alert the message
    alert("Sorry but you are not the candidate we are looking for. Better luck next time.");
}
//Conditional logic - Ternary Operators
var gpa = 48;
//if the gpa is over the min2.0 score the student can graduate
if(gpa > 2.0){
    console.log("you can graduate");
}else{
    console.log("gpa too low");
}

(gpa > 2.0) ? console.log("you can graduate") : console.log("gpa too low");

var age = 11;
var book;

//if the child is under 10, they get green eggs and ham, otherwise they get the time machine
if(age < 10){
    book = "Green eggs and ham";
}else{
    book ="the time machine";
}
console.log(book);

book = (age < 10) ? "green eggs and ham" : "The time machine";
console.log(book);
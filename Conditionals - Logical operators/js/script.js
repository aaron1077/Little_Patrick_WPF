//Conditional logic - logical operators

var budget = 300;
var iphonePrice = 199.99;
var paycheck = 200;

//if the price of the phone is less our budget and if our paycheck is over 300
if(iphonePrice < budget && paycheck > 300){
    console.log("we can buy the phone");
}else{
    console.log("no phone for you");
}
//Conditional logic - logical operators

var budget = 100;
var iphonePrice = 199.99;
var wonLottery = true;

//if the price of the phone is less our budget and if our paycheck is over 300
if(iphonePrice < budget || wonLottery){
    console.log("we can buy the phone");
}else{
    console.log("no phone for you");
}
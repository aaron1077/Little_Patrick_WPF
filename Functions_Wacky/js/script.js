//Patrick little
//Sept. 23 2014
//Assignment:Function
//Function Wacky

alert("Were going to see if you are eligible to join my club.");

clubJoin(prompt("What is you favorite number?"), prompt("How old are you?"));

function clubJoin(f, o){
    if(f < 30 && o >= 18 ){
        var congrats = alert("Congrats you have made it in my club!");
        return congrats;

    }else{
        var sorry = alert("sorry you are not qualified for my club.");
        return sorry;

    }
}


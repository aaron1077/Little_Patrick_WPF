//Patrick Little
//Sept. 23 2014
//Assignment: Functions
//Industry

//alert that we are going to find the area of a polygon
alert("We are going to find the area of a regular polygon");
//variable total
var total = polygonArea(prompt("What is the apothem in inches?"), prompt("What is the perimeter in inches?"));
//function polygonArea
function polygonArea(a, p){
    //variable area
    var area = 1/2 * a * p;
    //return area
    return area;
}

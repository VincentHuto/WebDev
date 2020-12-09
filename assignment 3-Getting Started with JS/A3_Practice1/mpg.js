var miles = prompt("Enter miles driven");
miles = parseFloat(miles); //convert an input string to a floating point number
        
var gallons = prompt("Enter gallons of gas used");
gallons = parseFloat(gallons); //convert an input string to a floating point number
        
var mpg = miles/gallons;
	if(mpg == Infinity){
		mpg=0;
		alert("0 Gallons used Error");
	}else{
		alert("Miles per gallon = " + mpg.toFixed(2));
	}

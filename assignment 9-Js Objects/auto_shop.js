// Define a car object using a constructor function
function Car(stockidIn, makeIn, modelIn, yearIn, typeIn, colorIn, priceIn, mileageIn) { //step 1: add parameter list and complete definition of properties
	this.stockid = stockidIn;
	this.make = makeIn;
	this.model = modelIn;
	this.year = yearIn;
	this.type = typeIn;
	this.color = colorIn;
	this.price = priceIn;
	this.mileage = mileageIn;

	this.display = function () {
		var this_str = "<td>" + this.stockid + "</td><td>" + this.make + "</td>";
		this_str += "<td>" + this.model + "</td><td>" + this.year + "</td><td>" + this.type + "</td>";
		this_str += "<td>" + this.color + "</td><td> $" + this.price + "</td>";
		this_str += "<td>" + this.mileage + "</td>";
		return this_str;
	}
}


// Declare an array of objects
var car_list = [];  // var car_list = new Array();
console.log(car_list);
var numOfCars = document.querySelectorAll(".car-item").length;
// step 2. Use a for loop to read car info from web page
// and then create the Car object instances by calling Car constructor function, 
// and then individual car object to the car_list array
for (var i = 0; i < numOfCars; i++) {
	let stockId = document.getElementById('id-' + i).textContent;
	let make = document.getElementById('make-' + i).textContent;
	let model = document.getElementById('model-' + i).textContent;
	let year = document.getElementById('year-' + i).textContent;
	let type = document.getElementById('type-' + i).textContent;
	let color = document.getElementById('color-' + i).textContent;
	let price = document.getElementById('price-' + i).textContent;
	let mileage = document.getElementById('mileage-' + i).textContent;

	var newCar = new Car(stockId, make, model, year, type, color, price, mileage);
	car_list.push(newCar); // addint new car object into car_list array

}



console.log(car_list);

//Step-3: 
//register event handler "searchList" to the search button so that when search button 
//is clicked, a search result table will be displayed.
var searchButton = document.getElementById('p2');
searchButton.addEventListener('click', searchList);




/*****************************/
/* searchListing()          */
/*****************************/
function searchList() {
	var resultTableBody = document.querySelector('#search-result tbody');
	console.log(resultTableBody);

	document.querySelector('#search-result').classList.add("hide"); //hiding the table first
	resultTableBody.innerHTML = ""; //clean up table body

	var resultMessage = document.querySelector('#message');
	resultMessage.textContent = ""; //clean up message

	var resultList = "";
	//step 4.1: 
	//variable cat is used to store option that user selects from the drop down menu on the web page
	var cat= document.getElementById('categorySelect').value;
	console.log(cat);
	//variable keyword is used to store search keyword that use enters in the search bar on the web page
	var keyword=document.getElementById('searchbar').value;
	console.log(keyword);

	if (keyword === "")
		resultMessage.textContent = "Please enter a search keyword before press search button";
	else {
		var count = 0; //count variable is used to count the number of cars in the car list that matches search keyword 
		for (var i = 0; i < car_list.length; i++) { //steps 4.2 and 4.3: complete this for loop
			if(cat != "price"){
				if(car_list[i][cat].toLowerCase() ==keyword.toLowerCase()){
						count++;//Find mathced car
						resultList += "<tr>" + car_list[i].display(); + "</tr>";

				}
			}else{
				var carPirce = parseFloat(car_list[i][cat]);// Price of cars
				var maxPrice = parseFloat(keyword);// Price of cars
				if(!isNaN(maxPrice) && carprice <= maxPrice){
					count++;
					resultList +="<tr>" + car_list[i].display() + "</tr>";;
				}
			}


		} //end for loop
		resultTableBody.innerHTML = resultList; //add table content into table body
		resultMessage.textContent = "Find " + count + " matched cars.";
		if (count != 0)
			document.querySelector('#search-result').classList.remove('hide');
	}
}


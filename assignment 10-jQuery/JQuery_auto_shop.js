//step-1: add jQuery ready method to hold entire js code in this script 
$(function () {

	// Define a car object using a constructor function
	function Car(id, car_make, car_model, car_year, car_type, car_color, car_price, car_mileage) {
		this.stockid = id;
		this.make = car_make;
		this.model = car_model;
		this.year = car_year;
		this.type = car_type;
		this.color = car_color;
		this.price = car_price;
		this.mileage = car_mileage;
		this.qty = 0;
		this.display = function () {
			var this_str = "<td>" + this.stockid + "</td><td>" + this.make + "</td>";
			this_str += "<td>" + this.model + "</td><td>" + this.year + "</td><td>" + this.type + "</td>";
			this_str += "<td>" + this.color + "</td><td>$" + this.price + "</td>";
			this_str += "<td>" + this.mileage + "</td>";

			return this_str;
		}
	}

	// Declare an array of objects
	var car_list = [];  // var car_list = new Array();

	// Create an instance of the Car object and add it to the car_list array
	car_list.push(new Car(1001, "Toyota", "Camry", 2011, "Sedan", "Gray", 17555, 55060));
	car_list.push(new Car(1002, "Volvo", "s40", 2013, "Sedan", "Black", 15575, 20350));
	car_list.push(new Car(1251, "Toyota", "Sienna", 2008, "Minivan", "Gray", 15775, 70000));
	car_list.push(new Car(1321, "Porsche", "Panamera", 2012, "SUV", "Red", 104250, 10567));
	car_list.push(new Car(1904, "Honda", "Accord", 2009, "Sedan", "White", 13370, 35000));
	car_list.push(new Car(1855, "Toyota", "Highlander", 2008, "SUV", "Silver", 18555, 55060));
	car_list.push(new Car(1543, "Ford", "Fusion", 2011, "Sedan", "Black", 13575, 90350));
	car_list.push(new Car(1345, "Toyota", "Sienna", 2011, "Minivan", "Gray", 25775, 70000));
	car_list.push(new Car(2133, "Dodge", "Caravan", 2012, "Minivan", "Red", 30250, 17567));
	car_list.push(new Car(2999, "Lexus", "LFA", 2012, "coupe", "Red", 381370, 3500));
	car_list.push(new Car(3001, "Ferrari", "Rubino", 2012, "coupe", "Red", 354370, 5500));
	car_list.push(new Car(4002, "Audi", "R8", 2012, "SUV", "Black", 181370, 4500));


	//Step-2 (a): call displayDropdown() function to set up the drop down selection list
	displayDropdown();

	//Step-2 (d): use jQuery event method .on() to add an event handler to the drop down list
	//so that when users change selection option based on car type, 
	//then only that type of cars will be displayed in the car list table in the web page.
	$('#car-category').on('change', function(){
		var cat = $(this).val(); //jQuery object $(this) refers to the dropdown menu <selection> element, and .val() method will return the category that user selected
	//console.log(cat);
		displayListing(cat); //see the definition of the function from line 183
	} );


	/*****************************/
	/* displayDropdown()         */
	/*****************************/
	function displayDropdown() {
		var currentCat = 'select';
		var output = "<option value=\'" + currentCat + "\'>Select a category to display</option>";
		var addedCats = [];


		for (var i = 0; i < car_list.length; i++) {
			currentCat = car_list[i].type;
			//check whether the car's type has been included in the drop down list, if not, then add that category to the list
			//Array.indexOf(currentItem) is used to check whether currentItem is in the array, if not, then -1 will be returned.
			if (addedCats.indexOf(currentCat) == -1) { //did not find currentCat in addedCats array
				addedCats.push(currentCat); //add currentCat to addedCats array, and then create
				//an <option> element for that category
				output += "<option value='" + currentCat + "'  class='cat-select'>" + currentCat + "</option>";
				//console.log("added " + currentCat);
			}
			//console.log(addedCats);
		} // end for loop
		//add one more category as an <option> element which is used to display all products	
		currentCat = "All";
		output += "<option value='" + currentCat + "'  class='cat-select'>" + currentCat + "</option>";
		// output is a string used to hold all new <option> elements	
		$('#car-category').html(output);

	}

	/*****************************/
	/* displayListing()          */
	/*****************************/
	function displayListing(cat) {
		//Step-2 (b): Add jQuery code in this function to remove class "hide" from car list table.  
		$('#car-list').removeClass('hide');
		var displayAll = false;
		if (cat == "All") {
			displayAll = true;
		}
		if (cat == "select") {
			$('#car-list tbody').html("");
		}
		var body = "";

		//add table body	
		//step-2 (c):add js code to complete the for loop and if statement  to display car list in the web page according to 
		//users’ selection on car type
		for (var i = 0; i < car_list.length; i++) {
			if (car_list[i].type == cat || displayAll === true) {

				body += "<tr class='car-item' id='l-" + i + "'>";
				body += car_list[i].display();
				body += "<td><button type='button' value='" +
					i + "' class='btn btn-primary add-item'>Add</button></td>";
				body += "</tr>";
			}
		}
		$('#car-list tbody').html(body);
	}

	//define an array (global variable) to store indices of the items added to the shopping cart*/
	var cart = [];


	//Step-3 (a): Apply jQuery event delegation technique to add event handler so that when users click Add buttons, 
	//the selected cars will be added to the shopping cart without any duplication, 
	//the selected cars’ information including stockid, make, model, price, quantity and type will be displayed 
	//in the shopping cart list on the web page, the number of items in the shopping cart as well as the Checkout 
	//invoice information including subtotal, tax, registration fee, and total amount will be updated.

	$('#car-list').on('click', '.add-item', function () {

		var index = $(this).val(); //to get value of the value attribute from clicked add button
		if (cart.indexOf(index) == -1) {
			cart.push(index);
		}
		addQty(index);
		updateShoppingCart();
	});




	/****************/
	/* addQty()     */
	/****************/
	function addQty(index) {
		car_list[index].qty++;
	}


	/*****************************/
	/* updateShoppingCart()      */
	/*****************************/
	function updateShoppingCart() {
		//step 3(b): Add jQuery code in this function to remove class "hide" from shopping cart table, 
		//and also from check out table. 
		 $('#mycart').removeClass('hide')
		 $('#checkout table').removeClass('hide');

		//console.log("Cart array is currently: " + cart);
		//display shopping cart	
		displayCartItems();

		// update total items
		updateItemTotal();

		//Update final checkout data
		calculateCheckoutCost();

	}

	/**************************/
	/* displayCartItems()     */
	/**************************/
	function displayCartItems() {
		/* use this method to display items in the shopping cart.
		This method should  redisplay the 'shopping cart'
		table when we add or delete items.*/
		// add each product to shopping cart
		var runError = true;
		var elm = '';
		for (var i = 0; i < cart.length; i++) {
			//create a table row and add stockId, make, cost, quantity, and type info of the selected cars to the cart table
			elm += "<tr><td class=\'col-xs-1\'>" + car_list[cart[i]].stockid + "</td>";
			elm += "<td class=\'col-xs-1\'>" + car_list[cart[i]].make + "</td>";
			elm += "<td class=\'col-xs-1\'>" + car_list[cart[i]].model + "</td>";
			elm += "<td class=\'col-xs-1\'>" + car_list[cart[i]].price + "</td>";
			elm += "<td class=\'col-xs-1\'><input  type=\'text\' id=\'" + cart[i] + "\' name=\'qty-" + i +
				"\' size=\'1\' value=\'" + car_list[cart[i]].qty + "\'></td>";
			elm += "<td class=\'col-xs-1\'>" + car_list[cart[i]].type + "</td>";
			elm += "<td class=\'col-xs-1\'><button type=\'button\' value=\'" + i + "\' class=\'delete-item\'>Delete</button></td></tr>";
			runError = false; // = cart is not empty
		}
		if (runError) { //if cart is empty
			elm += "Your cart is empty.";
		}

		//console.log(elm);	
		$('#mycart tbody').html(elm); // modify the table
	}


	/*****************************/
	/* updateItemTotal()         */
	/*****************************/
	function updateItemTotal() {
		// update the total items
		var total = cart.length;
		$('#items').text(total);
	}

	/*******************************/
	/* calculateCheckoutCost()     */
	/*******************************/
	function calculateCheckoutCost() {

		//Display total number of cars in the cart 
		var taxRate = 0.06;
		var feeRate = 0.05;
		var subtotal = 0;
		var tax = 0;
		var fee = 0;
		var total = 0;

		//Calculate subtotal 
		//step 6: add js code here to calculat subtotal, tax, fee, and total amount
		//display those information to web page by using jQuery selector, jQuery .text() method.
		
		for (var i=0; i<cart.length; i++){
			subtotal +=car_list[cart[i]].price * car_list[cart[i]].qty;
		}
		 tax = subtotal * taxRate;
		 fee = subtotal * feeRate;
		 total = subtotal + tax + fee;
	
		$('#sub-total').text('$' + subtotal.toFixed(2));
		$('#taxes').text('$' + tax.toFixed(2));
		$('#registration').text('$' + fee.toFixed(2));
		$('#total').text('$'+ total.toFixed(2));
	}

	//Step-4: Apply jQuery event delegation technique to add event handler so that when users click Delete buttons 
	//the selected cars will be removed from the shopping cart and removed from the shopping cart list in the web page as well. 
	//Meanwhile, the number of items in the shopping cart as well as the Checkout invoice information including subtotal, tax, 
	//registration fee, and total amount will be updated.
	$('#mycart').on('click', '.delete-item', function(){
		var index = $(this).val();
//console.log("Delete Item: " + index);
		deleteItemFromCart(index);
		updateShoppingCart();
		});
		




	/*****************************/
	/* deleteItemFromCart()      */
	/*****************************/
	function deleteItemFromCart(index) {
		/*  remove the element with a given index from the cart array and update shopping cart
		 use splice() method, Syntax: array_name.splice(start, how many elements)
		The splice() method removes elements starting from 'start' positions. The second arguments defines the number of elements to be removed.
		*/
		//update the ordering quantity of selected car and use splice method to 
		//remove that selected car from the shopping cart.
		car_list[cart[index]].qty = 0;
		cart.splice(index, 1);
	}

	//Step-5: Apply jQuery event delegation technique to add event handler so that when users change the ordering 
	//quantities of selected cars in the shopping list in the web page, 
	//the ordering quantities of selected cars the Checkout invoice information including subtotal, tax, registration fee,
	// and total amount will be updated. 
	$('#mycart').on('change', 'input',  function (){ 
		updateCartItemQty(this); //line 263
		updateShoppingCart();
	  });




	/*****************************/
	/* updateCartItemQty()       */
	/*****************************/
	function updateCartItemQty(input) {
		var value = 0;
		value = parseInt($("#" + input.id).val());

		var index = parseInt(input.id);
		car_list[index].qty = value;

	}

});




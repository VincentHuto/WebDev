// Create three variables to store the information needed.
var $price;
var weight; 
var total;

// Assign values to the price and quantity variables.

$price = 5.95;  
weight = 0.1; //illustration for using floating-point numbers

// Calculate the total by multiplying the price by quantity.
total = $price * weight; 

// Get the element with an id of cost.
var el = document.getElementById('cost');
el.textContent = '$' + total.toFixed(3); 


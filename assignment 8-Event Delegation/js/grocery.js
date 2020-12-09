
var elList, addLink, counter;      // Declare variables
var $ = function (id) { return document.getElementById(id); };
elList = $('list');               // Get <ul> list                   
addLink = $('add');				   // Get add item button
counter = $('counter');            // Get item counter

function updateCount() { counter = $('counter');            // Get item counter
		   // Define updateCount function
	var listItems;
	listItems = elList.getElementsByTagName('li').length;  // Get total of <li>s
	counter.innerHTML = listItems;                         // Update counter
}

// Declare function to add an item in the list
function addItem() {
	var newItemIndex = elList.getElementsByTagName('li').length;
	promptText = prompt("Please Enter a new Item", "add new item as " + (newItemIndex + 1) + "th item");
	var newContent = promptText;    // New text content                               // Declare function

	if (promptText == null) {
		alert('Did not enter a new Item Try again!');
	} else {
		var newEl = document.createElement('li');
		alert('Added Item: ' + newContent);
		newEl.textContent = newContent;         // Add text to <li>
		var delEle = document.createElement('a');
		delEle.setAttribute('href', '#');
		delEle.textContent = "Delete";
		delEle.className = "delete";
		newEl.appendChild(delEle);				// Add <li> to list
		elList.appendChild(newEl);				// Add <li> to list
		updateCount();
	}
}


// create a function that remove <li> element which's delete button is clicked
// function removeItem() {  //step 2.1: Add a parameter in the function header to reference the event object. 
// 	//step 2.2: Set up an if statement so that only when a delete button (i.e., <a> element) is clicked, 
// 	//the related list item will be removed. 
// 	//a.In the if statement, use the event object to find the delete button that user clicked, and 
// 	//then delete the <li> element which contains that delete button.  
// 	//b. After deleting that grocery item, the updateCount function is used to update the number of groceries in the list. 

// }
function removeItem(e) {
	// Declare function
	var elListItem,elListf
	if(e.target.nodeName.toLowerCase() == 'a'){
		elListItem = e.target.parentNode;
		elListf = elListItem.parentNode;
		elListf.removeChild(elListItem);
	}
	e.preventDefault();
}
deleteLink = document.getElementById('list');
addLink.addEventListener('click', addItem, false);       // Click on button
deleteLink.addEventListener('click', removeItem, false);       // Click on button

//step 3: Apply event delegation by using addEventListener() method of the <ul> element so that when any of 
//the delete buttons in the gerocery list is clicked,  removeItem function will be called as an event handler.  
//use event delegation to add event hander to <ul> element to delete each <li> element



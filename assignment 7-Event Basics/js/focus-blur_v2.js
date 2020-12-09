function checkUsername() {                        // Declare function
  let username = el.value;  
  if (username.length < 5) {                      // If username < 5 characters
    elMsg.className = 'warning';                  // Change class on message
    elMsg.textContent = 'Not long enough, yet...';// Update message
    return false; 
	
  } else {                                        // Otherwise
    elMsg.textContent = '';  	// Clear the message
  }
    return true;
}

function tipUsername() {                          // Declare function
  elMsg.className = 'tip';                        // Change class for message
  elMsg.innerHTML = 'Username must be at least 5 characters'; // Add message
}

function checkPassword(){   
  var password = elPassword.value;                        // Store username in variabl
  if (password.length <=0) {     
    return false;                             // If username < 5 characters
  } else {                                        // Otherwise
    return true;
  }
}

function checkBeforeSubmit(){ 
	if (checkPassword == false || checkUsername == false) {	  
    elSignup.preventDefault();
    window.alert('invalid inputs, try again! user name and password are required for sign up.');
    el.focus();
	}
}

var el = document.getElementById('username');     // Username input
var elMsg = document.getElementById('feedback');  // Element to hold message
var elPassword = document.getElementById('password');  // Element to hold password
var elSignup = document.getElementById('signup');  // Element to hold signup

//When the username input gains / loses focus call functions above:
el.addEventListener('focus', tipUsername); // focus call tipUsername(), default value: false for event flow will be applied
el.addEventListener('blur', checkUsername);// blur call checkUsername(, default value: false for event flow will be applied
elSignup.addEventListener('submit', checkBeforeSubmit);



// Create the array and assign it valuesvar colors = ['pink', 'yellow', 'green'];console.log(colors[2]);// Update the third item in the arraycolors[2] = 'beige';console.log(colors[2]);/*an array can contain any data type */colors[0]=44.56;colors[1]=true; /*add new items at the end of an array */colors[colors.length]='black';colors.push(34.5);/* length property tells the number of items in an array */var numColors = colors.length;console.log('the length of array: ' +numColors);// Get the HTML element with an id of colorsvar el = document.getElementById('colors');el.textContent = ' ';// Replace the content of that element on web page with items from the arrayfor (var i=0; i< numColors; i++)	el.textContent += colors[i] + ' ';
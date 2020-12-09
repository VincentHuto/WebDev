var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
    greeting = 'Nighty Night Partner!';
} else if (hourNow > 12) {
    greeting = 'Past Noon Partner!!';
} else if (hourNow > 0) {
    greeting = 'Mornin Partner!';
} else {
    greeting = 'Howdy!';
}

document.write('<h3>' + greeting + '</h3>');
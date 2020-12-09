// define a function so that in js code, $ can be used to replace document.getElementById
var $ = function (id) {
	return document.getElementById(id);
};

var numInputs = 1; //default setting, showing one test score input box

//define setupInputBox function to add more test score inputs boxes
var setupInputBox = function () {
	$("testInputs").innerHTML = "";
	$("scoreTotal").value = "";
	$("scoreAvg").value = "";
	$("scoreFinal").value = "";

	numInputs = $("numscores").value;
	numInputs = parseInt(numInputs); // convert inputs into integer numerical value
	//step-1.1: Add a condition in if() statement
	//if user input for number of test scores is valid and in the range 1 to 5
	if (numInputs > 0 && numInputs < 6) {
		for (var i = 0; i < numInputs; i++) {
			var label = document.createElement("label");
			var input = document.createElement("input");
			var br = document.createElement("br");

			var textNode = document.createTextNode("Test-" + (i + 1));
			label.appendChild(textNode);
			label.setAttribute("for", "score" + (i + 1));
			input.setAttribute("id", "score" + (i + 1));
			input.setAttribute("value", "150");
			input.setAttribute("type", "number");


			testInputs.append(label, input, br);


			//Step-1.2.1: create new <label>, <input>, and <br> elements (use createElement() method to create each element)
			//Step-1.2.2: create text content node for each new <label> element  ( use createTextNode() method )
			//Step-1.3.1: add for attribute to each new <label> element  ( use setAttribute() method)
			//Step-1.3.2: add id, type, and value attributes to new <input> elements ( use setAttribute() method)
			//Step-1.4: append each new <label>, <input>, and <br> elements to the <div> element with id=”testInputs”.
		}
	}
};
//whenever user changes selection on number of test scores to consider, setupInputBox function will be executed again
$("numscores").oninput = setupInputBox;

//define processEntries function to get user inputted test scores, do input validation, and caculate total and average points and
//determine the final letter grade.  Display all results on web page.
var processEntries = function () {
	$("scoreTotal").value = "";
	$("scoreAvg").value = "";
	$("scoreFinal").value = "";

	var score = []; //define an array to hold test scores

	var message = ""; //define a variable for containing and displaying error message
	var totalGrade = 0, avGrade, finalScore;

	var isValid = true;
	for (var i = 0; i < numInputs; i++) {
		$("score" + (i + 1)).className = "";
		var ins = document.getElementById("score" + (i + 1));
		var inputScore = parseFloat(ins.value);

		if (!Number.isNaN(inputScore) && inputScore >= 0 && inputScore <= 150) {
			score.push(inputScore);
		} else {
			isValid = false;
			message += "Test-" + (i + 1) + " score input is invalid. Numbers between 0 and 150. are valid \n"
			ins.setAttribute("class", "error");
		}
		//step 2.1: add js code to read in each user inputted test score(s) from input test score boxes on the web page.
		//step 2.2: add js code to validate each test score to make sure all inputted test scores are numerical values 
		//between 0 and 150 (i.e., no less than 0 and no greater than 150 points). 
		//if a test score is invalid, generate error message, and add that error messge to message string.
		console.log(score); //print out score array in console
		console.log(message); //print out message string in console
	}

	//step2.3: add js so that when all inputted test scores are valid, compute total points, average points (with zero decimal place), and
	//final letter grade, and display them in the input boxes in the <div> element with id=’result’ on the web page.
	//If not all inputted test scores are valid, then create an alert box to display an error message
	if (isValid) {
		//step2.3: add js so that when all inputted test scores are valid, compute total points, average points (with zero decimal place), and
		//final letter grade, and display them in the input boxes in the <div> element with id=’result’ on the web page.
		for (var j = 0; j < numInputs; j++) {
			totalGrade += score[j];
		}
		totalGrade = totalGrade.toFixed(1);
		avGrade = totalGrade / numInputs;
		avGrade = avGrade.toFixed(1);

		var scoreTotal = document.getElementById('scoreTotal');
		scoreTotal.value = totalGrade.toString();

		var scoreAvg = document.getElementById('scoreAvg');
		scoreAvg.value = avGrade.toString();

		avGrade = parseFloat(avGrade);

		//Converting scores to letter grades
		if (avGrade <= 150 && avGrade >= 120)
			finalScore = "A";
		else if (avGrade < 120 && avGrade >= 100)
			finalScore = "B";
		else if (avGrade < 100 && avGrade >= 80)
			finalScore = "C";
		else if (avGrade < 80 && avGrade >= 60)
			finalScore = "D";
		else if (avGrade < 60)
			finalScore = "F";

		var scoreFinal = document.getElementById("scoreFinal")
		scoreFinal.value = finalScore
	} else {
		//Send alert message
		alert(message);
	}
}; //end of processEntries function

//each time when calculate button is clicked, inputted test scores will be evaluated and
$("calculate").onclick = function () {
	if (numInputs > 0 && numInputs < 6) processEntries();
};
$("numscores").focus();

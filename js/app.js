$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	/*--- Generates secret number ---*/
  	function secretNumber() {
			var randomNum = Math.floor(Math.random() * 101);
			return randomNum;
	};

	var secretNum = secretNumber();

  	/*--- Resets game with secret number for user to guess---*/
	$(".new").click(function(event) {
		newGame();
	});

		//Resets feilds
		function newGame() {
			clicks = 0;
			$("ul#guessList li").remove();
			document.getElementById("feedback").innerHTML = "Make A Guess!";
			secretNum = secretNumber();
			clearFeild();	
		}

		//Sets input to nothing
		function clearFeild() {
			document.getElementById("userGuess").value = "";
		}

	/*--- Compares difference between secretNum and input value ---*/
	function compareNum(input, numDifference) {

		alert(input + " = input value. " + secretNum + " = secret number. " + +numDifference + " = difference.");

		if (numDifference == 0) {
			document.getElementById("feedback").innerHTML = "Correct!";
		} 
		else if (numDifference <= 5) {
			document.getElementById("feedback").innerHTML = "Very Hot!";
		} 
		else if (numDifference <= 10){
			document.getElementById("feedback").innerHTML = "Hot!";

		} 
		else if (numDifference >=10 && numDifference <= 20) {
			document.getElementById("feedback").innerHTML = "Warm!";               

		} 
		else if (numDifference >=20 && numDifference <= 30) {
			document.getElementById("feedback").innerHTML = "Cold!";

		} 
		else if (numDifference >=30 && numDifference <= 40) {
			document.getElementById("feedback").innerHTML = "Very Cold!";

		} 
		else {
			document.getElementById("feedback").innerHTML = "Ice Cold!";
		}
  	}

  	/*--- Processes guessed value and secret number when Guess button clicked---*/
  	var clicks = 0;

  	$("#guessButton").click(function makeGuess() {
  		var guessedNum = parseInt(document.getElementById("userGuess").value);
  		var guessedVal = document.getElementById("userGuess").value;
  		var numDifference = secretNum - guessedNum;
  		
  		compareNum(guessedNum, numDifference);
  		
  		if (isNaN(guessedVal)) {
    		alert("Enter a numeric value, please!");
    	}
    	else if (guessedNum <= 0) {
    		alert("Enter a number bigger than zero, please!");
    	}
    	else if (guessedNum > 100) {
    		alert("Enter a number between 1 and 100, please!");
    	}
    	else if (guessedNum !== 0) {
	  		clicks += 1;
	        document.getElementById("count").innerHTML = clicks;

	        //Append list of guesses to guessList
    		$("<li>" + guessedNum + "</li>").appendTo('#guessList');
    	}
    	else {
    		alert("Enter a numeric value, please!");
    	}

    	//Prevents reseting
  		return false;
  	});
});

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
  	var secretNum = (function() {
			var randomNum = Math.floor(Math.random() * 101);
			return randomNum;
	})(); // AN IMMEDIATELY INVOKED FUNCTION EXPRESSION (IIFE) TO GENERATE SECRET NUMBER ONCE

  	/*--- Resets game with secret number for user to guess---*/
	$(".new").click(function newGame() {
		alert(secretNum); // ALERTS A CONSISTANT SECRET NUMBER
		//return(secretNum); // CAN THIS EVER BE A GLOBAL VARIABLE DUE TO SCOPE?
	});

	/*--- A function that compares a value to secret number ---*/
	function compareNum(input) {

		alert(input + " is the input value. " + secretNum + " is the secret number.");
		if (input == secretNum) {
			//document.getElementById("feedback").innerHTML = "Correct!";
			alert("Correct");
		} 
		else if(input >= secretNum + 1 && input <= secretNum + 9) {
			//document.getElementById("feedback").innerHTML = "Very Hot!";
			alert("Very Hot");
		}
		else if(input >= secretNum + 10 && input <= secretNum + 19) {
			//document.getElementById("feedback").innerHTML = "Hot!";
			alert("Hot");
		}
		else if(input >= secretNum + 20 && input <= secretNum + 29) {
			//document.getElementById("feedback").innerHTML = "Warm!";
			alert("Wram");
		}
		else if(input >= secretNum + 30 && input <= secretNum + 40) {
			//document.getElementById("feedback").innerHTML = "Cold!";
			alert("Cold");
		}
		else if(input >= secretNum +  41) {
			//document.getElementById("feedback").innerHTML = "Ice Cold!";
			alert("Ice Cold");
		}
  	}
  		
  	var clicks = 0;

  	$("#guessButton").click(function makeGuess() {
  		var guessedNum = parseInt(document.getElementById("userGuess").value);  		
  		compareNum(guessedNum);
  		if (guessedNum !== 0) {
	  		clicks += 1;
	        document.getElementById("count").innerHTML = clicks;
    	}
    	else if (guessedNum == 0) {
    		alert("Enter number greater than zero, please!");
    	}
    	else if (isNaN(guessedNum)) {
    		alert("Enter a numeric value, please!");
    	}
  		return false;
  	});
});

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
	})(); // AN IMMEDIATELY INVOKED FUNCTION EXPRESSION (IIFE) TO GENERATRE SECRET NUMBER ONCE

  	/*--- Resets game with secret number for user to guess---*/
	$(".new").click(function newGame() {
		alert(secretNum); // ALERTS A CONSISTANT SECRET NUMBER
		//return(secretNum); // CAN THIS BE A GLOBAL VARIABLE DUE TO SCOPE?
	});

	/*--- A function that compares a value to secret number ---*/
	function compareNum(input) {

		alert(input + " is the input value. " + /* secretNum */ + " is the secret number.");
  	}

  	$("#guessButton").click(function makeGuess() {
  		var guessedNum = parseInt(document.getElementById("userGuess").value, 10);
  		compareNum(guessedNum);
  	});
});

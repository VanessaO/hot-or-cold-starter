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
	$(".new").click(function(event) {
		newGame();
	});

	function newGame() {
		clicks = 0;
		$("ul#guessList li").remove();
		document.getElementById("feedback").innerHTML = "Make A Guess!";
		//HOW DO I "REFRESH" THE secretNum FUNCTION ON LINE 15?
		//secretNum();
	}
	/*--- A function that compares difference between secretNum and input value ---*/
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

  	var clicks = 0;

  	$("#guessButton").click(function makeGuess() {
  		var guessedNum = parseInt(document.getElementById("userGuess").value); 
  		var numDifference = secretNum - guessedNum;
  		
  		compareNum(guessedNum, numDifference);
  		
  		if (guessedNum !== 0) {
	  		clicks += 1;
	        document.getElementById("count").innerHTML = clicks;
    	}
    	
    	$("<li>" + guessedNum + "</li>").appendTo('#guessList');

  		return false;
  	});
});

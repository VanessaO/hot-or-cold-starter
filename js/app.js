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
	})(); // TURNED INTO AN IIFE TO GENERATRE SECRET NUMBER ONCE

  	/*--- Resets game with secret number for user to guess---*/
	$(".new").click(function newGame() {
		alert(secretNum);
	});

	/*--- A function that compares a value to secret number ---*/
	function compareNum(input) {

		alert(input + " is the input value. " + secretNum + " is the secret number.");
		/*if (input == secretNum) {
			//document.getElementById("feedback").innerHTML = "Correct!";
			alert("Correct");
		} 
		else if(input <= secretNum + 1) {
			//document.getElementById("feedback").innerHTML = "Very Hot!";
			alert("Very Hot");
		}
		else if(input <= secretNum+ 10) {
			//document.getElementById("feedback").innerHTML = "Hot!";
			alert("Hot");
		}
		else if(input <= secretNum + 20) {
			//document.getElementById("feedback").innerHTML = "Warm!";
			alert("Wram");
		}
		else if(input <= secretNum + 30) {
			//document.getElementById("feedback").innerHTML = "Cold!";
			alert("Cold");
		}
		else if(input <= secretNum + 50) {
			//document.getElementById("feedback").innerHTML = "Ice Cold!";
			alert("Ice Cold");
		}
		else {
			alert("Please enter a numeric value.");
  		}*/
  	}

  	$("#guessButton").click(function makeGuess() {
  		var guessedNum = parseInt(document.getElementById("userGuess").value, 10);
  		compareNum(guessedNum);
  	});
});

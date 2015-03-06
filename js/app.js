$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

<<<<<<< HEAD
  	/*--- Generates secret number ---*/
  	function secretNum() {
=======
  	/*--- Resets game with secret number for user to guess---*/
	$(".new").click(function newGame() {
		/*--- Generates secret number ---*/
		function secretNum() {
>>>>>>> origin/master
			var randomNum = Math.floor(Math.random() * 101);
			return randomNum;
		}

  	/*--- Resets game with secret number for user to guess---*/
	$(".new").click(function newGame() {
		var secretNum = secretNum();
	});

	/*--- A function that compares a value to secret number ---*/
	function compareNum(input) {

		alert(input + " is the input value." + secretNum + " is the secret number.");
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

/* 


Everytime I click .new, I want it to generate a secret number using my SecretNum function. 
Then I want to take the return value and turn it into a variable so I can use it later.

1. Create a function that starts the whole game ((Put all the code in a functiom called guessingGame))
2. Create function hotCold with the argument num that puts Warmer or Colder in #feedback
	2a. If num <=num + 50 , then append "Ice Cold"
	2b. Else if num <= num + 30, then append "Cold"
	2c. Else if num <= num + 20, then append "Warm"
	2d. Else if num <= num + 10, then append "Hot"
	2e. Else if num <= num + 1, then append "Very Hot"
3. Create a function where x (which will eventually be the input number) is compared to a random number.
	2a. If they are equal, put "Correct!" in #feedback.
	2b. Else if, run function hotCold  
4. Establish a variable for the input number in #userGuess called guessedNUm
5. ** Push an array of guessed values to the "guessed" box
*/

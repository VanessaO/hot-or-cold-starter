$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});


  	$("#guessButton").click(function compareNum() {
  		var guessedNum = parseInt(document.getElementById("userGuess").value);
  		var secretNum = function() {
  			var  randomNum = Math.floor(Math.random() * 101);
  			return randomNum;
  		}
  			if (guessedNum != 0) {
  				//document.getElementById('feedback').innerHTML = "Correct!";
  				alert("You entered: " + guessedNum);
  				//$( "#feedback" ).text( "Correct!" );
  			} else {
  				//testMultiply(guessedNum);
  				alert("Put in bigger value please");
  				alert(secretNum);
  				//return hotCold(x);
  			} //else if (isNaN(guessedNum)) {
  				//alert(guessedNum + " is not a number value");
  	});
});

/* 
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

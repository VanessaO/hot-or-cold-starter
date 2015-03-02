
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	/*--- Generate Secret Number ---*/
  	var guessingGame = function() {
  		var hotCold = function(num) {
  			if(num <= num + 50)
  				
  		}







  	}





  	var secretNum = function(x) {
  		if (x === random(1, 100);) {
  		}
  		
  	
});

/* 

1. Create a function that starts the whole game ((Put all the code in a functiom called guessingGame))
2. Create function hotCold with the argument num that puts Warmer or Colder in h1#feedback
	2a. If num <=num + 50 , then append "Ice Cold"
	2b. Else if num <= num + 30, then append "Cold"
	2c. Else if num <= num + 20, then append "Warm"
	2d. Else if num <= num + 10, then append "Hot"
	2e. Else if num <= num + 1, then append "Very Hot"
3. Create a function where x (the input number) is compared to a random number.
	2a. If they are equal, put "Correct!" in #feedback.
	2b. Else if, run function hotCold  

*/

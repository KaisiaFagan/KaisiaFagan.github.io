		/*Task 1*/
		function CalculateAge(dob) {
			var minAge = 6;
		}
		CalculateAge(dob);
		/*Task 3*/
		function Disable1(){
			document.getElementById("uname").disabled = true;
			document.getElementById("dob").disabled = true;
			document.getElementById("age").disabled = true;
			document.getElementById("email").disabled = true;
			document.getElementById("gender").disabled = true;
			document.getElementById("reg").disabled = true;
			document.getElementById("quit").disabled = false;
			document.getElementById("play").disabled = false;
		}
		Disable1();
		/*Task 4*/
		var p1bounty = 100 , compbounty = 100;
		// Function Definition
	   function Play Game(kernels)
	   {
	    var guess, kernels;
		//Generates a random number between 1 and 100  
	   kernels = Math.floor(Math.random() * 100) + 1;
	   document.write("SHIP SAIL, SHIP SAIL, ‘OW MUCH MAN DEH PON BOARD!'");
	   guess = window.prompt("How much kernels does the computer have?");
	   
	   if (guess > kernels)
	   {
         document.write("Your number is too high guess again.");	   
	   }
	   else 
	   {
	    if (guess < kernels)
		{
          document.write("Your number is too low guess again.");			
		}
	   }
	   else 
	   {
	    if (guess == kernels)
		{
          document.write("Your Won!!");			
		}
	   }
	   else
	   {
          document.write("GAME OVER!");		   
	   }
	   Play Game(kernels);
	   /*Task 5*/
		function Enable1(){
			document.getElementById("guess").disabled = false;
			document.getElementById("quit").disabled = false;
		}
		Enable1();
	   /*Task 6*/
	   function CheckGuess()
	   {
	       if (guess == kernels)
			{
			   p1bounty += guess;
               compbounty -= guess; 			   
			}	
            else (guess != kernels)
	   }
		/*Task 11*/
		function ClearFields(){
			document.getElementById("regform").reset();
			document.getElementById("reg").disabled = false;
			document.getElementById("quit").disabled = true;
			document.getElementById("play").disabled = true;
			document.getElementById("sub").disabled = true;
			document.getElementById("guess").disabled = true;
			document.getElementById("pa").disabled = true;
		}
		ClearFields();
		/*Task 13*/
		function ShowAll(show)
          {//start the function
            document.getElementById("show").value = show;           
          }//end the functiondsa
           
          function showAll()
          {//start the function
            var Age, Number_of_games_played, NumberWins, NumberLosses, score;
            char userName;
          
            if(document.getElementById("show").value === ')
            { 
                ans = num1 + num2;
               
            }
            else (document.getElementById("show").value === '')
            { 
                ans = num1 - num2;
                
            }          

            }
            function displayDigits(num1, num2)
            {
                document.getElementById("value1").value= show;
                document.getElementById("value2").value= show;
                
            }
            function displayResult(ans)
            {
                document.getElementById("show").value=ans;
            }
            {

		/*Task 15*/
		function showfreq(obj){
			return obj.reduce((acc, curVal) =>{
				if (curVal.gender == 'Male'){
					acc.male++;
				}
				else{
					acc.female++;
				}
				return acc;
		
		}, {male: 0, female: 0});
		showFreq();
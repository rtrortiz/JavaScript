document.onreadystatechange = function (){

	if(document.readyState == 'complete'){

		if(window.addEventListener){

			// Cache the DOM
			var btn = document.getElementsByClassName('btn');
			var i = 0;
			var btnLength = btn.length;

			for(i; i < btnLength; i+=1){

				btn[i].addEventListener('click', function(e){

					//alert('This button was clicked!');
					//var aNumber = prompt("enter a nunber");
					//console.log(aNumber);
					utils.handleClick(e);

				}, false)

			}

		} 

			else if (document.attachEvent){ // IE


			   btn.attachEvent('on', function(){

				//alert('This button was clicked!');
				utils.handleClick(e);
					
			   }, false)


			}

			  else { // older browsers

				btn['on' + 'click'] = function(){

			        utils.handleClick(e);
				//alert('This button was clicked!');


				}

			  }

	};


// === module ===

		var utils = {


			handleClick: function(e){

				this.createGrid(e);


			},

			createGrid: function(e){

                                // == clears the grid
				$("#gridContainer").html("");
				// == Cache the DOM
				var gridContainer = $("#gridContainer");
				//alert('This button was clicked!');
				// == prompt the user to provide a number between 1 and 128
				var userInput = prompt("Type a number between 1 and 128");
				//console.log(aNumber);
				//console.log(e);
				
				// == Checks to see if the user input falls within the specified parameters
				if(userInput >= 1 && userInput <= 128){

					// == Calculates square size based on the number that the user inputs into the prompt
					var square_size = gridContainer.width()/userInput - 2;
					//console.log(square_size);

					for(var i = 1; i <= userInput; i++){

						for(var j =1; j <= userInput; j++){
						// == for loop dynamically creates the grid's squares by appending 
                                                // == divs with class name 'grid_square'
						gridContainer.append('<div class ="grid_square"></div>');


						}//== end of second for loop
						
						// == dynamically adds new rows to the grid as needed
						gridContainer.append('<div class ="new_row"></div>');

					}//== end of first for loop

					// == adds the square's width and height values based on the value 
					// == stored within the variable square_size
					$('.grid_square').css('width', square_size);
					$('.grid_square').css('height', square_size);


					// == chnages the background color of each sqaure as the user moves the 
					// == mouse enters and leaves each square
					$('.grid_square').mouseenter(function(){

						//alert('Hello World'); == Works

						$(this).css('background-color', 'red');

					});//== end of unamed function

				} 


				/*else {

					alert("No. You are crazy.");

				}*/

			}//== end of if comditional statement



		}//== end of createGrid


}//== end of utils

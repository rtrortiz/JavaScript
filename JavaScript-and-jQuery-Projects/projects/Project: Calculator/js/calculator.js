var num1 = [],// stores the user's first numerical input
    num2 = [],// stores the user's second numerical input
    operand = null,// stores mathematical operand that the user chooses
    solved = false,// keeps track wheather a calculation has been solved
    $screen = $("#screen");// Cache the DOM

// ======================================================================================

// Attaches onClick listener that invokes a function on buttons with class 'numpad'

$(".numpad").click(function(){

	// Gets the user's input and saves it in the variable 'input'
	var input = $(this).html();
	//alert(input);// Works!!
	
	//Stores the user first number input, chose math operator and second number
	if(solved) {

	    clear();// if the calculation is solved(solved var is set to true) then the clear() function is invoked

	}

	if(!operand){
		
	    num1.push(input);//adds the first num that the user inputs to the num1 array
	    $screen.html(num1.join(''));//adds the user first input and displays into the screen

	} else {

	    num2.push(input);//adds the second num that the user inputs to the num2 array
	    $screen.html(num1.join('') + operand + num2.join(''));// displays all of the user input in screen	

	}

	$(this).fadeOut().fadeIn(100);


});


$(".operator").click(function(){

	var input = $(this).html();

	if(solved) {
		
		// settings below are set their intial states
		num2 = [];
		operand = null;
		solved = false;

	}
	
	setOperand(input);// user operand is sent to the setOperand function
	$().fadeOut(100).fadeIn(100);

});

// attaches the clear() function to the clear function
$('#clear').click(function(){

	clear();//clear() function is invoked here
	$(this).fadeOut(100).fadeIn(100);


});

//============================================================================================================================================

$("#equals").click(function(){

	if(num1 && num2 && operand){

		var n1 = +num1.join(''),
		    n2 = +num2.join(''),
                    result = null;

		switch (operand){// each case below performs the user's calculation

			case '+':
			   result = n1 + n2;
			   break;
			case '-':
			   result = n1 - n2;
			   break;
			case '*':
			   result = n1 * n2;
			   break;
			case '/':
			   result = n1 / n2;
			   break;
	
		}

		$screen.html(formatNum(result));// result is sent to the formatNum() function and returned and displayed to the user
		num1 = [result];//user can keep hitting 'enter' to continue calculations
		num2 = [n2];
		solved = true;// sets 'solved' variable to true

	}

	$(this).fadeOut(100).fadeIn(100);

});


//============================================================================================================================================

// Functions
function setOperand(symbol){

	if(!operand){
	    operand = symbol.replace("x", "*").replace("%", "/");// replaces 'x' with '*' and '%' is replaced with '/' in order to use JS to calculate
	    $screen.html(num1.join('') + operand);// displays the user chosen operand and concat with the num1


	}

}

function clear(){

	num1 = [];
	num2 = [];
	operand = null;
	solved = false;
	$screen.html(0);

}


function formatNum(num){

	return (num % 1 === 0) ? num : num.toFixed(4);

}

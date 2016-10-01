$(document).ready(function(){

	//initialization
	var pictures = $("#slider").children("li");
	var navItems = $("#navigation").children("li");
	var currentNav, currentPic;


	//initialize nav
	$("#navigation").find("li").first().addClass("active");


	function goTo(i){

		$(navItems).removeClass('active');
		$("#navigation li").eq(i).addClass('active');

		pictures.fadeOut(400)
				.eq(i).fadeIn(400);

	}

	//Click on navigation circle button; make it active
	$("#navigation li").on("click", function(){

		var index = $(this).index();
		goTo(index);

	});


	$("#next").on("click", function(){

		//get current Nav index
		currentNav = parseInt($(".active").index());
		
			if(currentNav < 3){
				
				goTo(currentNav+1);

			}//end of if statement
			 else{
				goTo(0);

			}
	
	});//end of next

	$("#prev").on("click", function(){

		//get current Nav index
		currentNav = parseInt($(".active").index());
			if(currentNav > 0){

				goTo(currentNav-1);


			}//end of if statement
			 else{
			
				goTo(3);


			}//end of else statement


	});//end of prev

	goTo(0);

	//loop to cycle through
	setInterval(function(){

		$("#next").trigger("click");


	}, 2500);


});//end

	




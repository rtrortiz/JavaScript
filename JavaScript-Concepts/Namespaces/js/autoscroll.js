/*Notes:////////////////////////////////////////////////////////////

functions only work with 'div id's' and not classes. Fixed the
problems








*////////////////////////////////////////////////////////////////////




var scrollY = 0;
var distance = 40;
var speed = 24;

function autoScrollTo(el) {
	var currentY = window.pageYOffset;//provides current position of the website on the y axis, that has already been scrolled
	var targetY = document.getElementById(el).offsetTop;//number of pixels from the top of the parent//location of the specified div//html//

	var bodyHeight = document.body.offsetHeight;//height of an element including vert, padding and borders//total height of the websites
	var yPos = currentY + window.innerHeight;//height in pixels of the browser window including the vert and horiz scroll bars
	///calculate the user's current location within their browser window// take into account the size of the user's browser window + amount in pixels that the users have currently
	//scrolled to == the user;s current location within a webite

	/*

	var bodyHeight is the total height of the website, Ex: 300px
	yPos current location of the user within the current browser, Ex: 120px

	user has scrolled 120px out of 300px


	*/

	var animator = setTimeout('autoScrollTo(\''+el+'\')',24);//animation

	if(yPos > bodyHeight){
		clearTimeout(animator);//stops the animation
	} else {
		if(currentY < targetY-distance){
		    scrollY = currentY+distance;// currentY + 40; ++ increment
		    window.scroll(0, scrollY);//the actual scroller that moves the webpage down or up
	    } else {
		    clearTimeout(animator);//stops the animation
	    }
	}
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function resetScroller(el){
	var currentY = window.pageYOffset;//provides current position of the website on the y axis
    var targetY = document.getElementById(el).offsetTop;//number of pixels from the top of the parent//html//
	var animator = setTimeout('resetScroller(\''+el+'\')',speed);
	if(currentY > targetY){
		scrollY = currentY-distance;//-- decrement -40
		window.scroll(0, scrollY);//the actual scroller
	} else {
		clearTimeout(animator);//stops the animation
	}
}
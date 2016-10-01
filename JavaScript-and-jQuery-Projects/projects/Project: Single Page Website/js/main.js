document.onreadystatechange = function (){

	if(document.readyState == 'complete'){

		if(window.addEventListener){

			//Cache the DOM
			var navLinks = document.getElementsByTagName('li');
			var i = 0;
			var navLinksLength = navLinks.length;


			for(i; i < navLinksLength; i+=1){

				navLinks[i].addEventListener('click', function(e){

					//alert("Hello World");
	                                utils.handleClick(e);

			}, false)


			}// end of for loop

		    }// end if statement

			else if (document.attachEvent){// IE

                                  for ( i; i < navLinksLength; i+=1) {

        	                           navLinks.attachEvent('on', function(){

        		                              utils.handleClick(e);

        	                   }, false)

                               }// end of for loop



			}// end of else if statement


                       else {//older browsers

                              for ( i; i < navLinksLength; i+=1) {
        	                    navLinks['on' + 'click'] = function () {
        		
        		            utils.handleClick(e);

        	                        }

                                   }

                            }

		     }//end of window.addEventListener

	};

// module =================================================================================================================================

var utils = {


	handleClick: function(e){

		this.newPage(e);
	
	},

	newPage: function(e){


		//alert("hello");

		var panelLinks = document.getElementById("panelLinks");
		var panelLi = panelLinks.getElementsByTagName("li");
		//var i = 0;
		
		for(var i = 0; i < panelLi.length; i+=1){

			panelLi[i].removeAttribute("class");//Works

		}//end of for loop

		var divContainers = document.getElementsByTagName("div");
		for(var i = 0; i < divContainers.length; i+=1){

			divContainers[i].setAttribute("class", "panel");//works


		}//end of for loop


		var src = e.target || e.srcElement;
		console.log(src);
                src.setAttribute("class", "active");//works
                /*var newTab = src.getAttribute('rel');
                console.log(newTab);
		var tabDiv = document.getElementById(newTab);
                tabDiv.setAttribute("class", "panel active");*////works

		var newPage = src.getAttribute('rel');
                console.log(newPage);
		var page = document.getElementById(newPage);
                page.setAttribute("class", "panel active");///works


	}


}

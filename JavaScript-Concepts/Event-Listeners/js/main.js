
   
	/*var ev = e || window.event;
     	var src = ev.target || e.srcElement;
     	console.log(ev);*/

document.onreadystatechange = function () {

     if (document.readyState == "complete") {

     	/*var ev = e || window.event;
     	var src = ev.target || e.srcElement;
     	console.log(ev);*/

     	if(window.addEventListener){
            //Cache the DOM
            var btn = document.getElementsByClassName('panel-button');
            var i = 0;
            var btnLength = btn.length;

            for ( i; i < btnLength; i+=1) {
	        //var btn = document.getElementById("btn1");
	        btn[i].addEventListener("click", function(e){

	        //alert("Hello World");
	        utils.handleClick(e);

	      }, false);

        }


        }

        else if (document.attachEvent){// IE
        	btn.attachEvent('on', function(){

        		utils.handleClick(e);

        	}, false)

        }

        else {//older browsers
        	btn['on' + 'click'] = function () {
        		
        		utils.handleClick(e);
        	}
        }

      };

//== module ========================================================================

	var utils = {
     		handleClick: function (e){
     			this.message(e);
     		},

     		message: function(e){
     			alert("hello world");
                //console.log(e);
     		}
     	};


 }

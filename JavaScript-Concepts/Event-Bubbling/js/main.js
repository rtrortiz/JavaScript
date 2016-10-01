
document.onreadystatechange = function () {

     if (document.readyState == "complete") {

     	/*var ev = e || window.event;
     	var src = ev.target || e.srcElement;
     	console.log(ev);*/

     	if(window.addEventListener){
            //Cache the DOM
            var panel = document.getElementsByClassName('panel');
            var i = 0;
            var panelLength = panel.length;

            for ( i; i < panelLength; i+=1) {
	   
	        panel[i].addEventListener("click", function(e){

	        utils.handleClick(e);

	      }, false);

        }

        }

        else if (document.attachEvent){// IE
        	panel.attachEvent('on', function(){

        		utils.handleClick(e);

        	}, false)

        }

        else {//older browsers
        	panel['on' + 'click'] = function () {
        		
        		utils.handleClick(e);
        	}
        }

      };


	var utils = {
     		handleClick: function (e){
     			this.message(e);
                e.stopPropagation();//Stops event bubbling
     		},

     		message: function(e){
     			alert("hello world");
                //console.log(e);
     		}
     	};


 }

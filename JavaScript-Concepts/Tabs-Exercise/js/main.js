
   
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
            var tabs = document.getElementsByTagName('li');
            var i = 0;
            var tabsLength = tabs.length;

            for ( i; i < tabsLength; i+=1) {
	        //var btn = document.getElementById("btn1");
	        tabs[i].addEventListener("click", function(e){

	        //alert("Hello World");
	        utils.handleClick(e);

	      }, false);

        }


        }

        else if (document.attachEvent){// IE

            for ( i; i < tabsLength; i+=1) {

        	tabs.attachEvent('on', function(){

        		utils.handleClick(e);

        	}, false)

        }

        }

        else {//older browsers

            for ( i; i < tabsLength; i+=1) {
        	tabs['on' + 'click'] = function () {
        		
        		utils.handleClick(e);
        	}

        }

        }

      };


	var utils = {
        
     		handleClick: function (e){

     			this.message(e);
     		},

     		message: function(e){
    
                 //1: search for 'active' in two places and remove it
                 var tabs = document.getElementById("tabs");
                 var tabsLi = tabs.getElementsByTagName("li");
                 //console.log(tabsLi);
                 /*var tabList = tabsLi.getElementsByClassName('panel active');
                 console.log(tabList);*///doesn't work////
                 for(var i = 0; i < tabsLi.length; i+=1){
                 //console.log(tabsLi[i]);//Works//retrieves all li's
                 tabsLi[i].removeAttribute("class");//works///Done//
                 }
                  var divContainer = document.getElementsByTagName("div");
                 for(var i = 0; i < divContainer.length; i+=1){
                 //console.log(tabsLi[i]);//Works//retrieves all li's
                 divContainer[i].setAttribute("class", "panel");//works///Done//
                 }
                 //2: using event add 'active' to two places
                  //e.setAttribute("class", "active");
                  var src = e.target || e.srcElement;
                  src.setAttribute("class", "active");//works
                  var newTab = src.getAttribute('rel');
                  var tabDiv = document.getElementById(newTab);
                  tabDiv.setAttribute("class", "panel active");///works
                  //console.log(newTab);


     		}
     	};


 };




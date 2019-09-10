/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-03-15 15:26:15
 * @version $Id$
 */

$(function(){
	 var infoHeight = document.getElementById("globalWrap").scrollHeight; 
	 var bottomHeight = document.getElementById("footer").scrollHeight; 
	 var allHeight = document.documentElement.clientHeight; 
	 var bottom = document.getElementById("footer"); 

	 if((infoHeight + bottomHeight) < allHeight){ 
	  bottom.style.position = "absolute"; 
	  bottom.style.bottom = "0"; 
	 }else{ 
	  bottom.style.position = "";
	  bottom.style.bottom = "";
	 }  

})
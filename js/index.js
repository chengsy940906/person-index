$(function(){
	$(document).ready(function() {
		$('body').backstretch([
	 		 "images/daima.jpg", 
	 		 "images/daimax.jpg"
	 			], 	{duration: 3200, fade: 1300});
		});



	//about
	/*$(".about")*/

	$(".top-menu ul li a").click(function(){
		$(this).css("color","#FFF200");
	})
})
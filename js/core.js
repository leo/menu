$(document).ready(function(){
	
	$('.nav-toggler').click(function(){
		$('nav').slideToggle(220);
	});
	
	$('.search input').bind("focus focusout", function() {
		
		$('nav').toggleAttr('class', 'hidden');

	});
	
});



(function ($) {
	
	$.fn.toggleAttr = function(attr, attr_con) {
		var el = $(this);
		
		if(el.attr(attr)) {
			el.removeAttr(attr);
		} else {
			el.attr(attr, attr_con);
		}
	}
	
}(jQuery));
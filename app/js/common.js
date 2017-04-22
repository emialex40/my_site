$(function() {

$(window).scroll(function() {
	if($(window).scrollTop() >= 120) {
		$('.top_menu').animate({
			opacity: 'hide'
		}, 100);
		$('.top_menu_next').animate({
			height: 'show'
		}, 1000)
	}else{
		$('.top_menu').animate({
			opacity: 'show'
		}, 1500);
		$('.top_menu_next').animate({
			opacity: 'hide'
		}, 300)
	}
});

});

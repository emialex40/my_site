$(function() {


	$('img').hover(function(){
		$('.img_hover').css('display', 'block');

	},
	function() {
		$('.img_hover').css('display', 'none')
	});

	$("a#inline").fancybox({
		'hideOnContentClick': true
			});

	$('.slick').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		arrows: true,
		nextArrow: '<span class="prev"></span>',
		prevArrow: '<span class="next"></span>',
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: false,
					dots: false
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
		]
	});


	$('.first-tip a').mouseover(function() {
		$('.tip1').animate({top: '38px'}, 1000);
		$(this).stop();
	});
	$('.first-tip a').mouseout(function() {
		$('.tip1').animate({top: '-50px'}, 1000);
		$(this).stop();
	});

	$('.second-tip a').mouseover(function() {
		$('.tip2').animate({top: '38px'}, 1000);
		$(this).stop();
	});
	$('.second-tip a').mouseout(function() {
		$('.tip2').animate({top: '-50px'}, 1000);
		$(this).stop();
	});


	// Кешируем объект окна
	$window = $(window);

	$('.header[data-type="background"]').each(function(){
		var $bgobj = $(this); // Назначаем объект

		$(window).scroll(function() {

			// Прокручиваем фон со скоростью var.
			// Значение yPos отрицательное, так как прокручивание осуществляется вверх!
			var yPos = -($window.scrollTop() / $bgobj.data('speed'));

			// Размещаем все вместе в конечной точке
			var coords = '50% '+ yPos + 'px';

			// Смещаем фон
			$bgobj.css({ backgroundPosition: coords });

		});

	});



});

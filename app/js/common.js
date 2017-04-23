$(function() {

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

	$('.header[data-type="background"], .square[data-type="background"]').each(function(){
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

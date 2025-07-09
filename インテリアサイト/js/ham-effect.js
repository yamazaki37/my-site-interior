
$(function () {
	$('.trigger').click(function () {
		$(this).toggleClass('active');
		$('.triggerBg').fadeToggle();
		$('nav').toggleClass('open');
	})
	$('.triggerBg').click(function () {
		$(this).fadeOut();
		$('.trigger').removeClass('active');
		$('nav').removeClass('open');
	});
})

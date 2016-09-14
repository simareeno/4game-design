$(document).ready(function () {
	$('.tabs__item').click(function () {
		$(this).closest(".tabs").children().removeClass('tabs__item--active');
		$(this).addClass('tabs__item--active');
	});
});

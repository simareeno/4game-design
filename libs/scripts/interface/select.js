$(document).ready(function () {
	$('.select__input').click(function () {
		var list = $(this).closest('.select').find('.select__list')
		list.toggleClass('select__list--active');
		$(this).toggleClass('select__input--active');
	});

	$('.select__list-item').click(function () {
		$(this).closest(".select__list").children().removeClass('select__list-item--active');
		$(this).addClass('select__list-item--active');
		var text = $(this).text();
		$(this).closest('.select').find('.select__input-text').html(text);
		$(this).closest(".select__list").removeClass('select__list--active');
		$(this).closest('.select').find('.select__input').removeClass('select__input--active');
	})
});

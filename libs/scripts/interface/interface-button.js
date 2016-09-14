var colorClasses = [
	'button--color-white',
	'button--color-yellow'
];

var sizeClasses = [
	'button--size-s',
	'button--size-m',
	'button--size-l'
];

var bgClasses = [
	'body--background-light',
	'body--background-dark'
];

var body = $('body');
var button = $('.button');

function goSize(size) {
	for (var i = 0; i < sizeClasses.length; i++) {
		button.removeClass(sizeClasses[i]);
	}
	button.addClass('button--size-' + size);
}

function goColor(color) {
	for (var i = 0; i < sizeClasses.length; i++) {
		button.removeClass(colorClasses[i]);
	}
	button.addClass('button--color-' + color);
}

function goBackground(color) {
	for (var i = 0; i < sizeClasses.length; i++) {
		body.removeClass(bgClasses[i]);
	}
	body.addClass('body--background-' + color);
	if (color === 'light') {
			$(".setting--size .tabs").removeClass('tabs--color-black').addClass('tabs--color-white')
	} else {
		$(".setting--size .tabs").removeClass('tabs--color-white').addClass('tabs--color-black')
	}
}

$(function () {
	$('.setting__size-s').click(function () { goSize('s') });
	$('.setting__size-m').click(function () { goSize('m') });
	$('.setting__size-l').click(function () { goSize('l') });

	$('.setting__color-yellow').click(function () { goColor('yellow') });
	$('.setting__color-white').click(function () { goColor('white') });

	$('.setting__background-light').click(function () { goBackground('light') });
	$('.setting__background-dark').click(function () { goBackground('dark') });
})

$(window).on('load', function () {
	$('#j-hamburger').click(function () {
		$('.m-nav-mobile__panel').toggleClass('m-nav-mobile__panel--hide');
	});

	$('#j-nav-cross').click(function () {
		$('.m-nav-mobile__panel').toggleClass('m-nav-mobile__panel--hide');
	});

	$('#j-contact-submit').click(function (e) {
		e.preventDefault();
		alert('this is demo form');
	});
});

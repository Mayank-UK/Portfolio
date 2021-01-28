$(window).on('load', function () {
	// hamburger navigation
	$(function () {
		$('#j-hamburger').click(function () {
			$('.m-nav-mobile__panel').toggleClass('m-nav-mobile__panel--hide');
		});

		$('#j-nav-cross').click(function () {
			$('.m-nav-mobile__panel').toggleClass('m-nav-mobile__panel--hide');
		});
	});

	// contact form
	$(function () {
		$('#j-contact-submit').click(function (e) {
			e.preventDefault();
			alert('this is demo form');
		});
	});

	// smooth scroll
	$(function () {
		$('a[href*="#"]').smoothscroll();

		$('a[href*="#"]').smoothscroll({
			duration: 300,
		});
	});

	// active navigation element
	$(function () {
		// for desktop version
		$('.m-main-section').headerhighlight({
			elementsChanging: $('.m-nav-desktop__anchor'),
			currentClass: 'm-nav-desktop__anchor--active',
			offset: 250,
		});

		// for mobile version
		$('.m-main-section').headerhighlight({
			elementsChanging: $('.m-nav-mobile__anchor'),
			currentClass: 'm-nav-mobile__anchor--active',
			offset: 250,
		});
	});

	// scroll animations
	$(function () {
		AOS.init({
			// Global settings:
			disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
			startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
			initClassName: 'aos-init', // class applied after initialization
			animatedClassName: 'aos-animate', // class applied on animation
			useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
			disableMutationObserver: false, // disables automatic mutations' detections (advanced)
			debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
			throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

			// Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
			offset: 120, // offset (in px) from the original trigger point
			delay: 0, // values from 0 to 3000, with step 50ms
			duration: 400, // values from 0 to 3000, with step 50ms
			easing: 'ease', // default easing for AOS animations
			once: true, // whether animation should happen only once - while scrolling down
			mirror: false, // whether elements should animate out while scrolling past them
			anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
		});
	});
});

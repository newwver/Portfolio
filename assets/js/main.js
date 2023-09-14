(function () {
	'use strict';

	const myMain = {
		initialize: function () {
			myMain.setupGlobals();
			myMain.executeMethods();
		},
		setupGlobals: function () {
			this.window = window;
			this.document = document;
			this.body = document.querySelector('body');
			this.html = document.querySelector('html');
		},
		executeMethods: function () {
			myMain.activateFeatherIcons();
			myMain.initializeGoTop();
			myMain.enableStickyHeader();
			myMain.enableSmoothScroll();
			myMain.activateWOW();
			myMain.activateAOS();
			myMain.pageNavigation();
		},
		activateWOW: function () {
			new WOW().init();
		},
		enableSmoothScroll: function () {
			document.addEventListener('click', function (event) {
				const target = event.target;
				if (target.classList.contains('smooth-animation')) {
					event.preventDefault();
					const targetElement = document.querySelector(target.getAttribute('href'));
					window.scrollTo({
						top: targetElement.offsetTop - 50,
						behavior: 'smooth',
					});
				}
			});
		},
		activateFeatherIcons: function () {
			feather.replace();
		},
		initializeGoTop: function () {
			const goTopButton = document.querySelector('.go-top');
			window.addEventListener('scroll', function () {
				const baseline = window.scrollY || window.pageYOffset;
				if (baseline > 100) {
					goTopButton.style.opacity = '1';
				} else {
					goTopButton.style.opacity = '0';
				}
			});

			goTopButton.addEventListener('click', function () {
				window.scrollTo({
					top: 0,
					behavior: 'smooth',
				});
				return false;
			});
		},
		enableStickyHeader: function () {
			window.addEventListener('scroll', function () {
				const headerSticky = document.querySelector('.header--sticky');
				if (window.scrollY > 30) {
					headerSticky.classList.add('sticky');
				} else {
					headerSticky.classList.remove('sticky');
				}
			});
		},
		activateAOS: function () {
			AOS.init();
		},
		pageNavigation: function () {
			$('.page-navigation').onePageNav({
				currentClass: 'current',
				changeHash: true,
				scrollSpeed: 500,
				scrollThreshold: 0.2,
				filter: ':not(.external)',
				easing: 'swing',
				scrollChange: function ($currentListItem) {
					console.log(this);
				},
			});
		},
	};

	myMain.initialize();
})();

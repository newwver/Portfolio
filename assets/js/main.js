(function () {
	'use strict';

	const myMain = {
		window: window,
		document: document,
		body: document.querySelector('body'),
		html: document.querySelector('html'),

		initialize: function () {
			this.setupGlobals();
			this.executeMethods();
		},

		setupGlobals: function () {
			this.window = window;
			this.document = document;
			this.body = document.querySelector('body');
			this.html = document.querySelector('html');
		},

		executeMethods: function () {
			this.activateFeatherIcons();
			this.initializeGoTop();
			this.enableStickyHeader();
			this.enableSmoothScroll();
			this.blogActivation();
			this.studyListSlide();
			this.activateWOW();
			this.activateAOS();
			this.pageNavigation();
			this.handleModalScrollLock();
		},

		activateWOW: function () {
			new WOW().init();
		},

		enableSmoothScroll: function () {
			this.document.addEventListener(
				'click',
				function (event) {
					const target = event.target;
					if (target.classList.contains('smooth-animation')) {
						event.preventDefault();
						const targetElement = this.document.querySelector(target.getAttribute('href'));
						this.window.scrollTo({
							top: targetElement.offsetTop - 50,
							behavior: 'smooth',
						});
					}
				}.bind(this)
			);
		},

		activateFeatherIcons: function () {
			feather.replace();
		},

		initializeGoTop: function () {
			const goTopButton = this.document.querySelector('.go-top');
			this.window.addEventListener(
				'scroll',
				function () {
					const baseline = this.window.scrollY || this.window.pageYOffset;
					goTopButton.style.opacity = baseline > 100 ? '1' : '0';
				}.bind(this)
			);

			goTopButton.addEventListener(
				'click',
				function () {
					this.window.scrollTo({
						top: 0,
						behavior: 'smooth',
					});
					return false;
				}.bind(this)
			);
		},

		enableStickyHeader: function () {
			this.window.addEventListener(
				'scroll',
				function () {
					const headerSticky = this.document.querySelector('.header--sticky');
					headerSticky.classList.toggle('sticky', this.window.scrollY > 30);
				}.bind(this)
			);
		},

		blogActivation: function () {
			const slideCount = $('.blog-activation .blog').length;
			$('.blog-activation').slick({
				infinite: true,
				slidesToShow: 1,
				slidesToScroll: 1,
				dots: slideCount > 1,
				arrows: true,
				adaptiveHeight: true,
				cssEase: 'linear',
				prevArrow: '<button class="slide-arrow prev-arrow"><i class="feather-arrow-left"></i></button>',
				nextArrow: '<button class="slide-arrow next-arrow"><i class="feather-arrow-right"></i></button>',
			});
		},

		studyListSlide: function () {
			const slideCount = $('.study-wrapper .study-slide').length;
			$('.study-wrapper').slick({
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                dots: false,
                arrows: true,
                cssEase: 'linear',
                adaptiveHeight: true,
                prevArrow: '<button class="slide-arrow prev-arrow"><i class="feather-arrow-left"></i></button>',
                nextArrow: '<button class="slide-arrow next-arrow"><i class="feather-arrow-right"></i></button>',
                responsive: [{
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                        }
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                        }
                    },
                    {
                        breakpoint: 576,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            dots: true,
                            arrows: false,
                        }
                    }
                ]
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
				}.bind(this),
			});
		},

		handleModalScrollLock: function () {
			const observer = new MutationObserver((mutations) => {
				mutations.forEach((mutation) => {
					const modalIsOpen = this.body.classList.contains('modal-open');
					if (modalIsOpen) {
						this.html.classList.add('modal-open');
					} else {
						this.html.classList.remove('modal-open');
					}
				});
			});
		
			observer.observe(this.body, {
				attributes: true,
				attributeFilter: ['class'],
			});
		}
	};

	myMain.initialize();
})();

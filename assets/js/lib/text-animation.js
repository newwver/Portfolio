jQuery(document).ready(function (d) {
	var l = 2500,
		n = 3800,
		t = n - 300,
		r = 50,
		o = 150,
		c = 500,
		h = c + 800,
		p = 600,
		e = 2500,
		s = d('.change-text.letters')
			.find('b')
			.each(function () {
				var s = d(this),
					e = s.text().split(''),
					a = s.hasClass('is-visible');

				for (i in e) {
					if (0 < s.parents('.rotate-2').length) {
						e[i] = '<em>' + e[i] + '</em>';
					}
					e[i] = a ? '<i class="in">' + e[i] + '</i>' : '<i>' + e[i] + '</i>';
				}

				var n = e.join('');
				s.html(n).css('opacity', 1);
			});
	s = d('.change-text');
	u = l;

	function f(s) {
		var i,
			e,
			a = w(s);

		if (s.parents('.change-text').hasClass('type')) {
			i = s.parent('.change-text-wrap');
			i.addClass('selected').removeClass('waiting');

			setTimeout(function () {
				i.removeClass('selected');
				s.removeClass('is-visible').addClass('is-hidden').children('i').removeClass('in').addClass('out');
			}, c);

			setTimeout(function () {
				C(a, o);
			}, h);
		} else if (s.parents('.change-text').hasClass('letters')) {
			e = s.children('i').length >= a.children('i').length;

			(function s(i, e, a, n) {
				i.removeClass('in').addClass('out');

				if (i.is(':last-child')) {
					a &&
						setTimeout(function () {
							f(w(e));
						}, l);
				} else {
					setTimeout(function () {
						s(i.next(), e, a, n);
					}, n);
				}

				if (i.is(':last-child') && d('html').hasClass('no-csstransitions')) {
					var t = w(e);
					v(e, t);
				}
			})(s.find('i').eq(0), s, e, r);

			m(a.find('i').eq(0), a, e, r);
		} else if (s.parents('.change-text').hasClass('clip')) {
			s.parents('.change-text-wrap').animate({ width: '2px' }, p, function () {
				v(s, a);
				C(a);
			});
		} else if (s.parents('.change-text').hasClass('loading-bar')) {
			s.parents('.change-text-wrap').removeClass('is-loading');
			v(s, a);

			setTimeout(function () {
				f(a);
			}, n);

			setTimeout(function () {
				s.parents('.change-text-wrap').addClass('is-loading');
			}, t);
		} else {
			v(s, a);

			setTimeout(function () {
				f(a);
			}, l);
		}
	}

	function C(s, i) {
		if (s.parents('.change-text').hasClass('type')) {
			m(s.find('i').eq(0), s, false, i);
			s.addClass('is-visible').removeClass('is-hidden');
		} else if (s.parents('.change-text').hasClass('clip')) {
			s.parents('.change-text-wrap').animate({ width: s.width() + 10 }, p, function () {
				setTimeout(function () {
					f(s);
				}, e);
			});
		}
	}

	function m(s, i, e, a) {
		s.addClass('in').removeClass('out'),
			s.is(':last-child')
				? (i.parents('.change-text').hasClass('type') &&
						setTimeout(function () {
							i.parents('.change-text-wrap').addClass('waiting');
						}, 200),
				  e ||
						setTimeout(function () {
							f(i);
						}, l))
				: setTimeout(function () {
						m(s.next(), i, e, a);
				  }, a);
	}
	function w(s) {
		return s.is(':last-child') ? s.parent().children().eq(0) : s.next();
	}
	function v(s, i) {
		s.removeClass('is-visible').addClass('is-hidden'), i.removeClass('is-hidden').addClass('is-visible');
	}
	s.each(function () {
		var s,
			i,
			e,
			a = d(this);

		if (a.hasClass('loading-bar')) {
			u = n;
			setTimeout(function () {
				a.find('.change-text-wrap').addClass('is-loading');
			}, t);
		} else if (a.hasClass('clip')) {
			s = (i = a.find('.change-text-wrap')).width() + 10;
			i.css('width', s);
		} else if (a.hasClass('type')) {
			i = a.find('.change-text-wrap b');
			e = 0;
			i.each(function () {
				var s = d(this).width();
				e < s && (e = s);
			});
			a.find('.change-text-wrap').css('width', e);
		}

		setTimeout(function () {
			f(a.find('.is-visible').eq(0));
		}, u);
	});
});

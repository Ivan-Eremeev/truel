//  Ivan Eremeev - 2021
//  Skype: ivan.eremeev_1
//  Telegram: IvanMessage
//  Email: ivan.frontcoder@gmail.com

$(document).ready(function () {
	
	//= libs-settings/yandex-map-settings.js
	//= libs-settings/slick_settings.js

	// Запрет перехода по ссылкам с хэшем
	$('a[href="#"]').click(function(e) {
		e.preventDefault();
	});

	function myMenu() {
		var	menuBtn = $('.js-menu-btn'),
				body = $('body'),
				scrollbarWidth;
		menuBtn.on('click', function () {
			var btn = $(this),
					data = btn.data('menuid'),
					thisMenu = $(data),
					close = thisMenu.find('#menu-close');
			if (!btn.hasClass('active')) {
				body.addClass('lock').css('padding-right', scrollbarWidth);
				thisMenu.addClass('open');
				btn.addClass('is-active');
			}else {
				body.removeClass('lock').css('padding-right', scrollbarWidth);
				thisMenu.removeClass('open');
				btn.removeClass('is-active');
			}
			close.on('click', function () {
				body.removeClass('lock').css('padding-right', scrollbarWidth);
				thisMenu.removeClass('open');
				btn.removeClass('is-active');
			});
		});
		function scrollbarWidthCalc() { // Вычисление ширины скролла
			var documentWidth = parseInt(document.documentElement.clientWidth),
					windowsWidth = parseInt(window.innerWidth);
					scrollbarWidth = windowsWidth - documentWidth;
		}
		scrollbarWidthCalc();
		$(window).resize(scrollbarWidthCalc);
	};
	myMenu($(''));

	// Аккордеон
	function accordionProcess() {
		if ($('.accoproc__accordion').length) {
			$('.accoproc__accordion').each(function () {
				var accordion = $(this),
						trigger = accordion.find('.accordion__trigger'),
						content = accordion.find('.accordion__content'),
						img = accordion.find('.accoproc__img img'),
						time = 300;
				trigger.on('click', function () {
					var $thisTrigger = $(this),
							data = $thisTrigger.data('trigger');
					if (!$thisTrigger.hasClass('active')) {
						trigger.removeClass('active');
						img.removeClass('active').css('display','none')
						content.stop().slideUp(
							time,
							function () {
								$(this).removeClass('open')
							}
						);
						$thisTrigger.addClass('active');
						$('.accoproc__img img[data-img ="' + data + '"]').stop().fadeIn(
							time,
							function () {
								$(this).addClass('.active')
							}
						);
						accordion.find(data).stop().slideDown(
							time,
							function () {
								$(this).addClass('open')
							}
						);
					} else {
						$thisTrigger.removeClass('active');
						accordion.find(data).stop().slideUp(
							time,
							function () {
								$(this).removeClass('open')
							}
						);
					}
				})
			})
		}
	}
	accordionProcess();

	// Аккордеон
	function accordion() {
		if ($('.accordion').length) {
			$('.accordion').each(function () {
				var accordion = $(this),
					trigger = accordion.find('.accordion__trigger'),
					time = 300;
				trigger.on('click', function () {
					var $thisTrigger = $(this),
						data = $thisTrigger.data('trigger');
					if (!$thisTrigger.hasClass('active')) {
						$thisTrigger.addClass('active');
						$thisTrigger.closest('.accordion__item').addClass('active')
						accordion.find('#' + data).stop().slideDown(
							time,
							function () {
								$(this).addClass('open')
							}
						);
					} else {
						$thisTrigger.removeClass('active');
						$thisTrigger.closest('.accordion__item').removeClass('active')
						accordion.find('#' + data).stop().slideUp(
							time,
							function () {
								$(this).removeClass('open')
							}
						);
					}
				})
			})
		}
	}
	accordion();

	// Модальное окно
	function modal() {
		$('.js-modal-trigger').on('click', function() {
			var $this = $(this),
					data = $this.data('modal'),
					thisModal = $(data);
			modalShow(thisModal);
		});
	};
	// Открытие модального окна
	function modalShow(thisModal) {
		var	modalClose = thisModal.find($('.js-modal_close'));
		thisModal.addClass('open');
		modalClose.on('click', function() {
			modalHide(thisModal);
		});
		thisModal.on('click', function(e) {
			if (thisModal.has(e.target).length === 0) {
				modalHide(thisModal);
			}
		});
	};
	// Закрытие модального окна
	function modalHide(thisModal) {
		thisModal.removeClass('open');
		setTimeout(() => {
			$('.modal__slider').slick('slickGoTo', 0);
		}, 500);
	};
	modal();

	// MagnigicPopup
	if ($('.image-link').length) {
		$('.image-link').magnificPopup({ type: 'image' });
	}

	// Присваивание класса при клике
	function clickToggle(block) {
		if (block.length) {
			block.on('click', function () {
				$(this).toggleClass('active');
			});
		}
	}
	clickToggle($('.js-click'));	

});
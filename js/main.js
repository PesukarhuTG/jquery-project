$(function () {

	// ============= BURGER-MENU ==================
	let menuLink = $('.menu-link');
	let menu =$('menu');
	let close = $('.close-btn');
	let navLinks = $('li a');

	menuLink.click(function() {
		menu.toggleClass('active-menu');
	});

	close.click(function(e) {
		e.preventDefault();
		menu.toggleClass('active-menu');
	});


	//smooth scroll
	navLinks.on('click', function(e) {
		e.preventDefault();

		//определить содержкание ссылки
		let target = $(this).attr('href'); 

		//на какое расстояние нужно открутить до кликнутого элемента
		let top = $(target).offset().top;

		//найти секцию в DoM путем медленной прокрутки
		$('html, body').animate({scrollTop: top}, 500);

	});

	// ============= SLIDER JQUERY ==================

	let slideNow = 1;
	let slideCount = $('.sliderwprapper').children().length;

	setInterval(nextSlide, 5000);

	function nextSlide() {

		if ((slideNow === slideCount) || ((slideNow < 0) & (slideNow === 0)) || (slideNow > slideCount)) {
			$('.sliderwprapper').css({
				'transform': 'translate(0,0)'
			});

			slideNow = 1;

			$('.active').removeClass('active');
			$('.slide-nav:eq(0)').addClass('active');

		} else {

			let translateHeight = -($('.viewport').height() * (slideNow));
			
			$('.sliderwprapper').css({
				'transform': 'translate(0,'+translateHeight+'px)'
			});

			$('.active').removeClass('active');
			$('.slide-nav:eq('+slideNow+')').addClass('active');

			slideNow++;

		}
	}

	//slider buttons

	$('.btn-next').click(nextSlide);

	function prevSlide() {

		if ((slideNow === 1) || ((slideNow < 0) & (slideNow === 0)) || (slideNow > slideCount)) {

			let translateHeight = -($('.viewport').height() * (slideCount - 1));
			$('.sliderwprapper').css({
				'transform': 'translate(0,'+translateHeight+'px)'
			});

			$('.active').removeClass('active');
			$('.slide-nav:eq('+(slideCount - 1)+')').addClass('active');

			slideNow = slideCount;

		} else {

			let translateHeight = -($('.viewport').height() * (slideNow - 2));
			
			$('.sliderwprapper').css({
				'transform': 'translate(0,'+translateHeight+'px)'
			});

			$('.active').removeClass('active');
			$('.slide-nav:eq('+(slideNow - 2)+')').addClass('active');

			slideNow--;
		}
	}

	$('.btn-prev').click(prevSlide);

	//slider pagination

	let navBtn = $('.slide-nav');

	navBtn.click(function() {

		navBtn = $(this).index();
		
		$('.active').removeClass('active');
		$(this).addClass('active');

		if ((navBtn + 1) != slideNow) {

			let translateHeight = -($('.viewport').height() * (navBtn));
			
			$('.sliderwprapper').css({
				'transform': 'translate(0,'+translateHeight+'px)'
			});

			slideNow = navBtn + 1;
		} 
	})

	// ====================== ТАБЫ ======================
	let tabs = $('a[data-toggle="tab"]');

	tabs.on('click', function(e) {

		e.preventDefault();

		//find all active class and delete
		$('.active-tab').removeClass('active-tab');

		//click on link => active class is setting on li-parent
		$(this).parent().toggleClass('active-tab');
		$(this).toggleClass('active-tab');

		let target = $(this).attr('href');

		//find the element by href context
		$(target).toggleClass('active-tab');
	})

	// ====================== CALCULATOR ======================

	let mCount = $('.m-count');
	let typeAuto = $('.type-auto');
	let typeColor = $('.type-color');
	let typeOfWheel = $('input[name="typeOfWheel"]').val();
	let project = $('input[type="checkbox"]');
	let price = $('#price-sum');
	
	let finalPrice = 30000;
	let basePrice = 20000;
	let carMileage = 1;
	let consult = 0;

	function summCount() {
		finalPrice = basePrice * +typeAuto.val() * carMileage * +typeColor.val() * +typeOfWheel + consult;
		price.text(finalPrice.toFixed());
	}

	//check mileage input
	mCount.change(function() {
		if ($(this).val() > 2000 && $(this).val() < 20000 || $(this).val() == 20000){
			$('.tooltiptext').css('visibility', 'hidden');
			carMileage = 3;
			summCount();
		} else if ($(this).val() > 20001 && $(this).val() < 80000 || $(this).val() == 80000) {
			$('.tooltiptext').css('visibility', 'hidden');
			carMileage = 1.5;
			summCount();
		} else if ($(this).val() > 80001) {
			$('.tooltiptext').css('visibility', 'hidden');
			carMileage = 1;
			summCount();
		} else {
			$('.tooltiptext').css('visibility', 'visible');
			}
		}
	);

	//check auto type input
	typeAuto.change(function() {
		if ($(this).val() == 1) {
			$('img').attr('src', 'img/sedan01.png');
			} else if ($(this).val() == 1.2) {
			$('img').attr('src', 'img/hech01.png')
		} else if ($(this).val() == 1.5) {
			$('img').attr('src', 'img/mini01.png');
		} else {
			$('img').attr('src', 'img/kros01.png');
		}
		summCount();
	});

	//check color type input
	typeColor.change(function() {

		if (typeAuto.val() == 1 && $(this).val() == 1) {
			$('img').attr('src', 'img/sedan01.png');
		} else if (typeAuto.val() == 1 && $(this).val() == 1.1) {
			$('img').attr('src', 'img/sedan02.png');
		} else if (typeAuto.val() == 1.2 && $(this).val() == 1) {
			$('img').attr('src', 'img/hech01.png');
		} else if (typeAuto.val() == 1.2 && $(this).val() == 1.1) {
			$('img').attr('src', 'img/hech02.png');
		} else if (typeAuto.val() == 1.5 && $(this).val() == 1) {
			$('img').attr('src', 'img/mini01.png');
		} else if (typeAuto.val() == 1.5 && $(this).val() == 1.1) {
			$('img').attr('src', 'img/mini02.png');
		} else if (typeAuto.val() == 2 && $(this).val() == 1) {
			$('img').attr('src', 'img/kros01.png');
		} else {
			$('img').attr('src', 'img/kros02.png');
		}
		summCount();
	});

	//check wheels type input
	$('input[name="typeOfWheel"]').change(function() {
		typeOfWheel = $(this).val();
		summCount();
	});

	//check counsultation input
	project.change(function() {
		consult = 5000;
		if ($(this).is(':checked')) {
			summCount();
		} else {
			consult = 0;
			summCount();
		}
	});

	$('button').click(summCount);

price.text(finalPrice);

// ====================== SPECIAL OFFER ======================

	//use libruary Numeric for number check
	$('.input-cart-number').numeric();
	$('#card-ccv').numeric();

	//find all 4 input for card number and check keyup + change input
	$('.input-cart-number').on('keyup change', function() {

				//значение, вписываемое в input, дублируем в span на изображении,
				//при этом номер span соответствует порядковому номеру поля input, куда пишем цифры
				$('.number span:nth-child(' +$(this).index()+ ')').text($(this).val());

				if ($(this).val().length > 3) {
					//jump to next input
					$(this).next().focus();

				} if ($(this).val().length < 1) {
					//jump to prev input for deleting or changing
					$(this).prev().focus();

				} if ($(this).val().length > 3 && $(this).index() == 4) {
					$('#card-holder').focus();
				}
	})


	$('#card-holder').on('keyup change', function() {
		$('.card-holder div').text($(this).val());
	})

	$('#card-expiration-month').change(function () {
		$('span.month').text($(this).val()+'/');
	})

	$('#card-expiration-year').change(function () {
		$('span.year').text($(this).val());
	})

	$('#card-ccv').on('focus', function() {
		$('.credit-card-box').addClass('hover');
	}).on('blur', function () {
		$('.credit-card-box').removeClass('hover');
	}).on('keyup change', function() {
		$('.ccv').text($(this).val());
	});

	// ====================== FORM AJAX FOR SPECIAL OFFER ======================
	
	$('form.form-offer').submit(function(e) {
		e.preventDefault();

		let cardNumber1 = $(this).find('#card-number-1').val();
		let cardNumber2 = $(this).find('#card-number-2').val();
		let cardNumber3 = $(this).find('#card-number-3').val();
		let cardNumber4 = $(this).find('#card-number-4').val();
		let cardHolder = $(this).find('#card-holder').val();
		let cardMonth = $(this).find('#card-expiration-month').val();
		let cardYear = $(this).find('#card-expiration-year').val();
		let cardCcv = $(this).find('#card-ccv').val();
		
		$.ajax({
			url: "./offer.php",
			type: "GET",
			dataType: "html",
			data: {
				card_number1: cardNumber1,
				card_number2: cardNumber2,
				card_number3: cardNumber3,
				card_number4: cardNumber4,
				card_holder: cardHolder,
				card_month: cardMonth,
				card_year: cardYear,
				card_ccv: cardCcv,
			},
		
		})
		.done (function(data) {
			

			if ($('#card-number-1').val() && $('#card-number-2').val() && $('#card-number-3').val() && $('#card-number-4').val() && 
				$('#card-expiration-month').val() && $('#card-expiration-year').val() && $('#card-ccv').val()) {

				console.log(data);
				
				$('.popup-info').load('./popupPage.html #modal04');
				setTimeout(closeModalWindow, 2300);

				$('.input-cart-number').val('');
				$('#card-holder').val('');
				$('#card-expiration-month').val('');
				$('#card-expiration-year').val('');
				$('#card-ccv').val('');

			} else {
				$('.popup-info').load('./popupPage.html #modal02');
				setTimeout(closeModalWindow, 2200);
				
			}
		})
		.fail (function() {
			console.log('error');

			$('.popup-info').load('./popupPage.html #modal03');
				setTimeout(closeModalWindow, 2200);
		})
	});

	// ====================== FORM AJAX FOR QUESTION FORM ======================
	$('form#question-form').submit(function(e) {
		e.preventDefault();

		let userName = $(this).find('.form-name').val();
		let userQuestion = $(this).find('.form-question').val();
		let userPhone = $(this).find('.form-phone').val();
		
		$.ajax({
			url: "./send.php",
			type: "GET",
			dataType: "html",
			data: {
				name: userName,
				question: userQuestion,
				mobile: userPhone
			},
		
		})
		.done (function(data) {

			if ( $('.form-name').val() && $('.form-question').val() && $('.form-phone').val()) {

				console.log(data);
				
				$('.popup-info').load('./popupPage.html #modal01');
				setTimeout(closeModalWindow, 2200);
				
				$('.form-name').val('');
				$('.form-question').val('');
				$('.form-phone').val('');

			} else {
				$('.popup-info').load('./popupPage.html #modal02');
				setTimeout(closeModalWindow, 2200);
				
			}
		})
		.fail (function() {
			console.log('error');

			$('.popup-info').load('./popupPage.html #modal03');
				setTimeout(closeModalWindow, 2200);
		})
	});

	function closeModalWindow() {
		$('.popup-page').remove();
	}

	// ====================== INPUT PHONE VALIDATOR ======================
	$('.phone-field').inputmask("+7(999)999-9999");
	
	jQuery.validator.addMethod("checkMaskPhone", function(value) {
		return /\+\d{1}\(\d{3}\)\d{3}-\d{4}/g.test(value); 
	});
		
	var form = $('.form-request');
		
	form.validate();
		
	$.validator.addClassRules({
		'phone-field': {
			checkMaskPhone: true,
		}
	});

});


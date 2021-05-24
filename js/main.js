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
			console.log(translateHeight);
			
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
});


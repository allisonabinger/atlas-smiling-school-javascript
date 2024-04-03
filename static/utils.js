// JavaScript Functions to be used in all html files
// link in header



// Quotes Carousel
$(document).ready(function(){
	$('#loader-quotes').removeClass('d-none');

	$.ajax({
		url: 'https://smileschool-api.hbtn.info/quotes',
		method: 'GET',
		success: function(response) {
			$('#loader-quotes').addClass('d-none');

			var carouselInner = $('#carousel-inner-quotes');
			carouselInner.empty();
			$.each(response, function(index, quote) {
				var activeClass = index === 0 ? 'active' : '';
				var carouselItem = `
					<div class="carousel-item ${activeClass}">
						<div class="row mx-auto align-items-center">
							<div class="col-12 col-sm-2 col-lg-2 offset-lg-1 text-center">
								<img src="${quote.pic_url}" class="d-block align-self-center rounded-circle" alt="Carousel Pic ${index + 1}">
							</div>
							<div class="col-12 col-sm-7 offset-sm-2 col-lg-9 offset-lg-0">
								<div class="quote-text">
									<p class="text-white">${quote.text}</p>
									<h4 class="text-white font-weight-bold">${quote.name}</h4>
									<span class="text-white">${quote.title}</span>
								</div>
							</div>
						</div>
					</div>`;
				carouselInner.append(carouselItem);
			});
			// $('.carousel').carousel();
		},
		error: function(xhr, status, error) {
			console.error('Error:', error);
			$('#loader-quotes').addClass('d-none');
		}
	});
});



// Videos Carousel 

	// GenerateStars Helper function
	function generateStars(rating) {
		var starsHTML = '';
		for (var i = 0; i < 5; i++) {
			if (i < rating) {
				starsHTML += '<img class="rating" src="images/star_on.png" alt="star on" width="15px"/>'
			} else {
				starsHTML += '<img class="rating" src="images/star_off.png" alt="star on" width="15px"/>'
			}
		}
		return starsHTML;
	}

	// Most Popular Tutorials API + Slick
	$(document).ready(function (){

		$('#loader-popular').removeClass('d-none');

		$('.popular .slick-carousel').slick({
			slidesToShow: 4,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 3000,
			dots: false,
			infinite: true,
			prevArrow: `<a class="carousel-control-prev arrow-left" href="#" role="button" data-slide="prev"><img src="images/arrow_black_left.png" alt="Quote Previous" aria-hidden="true"/><span class="sr-only">Previous</span></a>`,
			nextArrow: '<a class="carousel-control-next arrow-right" href="#" role="button" aria-label="Next"><img src="images/arrow_black_right.png" alt="Quote Next" aria-hidden="true"><span class="sr-only">Next</span></a>',
			responsive: [
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 1
					},
				},
				{
					breakpoint: 992,
					settings: {
						slidesToShow: 2
					},
				},
			]
		});

		$.ajax({
			url: 'https://smileschool-api.hbtn.info/popular-tutorials',
			method: 'GET',
			success: function(response) {
				$('#loader-popular').addClass('d-none');
				
				$.each(response, function(index, card) {
					var starsHTML = generateStars(card.star);
					var subTitle = card['sub-title'];
					var cardHTML = `
						<div class="slick-slide"
							<div class="card">
							<img src="${card.thumb_url}" class="card-img-top" alt="Video thumbnail"/>
							<div class="card-body">
								<h5 class="card-title font-weight-bold">
									${card.title}
								</h5>
								<p class="card-text text-muted">
									${subTitle}
								</p>
								<div class="creator d-flex align-items-center">
									<img src="${card.author_pic_url}" alt="Creator of Video" width="30px" class="rounded-circle"/>
									<h6 class="pl-3 m-0 main-color">${card.author}</h6>
								</div>
								<div class="info row pt-3 justify-content-between">
									<div class="rating">
										${starsHTML}
									</div>
									<span class="main-color">${card.duration}</span>
								</div>
							</div>
						</div>
					`;

					$('.popular .slick-carousel').append(cardHTML);
				});
				
				$('.popular .slick-carousel').slick('unslick').slick({
					slidesToShow: 4,
					slidesToScroll: 1,
					autoplay: true,
					autoplaySpeed: 3000,
					dots: false,
					infinite: true,
					prevArrow: `<a class="carousel-control-prev arrow-left" href="#" role="button" data-slide="prev"><img src="images/arrow_black_left.png" alt="Quote Previous" aria-hidden="true"/><span class="sr-only">Previous</span></a>`,
					nextArrow: '<a class="carousel-control-next arrow-right" href="#" role="button" aria-label="Next"><img src="images/arrow_black_right.png" alt="Quote Next" aria-hidden="true"><span class="sr-only">Next</span></a>',
					responsive: [
						{
							breakpoint: 768,
							settings: {
								slidesToShow: 1
							},
						},
						{
							breakpoint: 992,
							settings: {
								slidesToShow: 2
							},
						},
					]
				});
				
			},
			error: function(xhr, status, error) {
				console.error('Error:', error);
				console.log('Most popular Error');
				$('#loader-popular').addClass('d-none');
			}
		});

		////////////// Latest Videos

		$('#loader-latest').removeClass('d-none');

		$('.slick-carousel-latest').slick({
			slidesToShow: 4,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 3000,
			dots: false,
			infinite: true,
			prevArrow: `<a class="carousel-control-prev arrow-left" href="#" role="button" data-slide="prev"><img src="images/arrow_black_left.png" alt="Quote Previous" aria-hidden="true"/><span class="sr-only">Previous</span></a>`,
			nextArrow: '<a class="carousel-control-next arrow-right" href="#" role="button" aria-label="Next"><img src="images/arrow_black_right.png" alt="Quote Next" aria-hidden="true"><span class="sr-only">Next</span></a>',
			responsive: [
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 1
					},
				},
				{
					breakpoint: 992,
					settings: {
						slidesToShow: 2
					},
				},
			]
		});

		$.ajax({
			url: 'https://smileschool-api.hbtn.info/latest-videos',
			method: 'GET',
			success: function(response) {
				
				$('#loader-latest').addClass('d-none');
				
				$.each(response, function(index, card) {
					var starsHTML = generateStars(card.star);
					var subTitle = card['sub-title'];
					var cardHTML = `
						<div class="slick-slide"
							<div class="card">
							<img src="${card.thumb_url}" class="card-img-top" alt="Video thumbnail"/>
							<div class="card-body">
								<h5 class="card-title font-weight-bold">
									${card.title}
								</h5>
								<p class="card-text text-muted">
									${subTitle}
								</p>
								<div class="creator d-flex align-items-center">
									<img src="${card.author_pic_url}" alt="Creator of Video" width="30px" class="rounded-circle"/>
									<h6 class="pl-3 m-0 main-color">${card.author}</h6>
								</div>
								<div class="info row pt-3 justify-content-between">
									<div class="rating">
										${starsHTML}
									</div>
									<span class="main-color">${card.duration}</span>
								</div>
							</div>
						</div>
					`;

					$('.slick-carousel-latest').append(cardHTML);
				});
				
				$('.slick-carousel-latest').slick('unslick').slick({
					slidesToShow: 4,
					slidesToScroll: 1,
					autoplay: true,
					autoplaySpeed: 3000,
					dots: false,
					infinite: true,
					prevArrow: `<a class="carousel-control-prev arrow-left" href="#" role="button" data-slide="prev"><img src="images/arrow_black_left.png" alt="Quote Previous" aria-hidden="true"/><span class="sr-only">Previous</span></a>`,
					nextArrow: '<a class="carousel-control-next arrow-right" href="#" role="button" aria-label="Next"><img src="images/arrow_black_right.png" alt="Quote Next" aria-hidden="true"><span class="sr-only">Next</span></a>',
					responsive: [
						{
							breakpoint: 768,
							settings: {
								slidesToShow: 1
							},
						},
						{
							breakpoint: 992,
							settings: {
								slidesToShow: 2
							},
						},
					]
				});
				
			},
			error: function(xhr, status, error) {
				console.error('Error:', error);
				console.log('Latest Error');
				$('#loader-latest').addClass('d-none');
			}
		});

	});



	// Courses JS /////////////////////////////

// 	<div class="col-12 col-sm-4 col-lg-3 d-flex justify-content-center">
// 	<div class="card">
// 		<img src="images/thumbnail_4.jpg" class="card-img-top" alt="Video thumbnail"/>
// 		<div class="card-img-overlay text-center">
// 			<img src="images/play.png" alt="Play" width="64px" class="align-self-center play-overlay"/>
// 		</div>
// 		<div class="card-body">
// 			<h5 class="card-title font-weight-bold">Diagonal Smile</h5>
// 			<p class="card-text text-muted">
// 				Lorem ipsum dolor sit amet, consect adipiscing elit, sed do
// 				eiusmod.
// 			</p>
// 			<div class="creator d-flex align-items-center">
// 				<img src="images/profile_1.jpg" alt="Creator of Video" width="30px" class="rounded-circle"/>
// 				<h6 class="pl-3 m-0 main-color">Phillip Massey</h6>
// 			</div>
// 			<div class="info pt-3 d-flex justify-content-between">
// 				<div class="rating">
// 				</div>
// 				<span class="main-color">8 min</span>
// 			</div>
// 		</div>
// 	</div>
// </div>

$(document).ready(function() {

	$('#loader-results').removeClass('d-none');

	function loadVideoCards(searchValue = '', topicValue = '', sortByValue = '') {
		// Event listeners

		// var searchValue = $('#search-input').val();
		// var topicValue = $('#topic-dropdown').val();
		// var sortByValue = $('#sort-dropdown').val();

		// jquery request
		$.ajax({
			url: 'https://smileschool-api.hbtn.info/courses',
			method: 'GET',
			data: {
				q: searchValue,
				topic: topicValue,
				sort: sortByValue
			},
			success: function (response) {
				$('#loader-results').addClass('d-none');
				console.log('api success')
				// call to create cards
				renderVideoCards(response.courses)
			},
			error: function (xhr, status, error) {
				$('#loader-results').addClass('d-none');
				console.log('Error in jQuery request to API');
				console.error('Error:', error);
			}
		});
	}

	// renders (makes) the video cards
	function renderVideoCards(courses) {
		var container = $('#video-card-container');
		container.empty();

		$.each(courses, function (index, course) {
			console.log('render success')
			var starsHTML = generateStars(course.star);
			var cardHTML = `
				<div class="col-12 col-sm-4 col-lg-3 d-flex justify-content-center">
					<div class="card">
						<img src="${course.thumb_url}" class="card-img-top" alt="Video thumbnail"/>
						<div class="card-img-overlay text-center">
								<img src="images/play.png" alt="Play" width="64px" class="align-self-center play-overlay"/>
						</div>
						<div class="card-body">
							<h5 class="card-title font-weight-bold">${course.title}</h5>
							<p class="card-text text-muted">${course['sub-title']}</p>
							<div class="creator d-flex align-items-center">
									<img src="${course.author_pic_url}" alt="Creator of Video" width="30px" class="rounded-circle"/>
									<h6 class="pl-3 m-0 main-color">${course.author}</h6>
							</div>
							<div class="info pt-3 d-flex justify-content-between">
								<div class="rating">
								</div>
								<span class="main-color">${course.duration}</span>
							</div>
						</div>
					</div>
				</div>
			`;
			container.append(cardHTML);
		});
	}

	// Event Handlers

	$('#search-input').on('keyup', function (event) {
		if (event.keyCode === 13) {
			var searchValue = $(this).val();
			console.log(searchValue);
			loadVideoCards(searchValue);
		}
	});

	$('#topic-dropdown').click(function () {
		console.log('topic clicked');
		var topicValue = $(this).data('topic');
		console.log(`topic selected: ${topicValue}`);
		
		loadVideoCards('', topicValue);
	});

	$('#sort-dropdown').on('change', function () {
		var sortByValue = $(this).val();
		loadVideoCards('', '', sortByValue);
	});

	$('.dropdown-menu').on('click', '.dropdown-item', function() {
		var dropdown = $(this).closest('.dropdown');
		var selectedText = $(this).text();
		dropdown.find('span').text(selectedText);
	});

	loadVideoCards();
});

// JavaScript Functions to be used in all html files
// link in header



// Quotes Carousel
$(document).ready(function(){
	$('#loader').removeClass('d-none');

	$.ajax({
		url: 'https://smileschool-api.hbtn.info/quotes',
		method: 'GET',
		success: function(response) {
			$('#loader').addClass('d-none');

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
			$('.carousel').carousel();
		},
		error: function(xhr, status, error) {
			console.error('Error:', error);
			$('#loader').addClass('d-none');
		}
	});
});


// Videos Card
$(document).ready(function (){
	$('.slick-carousel').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		dots: false,
		infinite: true,
		prevArrow: `<a class="carousel-control-prev arrow-left" href="#" role="button" data-slide="prev"><img src="images/arrow_black_left.png" alt="Quote Previous" aria-hidden="true"/><span class="sr-only">Previous</span></a>`,
		nextArrow: '<a class="carousel-control-next arrow-right" href="#" role="button" aria-label="Next"><img src="images/arrow_black_right.png" alt="Quote Next" aria-hidden="true"><span class="sr-only">Next</span></a>',
		response: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3
				}
			}
		]
	});
});

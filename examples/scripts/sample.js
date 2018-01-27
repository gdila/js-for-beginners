;(function ($, sample, undefined) {

	var heroSlider = function() {
		$('.hero-slideshow').slick({
			autoplay: true,
			arrows: false,
			dots: true,
			pauseOnFocus: true,
			speed: 500,
			vertical: true,
			verticalSwiping: true,
			zIndex: 90
		});
	};

	var teamSlider = function(){
		$('.team-members').slick({
			dots: true,
			slidesToShow: 3,
			slidesToScroll: 3,
			zIndex: 90,
			prevArrow: '<button class="slick-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
			nextArrow: '<button class="slick-next"><i class="fa fa-angle-right" aria-hidden="true"></i></button>'
		});
	};

	var testimonialsSlider = function(){
		$('.testimonials-wrap').slick({
			autoplay: true,
			arrows: false,
			dots: true,
			pauseOnFocus: true,
			speed: 500,
			zIndex: 90
		});
	};

	var validateContact = function(){
		var form = $('#contact'),
			nameField = form.find('#name'),
			emailField = form.find('#email'),
			messageField = form.find('#message');

		form.on('submit', function(e){
			e.preventDefault();

			var name = nameField.val(),
				email = emailField.val(),
				message = messageField.val();

			if(!name) {
				displayError('Hey, you didn\'t fill in your name!');
			} else if (!email) {
				displayError('Uh oh - you forgot to tell us your email address');
			} else if (!message) {
				displayError('Um, I think you forgot to fill out a message');
			}

		});

		function displayError(msg) {
			form.find('.message').fadeOut('fast', function(){$(this).remove()});

			var newMessage = $('<div class="message">' + msg + '</div>');

			form.prepend(newMessage);

		}
	};

	var loadWorks = function(){
		var worksList = $('ul.works');
		$('#load-works').on('click', function(e){
			e.preventDefault();
			var $this = $(this);

			$this.addClass('loading').text('loading...').delay(300);

			$.get('works.html', function(data) {
				var newList = $(data);
				newList.hide().insertAfter(worksList).delay(300).slideDown('slow');
				$this.fadeOut();
			});
		});
	};

	sample.init = function() {
		$('html').removeClass('no-js').addClass('js');
	  heroSlider();
	  teamSlider();
	  testimonialsSlider();
	  validateContact();
	  loadWorks();
	};

}(jQuery, window.sample = window.sample || {}));


jQuery(function(){
	sample.init();
});
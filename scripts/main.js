(function($) {

	// Document ready
	$(document).ready(function() {

		// Fancybox initialization
		$('.gallery-image').fancybox();

		// Navigation click functionality
		$('.navigation a').on('click', function() {
			var _this = $(this),
					target = _this.data('target');

			_this.parent().addClass('active').siblings().removeClass('active');

			scrollTo(target);

			return false;
		});

		// Mobile menu toggle
		$('.mobile-toggle').on('click', function() {
			$('.navigation').fadeToggle();

			return false;
		});
	});

	// Scroll to section
	function scrollTo(element) {
		$('html, body').animate({
			scrollTop: $('#' + element).offset().top - 100
		});
	}

})(jQuery);
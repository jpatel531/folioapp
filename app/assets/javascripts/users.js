	var smoothScroll = function(clickThis, goTo, speed){
		$(clickThis).on('click', function(){
			$('html, body').animate({
				scrollTop: $(goTo).offset().top
			}, speed);
			return false;
		});
	};


	smoothScroll('div.option#portfolio', '#work-section', 500);
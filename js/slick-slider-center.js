 $(document).on('ready', function() {
// --------------------SLIDER IN THE WALLS BLOCK----------------------	
	$(".center").slick({
	    dots: true,
	    infinite: true,
	    centerMode: true,
	    slidesToShow: 4,
	    slidesToScroll: 4,
	    responsive: [
		    {
		      breakpoint: 992,
		      settings: {
		        slidesToShow: 3,
		        slidesToScroll: 3
		      }
		    },
		    {
		      breakpoint: 768,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 2
		      }
		    },
		    {
		      breakpoint: 600,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    }
  		]
	});
// ----------------VERICAL SLIDER--------------------	
	$(".regular").slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: true
  	});
  	$(".quality-slider").slick({
        dots: true,
        fade: true,
        speed: 1000,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
  	});	
});
// ----------------LEARN MORE---------------
$(document).ready(function() {
	$('.slider-for').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		// arrows: false,
		fade: true,
		asNavFor: '.slider-nav'
	});
     $('.slider-nav').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		asNavFor: '.slider-for',
		dots: true,
		centerMode: false,
		focusOnSelect: true,
		 responsive: [
		    {
		      breakpoint: 768,
		      settings: {
		        slidesToShow: 3,
		        slidesToScroll: 1
		      }
		    },
  		]
	});    
    $('.modal').on('shown.bs.modal', function (e) {
    $('.slider-for').resize();
    $('.slider-nav').resize();      
    });
});
$(function() {
	var h_hght = $('.header__banner').outerHeight();
	var h_nav = $('.header__bottom').outerHeight();
	var top;
  	$(window).scroll(function(){
  		top = $(this).scrollTop();
  		if((h_hght-top) <= h_nav) {
        $('.header__bottom').addClass('fixed');
        $('.header__bottom li a').css("font-size", "14px");
  			$('.header__bottom .nav').css("margin", "15px 0");
  		} 
  		else {
  			$('.header__bottom').removeClass('fixed');
         $('.header__bottom li a').css("font-size", "19px");
        $('.header__bottom .nav').css("margin", "35px 0 30px 0");
  		}
  	});	
});
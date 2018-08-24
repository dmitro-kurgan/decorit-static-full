// $('#our_facts').scroll(function(){
// var currentNumber1 = $('.dynamic-number-1').text();
// 	$({numberValue: currentNumber1}).animate({numberValue: 46}, {
// 	    duration: 2000,
// 	    easing: 'linear',
// 	    step: function() { 
// 	        $('.dynamic-number-1').text(Math.ceil(this.numberValue)); 
// 	    }
// 	});
// });



// var currentNumber2 = $('.dynamic-number-2').text();

// $({numberValue: currentNumber2}).animate({numberValue: 935}, {
//     duration: 2000,
//     easing: 'linear',
//     step: function() { 
//         $('.dynamic-number-2').text(Math.ceil(this.numberValue)); 
//     }
// });

// var currentNumber3 = $('.dynamic-number-3').text();

// $({numberValue: currentNumber3}).animate({numberValue: 1789}, {
//     duration: 2000,
//     easing: 'linear',
//     step: function() { 
//         $('.dynamic-number-3').text(Math.ceil(this.numberValue)); 
//     }
// });

// if ($(window).scrollTop() > 60) {
//     $('.banner h2').hide();
//     $('.banner .info').show();
// } else {
//     $('.banner h2').show();
//     $('.banner .info').hide();                              
// }

// var number = document.querySelector('.dynamic-number-1'),
// 		numberTop = number.getBoundingClientRect().top,
//     start = 0, end = 46;

// window.addEventListener('scroll', function onScroll() {
// 		if(window.pageYOffset > numberTop - window.innerHeight / 0.90) {
//     		this.removeEventListener('scroll', onScroll);
//         var interval = setInterval(function() {
//         		number.innerHTML = ++start;
//             if(start == end) {
//             		clearInterval(interval);
//             }
//         }, 5);
//     }
// });



$(window).scroll(function(){
	var windowWidth = $(this).width();
	var windowHeight = $(this).height();
	var windowScrollTop = $(this).scrollTop();
	if(windowScrollTop>2000){
    var currentNumber1 = $('.dynamic-number-1').text();
	$({numberValue: currentNumber1}).animate({numberValue: 46}, {
	    duration: 2000,
	    easing: 'linear',
	    step: function() { 
	        $('.dynamic-number-1').text(Math.ceil(this.numberValue)); 
	    }
	});
	var currentNumber2 = $('.dynamic-number-2').text();
	$({numberValue: currentNumber2}).animate({numberValue: 935 }, {
	    duration: 2000,
	    easing: 'linear',
	    step: function() { 
	        $('.dynamic-number-2').text(Math.ceil(this.numberValue)); 
	    }
	});
	var currentNumber3 = $('.dynamic-number-3').text();
	$({numberValue: currentNumber3}).animate({numberValue: 1789}, {
	    duration: 2000,
	    easing: 'linear',
	    step: function() { 
	        $('.dynamic-number-3').text(Math.ceil(this.numberValue)); 
	    }
	});
  	}
});
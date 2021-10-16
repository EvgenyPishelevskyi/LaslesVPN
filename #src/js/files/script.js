/* Бургер */

$('.burger').on('click', () => {
   $('.burger').toggleClass('active');
   $('.mobile nav').toggleClass('open');
   $('.mobile__nav').toggleClass('show');
	$('body').toggleClass('_lock')
});


/* Бургер */


/* Фиксированная шапк*/


$(document).ready(function(){
	$(window).on("scroll",function(){
	  var wn = $(window).scrollTop();
		if(wn > 10){
		 $(".header__wrapper").css("background","#fcc3c1");
		}
		else{
		 $(".header__wrapper").css("background","inherit");
		}

      if(wn > 10){
         $(".header__wrapper").css("border","1px solid #F53838");
        }
        else{
         $(".header__wrapper").css("border","none");
        }
	 });
  });


 /* Фиксированная шапка */

 $(function(){
	$nav = $('.header__wrapper');
	$nav.css('width', $nav.outerWidth());
	$window = $(window);
	$h = $nav.offset().top;
	$window.scroll(function(){
		if ($window.scrollTop() > $h){
			$nav.addClass('fixed');
		} else {

			$nav.removeClass('fixed');
		}
	});
});

/* Фиксированная шапк*/






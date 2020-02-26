jQuery(document).ready(function($) {
    
   $('.header__slider').slick({
       arrows: true,
       asNavFor: '.header__text-slider',
   });

   $('.header__text-slider').slick({
       asNavFor: '.header__slider',
       arrows: false
   });

   $('.certificates__slider').slick({
       arrows: true,
       slidesToShow: 3,
       slidesToScroll: 1
   })

});


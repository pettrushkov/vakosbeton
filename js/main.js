jQuery(document).ready(function($) {
    
   $('.header__slider').slick({
       arrows: true,
       asNavFor: '.header__text-slider',
       fade: true,
       cssEase: 'linear'
   });

   $('.header__text-slider').slick({
       asNavFor: '.header__slider',
       arrows: false,
       fade: true,
       cssEase: 'linear'
   });

   $('.certificates__slider').slick({
       arrows: true,
       slidesToShow: 3,
       slidesToScroll: 1,
       responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
   });

   $('#menu-btn').click(function() {
       $('.header__menu').toggleClass('active');
       $(this).toggleClass('active');
   });

   $('.modal--close').click(function() {
        $('.modal--overlay').fadeOut();
   });

   $('.modal--overlay').click(function(e) {
        var clicked = $(e.target);
        if (clicked.is('.modal') || clicked.parents().is('.modal')) {
        // console.log('click on element');
        } else {
        // console.log('click on overlay');
        $('.modal--overlay').fadeOut();
        }
    });

    $('form').submit(function() {
        $.ajax({
            type: "POST",
            url: "send.php",
            data: $(this).serialize()
        }).done(function() {
            $('.modal--overlay').fadeIn();
            setTimeout(function() {
                $('form').trigger('reset');
                $('.modal--overlay').fadeOut();
            }, 3500);
        });
        return false;
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();
  
          document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth'
          });
      });
    });

    window.onscroll = function() {myFunction()};

  // Get the header
  var header = document.querySelector("header__menu");

  // Get the offset position of the navbar
  var sticky = header.offsetTop;

  // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
  function myFunction() {
    if (window.pageYOffset > sticky) {
      console.log('fixed');
    } else {
      console.log('not fixed');
    }
  }

});


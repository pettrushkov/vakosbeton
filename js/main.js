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

   $('.menu-btn').click(function() {
       $('.header__menu').toggleClass('active');
       $('.menu-btn').toggleClass('active');
       $('body').toggleClass('active');
       $('html').toggleClass('active');
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


    //sticky header menu
    window.onscroll = function() {isStickyMenu()};
    var headerMenu = document.getElementById("header__menu");
    var header = document.getElementById("header");
    var mobileHeaderMenu = document.getElementById("header__logo");

    // Get the offset position of the navbar
    var sticky = headerMenu.offsetTop;

  function isStickyMenu() {
    if ($(window).width() >= 768) {
      if (window.pageYOffset > sticky) {
        headerMenu.classList.add('sticky');
        header.classList.add('menu-sticky');
      } else {
        headerMenu.classList.remove('sticky');
        header.classList.remove('menu-sticky');
      }
    } else {if (window.pageYOffset > sticky) {
      mobileHeaderMenu.classList.add('sticky');
      header.classList.add('menu-sticky');
    } else {
      mobileHeaderMenu.classList.remove('sticky');
      header.classList.remove('menu-sticky');
    }
    }
  }

  $('.header__menu a').click(function() {
    if ($(window).width() < 768) {
      $('.header__menu').removeClass('active');
      $('body').removeClass('active');
      $('html').removeClass('active');
      $('.menu-btn').removeClass('active');
    }
  })

  $('.phone-mask').mask('+38 (000) 000-00-00');
  $('.phone-mask').click(function() {
    if($(this).val() == '') {
        $(this).val('+38 (')
    }
  });

  new WOW().init();

});


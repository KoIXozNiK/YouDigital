;(function ($, window, document, undefined) {
  'use strict';

  /***********************/
  /* FULL HEIGHT SECTION */
  /***********************/

  function fullHeightSection() {
    let menuH = $('.menu').outerHeight() || 0,
        windowH = $(window).outerHeight();


    $('.full-height-window').css('min-height', (windowH - menuH) + 'px');

    $('.full-height-window-hard').css('height', (windowH - menuH) + 'px');
  }


  /***************/
  /* MOBILE MENU */
  /***************/

  function mobileMenu() {
    if($(window).width() < 1025){
      let mobMenuW = $('.menu__right').outerWidth() || 0;
      $('.menu__right').css('transform', 'translateX('+ mobMenuW +'px)');

      $('.menu__hamburger i').on('click', function () {
        $('.menu__right').css('transform', 'translateX('+0+')').toggleClass('active')
      })

      $('.menu__close').on('click', function () {
        $('.menu__right').css('transform', 'translateX('+ mobMenuW +'px)').toggleClass('active');
      })
    }
  }


  /***************/
  /* LANGUAGE */
  /***************/

  function changeLanguage(){
    if($('.menu__language-wrap').length){
      $('.menu__language-item').on('click', function () {
        $('.menu__language-item').removeClass('active');
        $(this).addClass('active')
      })
    }
  }

  /************/
  /* LANGUAGE */
  /************/
  function goBot() {
    if($('.go_to').length) {
      $('.go_to').on("click", function () {
        let bannerHeight = $('.to').offset();
        $('html, body').animate({
          'scrollTop': bannerHeight.top - 30
        }, 1100);
      });
    }
  }

  /**********************************/
  /* FUNCTION INITIALIZATION */
  /**********************************/
  $(window).on('load', function () {
    fullHeightSection(),
    mobileMenu()
    changeLanguage()
    goBot()
  });

  $(window).on('load resize', function () {
    fullHeightSection()
  });

  $(window).on('resize', function () {
    mobileMenu()
    goBot()
  });

  $(window).on('scroll', function () {

  });

  window.addEventListener("orientationchange", function () {

  });

})(jQuery, window, document);
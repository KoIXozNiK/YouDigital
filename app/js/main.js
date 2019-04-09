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
  /* MOBILE MENU */
  /***************/

  function changeLanguage(){
    if($('.menu__language-wrap').length){
      $('.menu__language-item').on('click', function () {
        $('.menu__language-item').removeClass('active');
        $(this).addClass('active')
      })
    }
  }

  /**********************************/
  /* FUNCTION INITIALIZATION */
  /**********************************/
  $(window).on('load', function () {
    fullHeightSection(),
    mobileMenu()
    changeLanguage()
  });

  $(window).on('load resize', function () {
    fullHeightSection()
  });

  $(window).on('resize', function () {
    mobileMenu()
  });

  $(window).on('scroll', function () {

  });

  window.addEventListener("orientationchange", function () {

  });

})(jQuery, window, document);
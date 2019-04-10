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

  /***************/
  /* INIT SLICK */
  /***************/
    $('.slider-for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      fade: true,
      asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      asNavFor: '.slider-for',
      arrows: true,
      centerMode: true,

      focusOnSelect: true
    });

    if($(window).width() > 991) {
      $(".info__slider-right").css('width', $(window).width() / 2)
    }


  /***************************/
  /* PAGINATION NUMBER SLICK */
  /***************************/

  function paginationNumber() {
    let $slickElement = $('.slider-for'),
        $current = $('.pagingInfo__current'),
        $count = $('.pagingInfo__count');

    $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
      let i = (currentSlide ? currentSlide : 0) + 1;
      $current.text(i);
      $count.text(' /' + slick.slideCount)
    });

  }
  /**********************************/
  /* FUNCTION INITIALIZATION */
  /**********************************/
  $(window).on('load', function () {
    fullHeightSection(),
    mobileMenu(),
    changeLanguage(),
    goBot(),
        paginationNumber()
  });

  $(window).on('load resize', function () {
    fullHeightSection()
  });

  $(window).on('resize', function () {
    mobileMenu(),
    paginationNumber(),
    goBot()
  });

  $(window).on('scroll', function () {

  });

  window.addEventListener("orientationchange", function () {

  });

})(jQuery, window, document);
;(function ($, window, document, undefined) {
  'use strict';
  new WOW().init();
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


  /************/
  /* LANGUAGE */
  /************/

  function changeLanguage(){
    if($('.menu__language-wrap').length){
      $('.menu__language-item').on('click', function () {
        $('.menu__language-item').removeClass('active');
        $(this).addClass('active')
      })
    }
  }

  /**********/
  /* GO BOT */
  /**********/
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


  /**********************/
  /* HEIGHT AVA CONTACT */
  /**********************/

  function heightAva() {
    if($('.contacts__ava').length && $(window).width() < 992 && $(window).width() > 550) {
      let heightBox = $('.contacts__right').outerHeight();
      $('.contacts__ava').css('height', heightBox - 103)
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
      $(".full_width").css('width', $(window).width() / 2)
    }


  /************/
  /* INIT MAP */
  /************/
  function initMap() {
    let pos = {lat: 50.466630, lng: 30.513338};
    let set = {
        center: pos,
        zoom: 16,
      disableDefaultUI: true
      };

    let map = new google.maps.Map(document.getElementById('map'), set);
    let marker = new google.maps.Marker({
      position: pos,
      map: map
    })
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

  /**************/
  /* OPEN POPUP */
  /**************/
  function openPopUp() {
    $('.open-popup').on('click', function (e) {
      e.preventDefault()

      $('.popup__form').css({
        'opacity': 1,
        'pointer-events': 'visible'
      })

      $('.overlay').css({
        'opacity': 0.722,
        'pointer-events': 'visible'
      })

      $('html').css('overflow', 'hidden')
    })

    $('.overlay, .popup__form-close').on('click', function (e) {
      e.preventDefault()

      $('.popup__form, .overlay, .popup__ok').css({
        'opacity': 0,
        'pointer-events': 'none'
      })

      $('html').css('overflow', 'visible')
    })

    // clear form
    $(".custom__form").on("submit", function(e){
      e.preventDefault();

      $('.popup__form').css({
        'opacity': 0,
        'pointer-events': 'none'
      })

      $('.overlay').css({
        'opacity': 0.722,
        'pointer-events': 'visible'
      })

      $(".custom__form").trigger("reset");

      $('.popup__ok').css({
        'opacity': 1,
        'pointer-events': 'visible'
      })

    })
  }



  /***************/
  /* SCROLL MENU */
  /***************/
  function scrollMenu() {
    $(".menu__items-wrap").on("click", "a", function (event) {
      event.preventDefault();


      var index_el = $(this).closest('.menu__item').index();
      $(this).closest('.body').find(".header .menu__item").removeClass('active').eq(index_el).addClass('active');
      $(this).closest('.body').find(".footer .menu__item").removeClass('active').eq(index_el).addClass('active');

      var id = $(this).attr('href'),
          top = $(id).offset().top - 30;
      $('body,html').animate({scrollTop: top}, 800);
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
    paginationNumber(),
    heightAva(),
    initMap(),
    scrollMenu(),
    openPopUp()
  });

  $(window).on('load resize', function () {
    fullHeightSection()
  });

  $(window).on('resize', function () {
    mobileMenu(),
    paginationNumber(),
    goBot(),
    heightAva()
  });

})(jQuery, window, document);
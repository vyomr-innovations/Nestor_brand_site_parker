// Custom Scripts for Parker Template //

jQuery(function($) {
    "use strict";

        // get the value of the bottom of the #main element by adding the offset of that element plus its height, set it as a variable
        var mainbottom = $('#main').offset().top;

        // on scroll,
        $(window).on('scroll',function(){

        // we round here to reduce a little workload
        stop = Math.round($(window).scrollTop());
        if (stop > mainbottom) {
            $('.navbar').addClass('past-main2');
            $('.navbar').addClass('effect-main')
        } else {
            $('.navbar').removeClass('past-main2');
       }

      });


  // Collapse navbar on click

   $(document).on('click.nav','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') ) {
    $(this).removeClass('in').addClass('collapse');
   }
  });


    /*-----------------------------------
    ----------- Scroll To Top -----------
    ------------------------------------*/

    $(window).scroll(function () {
      if ($(this).scrollTop() > 800) {
          $('#back-top').fadeIn();
      } else {
          $('#back-top').fadeOut();
      }
    });
    // scroll body to 0px on click
    $('#back-top').on('click', function () {
      $('#back-top').tooltip('hide');
      $('body,html').animate({
          scrollTop: 0
      }, 1500);
      return false;
    });


    /*-------- Owl Carousel ---------- */

      $(".review-cards").owlCarousel({
        slideSpeed: 200,
        items: 1,
        singleItem: true,
        autoplay:true,
       autoplayTimeout:2000,
       autoplayHoverPause:true,
       pagination: false,
      });


    /* ------ Clients Section Owl Carousel ----- */

      $(".clients").owlCarousel({
      slideSpeed : 200,
      autoPlay : true,
      pagination : false,
      dots : false,
      responsiveClass:true,
      responsive:{
       0:{
           items:2,
       },
       320: {
          items:3,
       },
       600:{
           items:4,
           nav:false
       },
       1000:{
           items:5,
           loop:false
       }
     }
    });


  /* ------ jQuery for Easing min -- */

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: (target.offset().top - 54)
          }, 1000, "easeInOutExpo");
          return false;
        }
      }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function() {
      $('.navbar-collapse').collapse('hide');
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
      target: '#mainNav',
      offset: 54
    });

/* --------- Wow Init ------ */

  new WOW().init();


/* ----- Counter Up ----- */

$('.counter').counterUp({
		delay: 10,
		time: 1000
});

/*----- Preloader ----- */

  $(window).load(function() {
		setTimeout(function() {
      $('#loading').fadeOut('slow', function() {
      });
    }, 1000);
  });


/*----- Subscription Form ----- */

$(document).ready(function() {
     // jQuery Validation
     $("#chimp-form").validate({
         // if valid, post data via AJAX
         submitHandler: function(form) {
             $.post("assets/php/subscribe.php", { email: $("#chimp-email").val() }, function(data) {
                 $('#response').html(data);
             });
         },
         // all fields are required
         rules: {
             email: {
                 required: true,
                 email: true
             }
         }
     });
 });

/*-------- Magnific Popup button ---- */


  $('.popup').magnificPopup({
    disableOn: 0,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false
  });


});
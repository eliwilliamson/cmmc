/*===================================================================================*/
/*  HEADER SHRINK
/*===================================================================================*/

$(document).ready(function() {

  var s = skrollr;
  var sActive = false;

  if ($(window).width() > 1024) {
    s.init({
      mobileCheck: function() {
        return false;
      }
    });
    sActive = true;
  }

  $(window).on('resize', function() {
    if ($(window).width() < 1024 && sActive) {
      s.init().destroy();
      sActive = false;
    }
    else if ($(window).width() > 1024) {
      s.init({
        mobileCheck: function() {
          return false;
        }
      });
      sActive = true;
    }
  });

});


/*===================================================================================*/
/*  STICKY NAVIGATION
/*===================================================================================*/

$(document).ready(function() {
  $('.navbar .navbar-collapse').waypoint('sticky');
});


/*===================================================================================*/
/*  OWL CAROUSEL
/*===================================================================================*/

$(document).ready(function () {

  var dragging = true;
  var owlElementID = "#owl-main";

  function fadeInReset() {
    if (!dragging) {
      $(owlElementID + " .caption .fadeIn-1, " + owlElementID + " .caption .fadeIn-2, " + owlElementID + " .caption .fadeIn-3").stop().delay(800).animate({ opacity: 0 }, { duration: 400, easing: "easeInCubic" });
    }
    else {
      $(owlElementID + " .caption .fadeIn-1, " + owlElementID + " .caption .fadeIn-2, " + owlElementID + " .caption .fadeIn-3").css({ opacity: 0 });
    }
  }

  function fadeInDownReset() {
    if (!dragging) {
      $(owlElementID + " .caption .fadeInDown-1, " + owlElementID + " .caption .fadeInDown-2, " + owlElementID + " .caption .fadeInDown-3").stop().delay(800).animate({ opacity: 0, top: "-15px" }, { duration: 400, easing: "easeInCubic" });
    }
    else {
      $(owlElementID + " .caption .fadeInDown-1, " + owlElementID + " .caption .fadeInDown-2, " + owlElementID + " .caption .fadeInDown-3").css({ opacity: 0, top: "-15px" });
    }
  }

  function fadeInUpReset() {
    if (!dragging) {
      $(owlElementID + " .caption .fadeInUp-1, " + owlElementID + " .caption .fadeInUp-2, " + owlElementID + " .caption .fadeInUp-3").stop().delay(800).animate({ opacity: 0, top: "15px" }, { duration: 400, easing: "easeInCubic" });
    }
    else {
      $(owlElementID + " .caption .fadeInUp-1, " + owlElementID + " .caption .fadeInUp-2, " + owlElementID + " .caption .fadeInUp-3").css({ opacity: 0, top: "15px" });
    }
  }

  function fadeInLeftReset() {
    if (!dragging) {
      $(owlElementID + " .caption .fadeInLeft-1, " + owlElementID + " .caption .fadeInLeft-2, " + owlElementID + " .caption .fadeInLeft-3").stop().delay(800).animate({ opacity: 0, left: "15px" }, { duration: 400, easing: "easeInCubic" });
    }
    else {
      $(owlElementID + " .caption .fadeInLeft-1, " + owlElementID + " .caption .fadeInLeft-2, " + owlElementID + " .caption .fadeInLeft-3").css({ opacity: 0, left: "15px" });
    }
  }

  function fadeInRightReset() {
    if (!dragging) {
      $(owlElementID + " .caption .fadeInRight-1, " + owlElementID + " .caption .fadeInRight-2, " + owlElementID + " .caption .fadeInRight-3").stop().delay(800).animate({ opacity: 0, left: "-15px" }, { duration: 400, easing: "easeInCubic" });
    }
    else {
      $(owlElementID + " .caption .fadeInRight-1, " + owlElementID + " .caption .fadeInRight-2, " + owlElementID + " .caption .fadeInRight-3").css({ opacity: 0, left: "-15px" });
    }
  }

  function fadeIn() {
    $(owlElementID + " .active .caption .fadeIn-1").stop().delay(500).animate({ opacity: 1 }, { duration: 800, easing: "easeOutCubic" });
    $(owlElementID + " .active .caption .fadeIn-2").stop().delay(700).animate({ opacity: 1 }, { duration: 800, easing: "easeOutCubic" });
    $(owlElementID + " .active .caption .fadeIn-3").stop().delay(1000).animate({ opacity: 1 }, { duration: 800, easing: "easeOutCubic" });
  }

  function fadeInDown() {
    $(owlElementID + " .active .caption .fadeInDown-1").stop().delay(500).animate({ opacity: 1, top: "0" }, { duration: 800, easing: "easeOutCubic" });
    $(owlElementID + " .active .caption .fadeInDown-2").stop().delay(700).animate({ opacity: 1, top: "0" }, { duration: 800, easing: "easeOutCubic" });
    $(owlElementID + " .active .caption .fadeInDown-3").stop().delay(1000).animate({ opacity: 1, top: "0" }, { duration: 800, easing: "easeOutCubic" });
  }

  function fadeInUp() {
    $(owlElementID + " .active .caption .fadeInUp-1").stop().delay(500).animate({ opacity: 1, top: "0" }, { duration: 800, easing: "easeOutCubic" });
    $(owlElementID + " .active .caption .fadeInUp-2").stop().delay(700).animate({ opacity: 1, top: "0" }, { duration: 800, easing: "easeOutCubic" });
    $(owlElementID + " .active .caption .fadeInUp-3").stop().delay(1000).animate({ opacity: 1, top: "0" }, { duration: 800, easing: "easeOutCubic" });
  }

  function fadeInLeft() {
    $(owlElementID + " .active .caption .fadeInLeft-1").stop().delay(500).animate({ opacity: 1, left: "0" }, { duration: 800, easing: "easeOutCubic" });
    $(owlElementID + " .active .caption .fadeInLeft-2").stop().delay(700).animate({ opacity: 1, left: "0" }, { duration: 800, easing: "easeOutCubic" });
    $(owlElementID + " .active .caption .fadeInLeft-3").stop().delay(1000).animate({ opacity: 1, left: "0" }, { duration: 800, easing: "easeOutCubic" });
  }

  function fadeInRight() {
    $(owlElementID + " .active .caption .fadeInRight-1").stop().delay(500).animate({ opacity: 1, left: "0" }, { duration: 800, easing: "easeOutCubic" });
    $(owlElementID + " .active .caption .fadeInRight-2").stop().delay(700).animate({ opacity: 1, left: "0" }, { duration: 800, easing: "easeOutCubic" });
    $(owlElementID + " .active .caption .fadeInRight-3").stop().delay(1000).animate({ opacity: 1, left: "0" }, { duration: 800, easing: "easeOutCubic" });
  }

  $(owlElementID).owlCarousel({

    autoPlay: 5000,
    stopOnHover: true,
        navigation: true,
    pagination: true,
    singleItem: true,
    addClassActive: true,
        transitionStyle: "backSlide",
        navigationText: ["<i class='icon-left-open-mini'></i>", "<i class='icon-right-open-mini'></i>"],

      afterInit: function() {
          fadeIn();
          fadeInDown();
          fadeInUp();
          fadeInLeft();
          fadeInRight();
      },

      afterMove: function() {
          fadeIn();
      fadeInDown();
          fadeInUp();
          fadeInLeft();
          fadeInRight();
      },

      afterUpdate: function() {
          fadeIn();
      fadeInDown();
          fadeInUp();
          fadeInLeft();
          fadeInRight();
      },

      startDragging: function() {
      dragging = true;
      },

      afterAction: function() {
          fadeInReset();
      fadeInDownReset();
      fadeInUpReset();
          fadeInLeftReset();
          fadeInRightReset();
      dragging = false;
      }

    });

  if ($(owlElementID).hasClass("owl-one-item")) {
    $(owlElementID + ".owl-one-item").data('owlCarousel').destroy();
  }

  $(owlElementID + ".owl-one-item").owlCarousel({
    singleItem: true,
    navigation: false,
    pagination: false
  });

  $('#transitionType li a').click(function () {

    $('#transitionType li a').removeClass('active');
    $(this).addClass('active');

    var newValue = $(this).attr('data-transition-type');

    $(owlElementID).data("owlCarousel").transitionTypes(newValue);
    $(owlElementID).trigger("owl.next");

    return false;

  });

  $("#owl-testimonials").owlCarousel({
    autoPlay: 5000,
    stopOnHover: true,
    navigation: true,
    pagination: true,
    singleItem: true,
    addClassActive: true,
    autoHeight: true,
    transitionStyle: "fadeInAfterOut",
    navigationText: ["<i class='icon-left-open-mini'></i>", "<i class='icon-right-open-mini'></i>"]
  });

  $("#owl-projects").owlCarousel({
    navigation: false,
    autoHeight: true,
    slideSpeed: 300,
    paginationSpeed: 400,
    rewindNav: false,
    singleItem: true,
    navigationText: ["<i class='icon-left-open-mini'></i>", "<i class='icon-right-open-mini'></i>"]
  });

  $("#owl-latest-works").owlCarousel({
    autoPlay: 5000,
    stopOnHover: true,
    navigation: true,
    pagination: true,
    rewindNav: true,
    items: 4,
    navigationText: ["<i class='icon-left-open-mini'></i>", "<i class='icon-right-open-mini'></i>"]
  });

  $("#owl-videos").owlCarousel({
    autoPlay: 5000,
    stopOnHover: true,
    navigation: true,
    pagination: true,
    rewindNav: true,
    items: 5,
    navigationText: ["<i class='icon-left-open-mini'></i>", "<i class='icon-right-open-mini'></i>"]
  });

  $("#owl-audio").owlCarousel({
    autoPlay: 5000,
    stopOnHover: true,
    navigation: true,
    pagination: true,
    rewindNav: true,
    items: 5,
    navigationText: ["<i class='icon-left-open-mini'></i>", "<i class='icon-right-open-mini'></i>"]
  });

  $("#owl-popular-posts").owlCarousel({
    autoPlay: 5000,
    stopOnHover: true,
    navigation: true,
    pagination: true,
    rewindNav: true,
    items: 5,
    navigationText: ["<i class='icon-left-open-mini'></i>", "<i class='icon-right-open-mini'></i>"]
  });

  $("#owl-related-posts").owlCarousel({
    autoPlay: 5000,
    stopOnHover: true,
    navigation: true,
    pagination: true,
    rewindNav: true,
    items: 2,
    itemsDesktopSmall: [1199, 2],
    itemsTablet: [977, 2],
    navigationText: ["<i class='icon-left-open-mini'></i>", "<i class='icon-right-open-mini'></i>"]
  });

  $("#owl-featured-works").owlCarousel({
    autoPlay: 5000,
    stopOnHover: true,
    navigation: true,
    pagination: true,
    rewindNav: true,
    singleItem: true,
    transitionStyle: "goDown",
    navigationText: ["<i class='icon-left-open-mini'></i>", "<i class='icon-right-open-mini'></i>"]
  });

  $("#owl-work-samples").owlCarousel({
    autoPlay: 5000,
    stopOnHover: true,
    navigation: true,
    pagination: true,
    rewindNav: true,
    items: 3,
    itemsDesktopSmall: [1199, 3],
    itemsTablet: [977, 2],
    navigationText: ["<i class='icon-left-open-mini'></i>", "<i class='icon-right-open-mini'></i>"]
  });

  $("#owl-work-samples-big").owlCarousel({
    autoPlay: 5000,
    stopOnHover: true,
    navigation: true,
    pagination: true,
    rewindNav: true,
    singleItem: true,
    transitionStyle: "fadeUp",
    navigationText: ["<i class='icon-left-open-mini'></i>", "<i class='icon-right-open-mini'></i>"]
  });

  $("#owl-work").owlCarousel({
    autoPlay: 5000,
    slideSpeed: 200,
    paginationSpeed: 600,
    rewindSpeed: 800,
    stopOnHover: true,
    navigation: true,
    pagination: true,
    rewindNav: true,
    singleItem: true,
    autoHeight: true,
    navigationText: ["<i class='icon-left-open-mini'></i>", "<i class='icon-right-open-mini'></i>"]
  });

  $("#owl-office").owlCarousel({
    autoPlay: 5000,
    slideSpeed: 200,
    paginationSpeed: 600,
    rewindSpeed: 800,
    stopOnHover: true,
    navigation: true,
    pagination: true,
    rewindNav: true,
    singleItem: true,
    autoHeight: true,
    transitionStyle: "fade",
    navigationText: ["<i class='icon-left-open-mini'></i>", "<i class='icon-right-open-mini'></i>"]
  });

  $("#owl-clients").owlCarousel({
    autoPlay: 5000,
    stopOnHover: true,
    rewindNav: true,
    items: 4,
    itemsDesktopSmall: [1199, 4],
    itemsTablet: [977, 3],
    navigation: true,
    pagination: true,
    navigationText: ["<i class='icon-left-open-mini'></i>", "<i class='icon-right-open-mini'></i>"]
  });

  $(".slider-next").click(function () {
    owl.trigger('owl.next');
  })

  $(".slider-prev").click(function () {
    owl.trigger('owl.prev');
  })

});


/*===================================================================================*/
/*  ISOTOPE PORTFOLIO
/*===================================================================================*/

$(document).ready(function () {

  var $container = $('.items');

  $container.imagesLoaded(function () {
    $container.isotope({
      itemSelector: '.item'
    });
  });

  var resizeTimer;

  function resizeFunction() {
    $container.isotope('reLayout');
  }

  $(window).resize(function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(resizeFunction, 100);
  });

  $('.portfolio .filter li a').click(function () {

    $('.portfolio .filter li a').removeClass('active');
    $(this).addClass('active');

    var selector = $(this).attr('data-filter');

    $container.isotope({
      filter: selector
    });

    return false;

  });

});


/*===================================================================================*/
/*  ACCORDION (FOR ISOTOPE HEIGHT CALCULATION)
/*===================================================================================*/

$(document).ready(function () {
  if ($('.panel-group .portfolio').length > 0) {
    $('.panel-group .collapse.in').collapse({
      toggle: true
    });
  }

  $('#more-products').on('click', function () {
    setTimeout(function() {
      $('.items').isotope();
    }, 100);
  });
});


/*===================================================================================*/
/*  GO TO TOP / SCROLL UP
/*===================================================================================*/

! function (a, b, c) {
  a.fn.scrollUp = function (b) {
    a.data(c.body, "scrollUp") || (a.data(c.body, "scrollUp", !0), a.fn.scrollUp.init(b))
  }, a.fn.scrollUp.init = function (d) {
    var e = a.fn.scrollUp.settings = a.extend({}, a.fn.scrollUp.defaults, d),
      f = e.scrollTitle ? e.scrollTitle : e.scrollText,
      g = a("<a/>", {
        id: e.scrollName,
        href: "#top"/*,
        title: f*/
      }).appendTo("body");
    e.scrollImg || g.html(e.scrollText), g.css({
      display: "none",
      position: "fixed",
      zIndex: e.zIndex
    }), e.activeOverlay && a("<div/>", {
      id: e.scrollName + "-active"
    }).css({
      position: "absolute",
      top: e.scrollDistance + "px",
      width: "100%",
      borderTop: "1px dotted" + e.activeOverlay,
      zIndex: e.zIndex
    }).appendTo("body"), scrollEvent = a(b).scroll(function () {
      switch (scrollDis = "top" === e.scrollFrom ? e.scrollDistance : a(c).height() - a(b).height() - e.scrollDistance, e.animation) {
      case "fade":
        a(a(b).scrollTop() > scrollDis ? g.fadeIn(e.animationInSpeed) : g.fadeOut(e.animationOutSpeed));
        break;
      case "slide":
        a(a(b).scrollTop() > scrollDis ? g.slideDown(e.animationInSpeed) : g.slideUp(e.animationOutSpeed));
        break;
      default:
        a(a(b).scrollTop() > scrollDis ? g.show(0) : g.hide(0))
      }
    }), g.click(function (b) {
      b.preventDefault(), a("html, body").animate({
        scrollTop: 0
      }, e.scrollSpeed, e.easingType)
    })
  }, a.fn.scrollUp.defaults = {
    scrollName: "scrollUp",
    scrollDistance: 300,
    scrollFrom: "top",
    scrollSpeed: 300,
    easingType: "linear",
    animation: "fade",
    animationInSpeed: 200,
    animationOutSpeed: 200,
    scrollText: "Scroll to top",
    scrollTitle: !1,
    scrollImg: !1,
    activeOverlay: !1,
    zIndex: 2147483647
  }, a.fn.scrollUp.destroy = function (d) {
    a.removeData(c.body, "scrollUp"), a("#" + a.fn.scrollUp.settings.scrollName).remove(), a("#" + a.fn.scrollUp.settings.scrollName + "-active").remove(), a.fn.jquery.split(".")[1] >= 7 ? a(b).off("scroll", d) : a(b).unbind("scroll", d)
  }, a.scrollUp = a.fn.scrollUp
}(jQuery, window, document);

$(function () {
  $.scrollUp({
    scrollName: "scrollUp", // Element ID
    scrollDistance: 300, // Distance from top/bottom before showing element (px)
    scrollFrom: "top", // "top" or "bottom"
    scrollSpeed: 1000, // Speed back to top (ms)
    easingType: "easeInOutCubic", // Scroll to top easing (see http://easings.net/)
    animation: "fade", // Fade, slide, none
    animationInSpeed: 200, // Animation in speed (ms)
    animationOutSpeed: 200, // Animation out speed (ms)
    scrollText: "<i class='icon-up-open-mini'></i>", // Text for element, can contain HTML
    scrollTitle: " ", // Set a custom <a> title if required. Defaults to scrollText
    scrollImg: 0, // Set true to use image
    activeOverlay: 0, // Set CSS color to display scrollUp active point, e.g "#00FFFF"
    zIndex: 1001 // Z-Index for the overlay
  });
});


/*===================================================================================*/
/*  ANIMATED / SMOOTH SCROLL TO ANCHOR
/*===================================================================================*/

$(document).ready(function() {

  $("a.scrollTo").click(function() {
    $("html, body").animate({
      scrollTop: $($(this).attr("href")).offset().top + "px"
    }, {
      duration: 1000,
      easing: "easeInOutCubic"
    });
    return false;
  });

});


/*===================================================================================*/
/*  IMAGE HOVER
/*===================================================================================*/

$(document).ready(function () {
  $('.icon-overlay a').prepend('<span class="icn-more"></span>');
});


/*===================================================================================*/
/*  GOOGLE MAPS SUPPLIERS
/*===================================================================================*/

$(document).ready(function () {
  if ($('body').hasClass('suppliers')) {
    var locations = [
      ['Bookcliff Sales, Inc', 39.598486, -110.812576, 1],
      ['Bookcliff Sales, Inc', 41.57222, -109.270449, 2],
      ['Champion Mine Supply, Inc', 40.023773, -79.352234, 3],
      ['Cincinnati Mine AU', -27.328516, 152.92387, 4],
      ['Cincinnati Mine WV', 37.967802, -82.0185913, 5],
      ['Cincinnati Mine SA (Cincinnati Chain and Supply)', -25.9054739, 29.2304855, 6],
      ['Sumiton Mine Supply', 33.7315537, -87.0396025, 7],
      ['Woodruff Supply Co.', 37.33329, -87.5093969, 8],
      ['Woodruff Supply Co.', 38.00915730000001, -88.91738199999999, 9],
      ['Parts Service and Supply', 28.5232921, -100.3113873, 10],
      ['Apex Machine Works, LTD', 46.0901064, -64.8067903, 11],
      ['Bit Service Co. LTD.', 52.16460499999999, -106.6563648, 12],
      ['Bit Service Co. LTD.', 50.6495932, -102.0776302, 13]
    ];

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 5,
      center: new google.maps.LatLng(36, -97.5093944),
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      disableDefaultUI: true,
      scrollwheel: false,
      styles: [
      {
          "featureType": "all",
          "elementType": "all",
          "stylers": [
              {
                  "visibility": "simplified"
              },
              {
                  "saturation": "-44"
              },
              {
                  "gamma": "10.00"
              }
          ]
      },
      {
          "featureType": "all",
          "elementType": "geometry",
          "stylers": [
              {
                  "color": "#117156"
              }
          ]
      },
      {
          "featureType": "all",
          "elementType": "geometry.fill",
          "stylers": [
              {
                  "lightness": "-19"
              },
              {
                  "gamma": "2.14"
              },
              {
                  "saturation": "-41"
              }
          ]
      },
      {
          "featureType": "all",
          "elementType": "labels.text.fill",
          "stylers": [
              {
                  "gamma": 0.01
              },
              {
                  "lightness": 20
              }
          ]
      },
      {
          "featureType": "all",
          "elementType": "labels.text.stroke",
          "stylers": [
              {
                  "saturation": -31
              },
              {
                  "lightness": -33
              },
              {
                  "weight": 2
              },
              {
                  "gamma": 0.8
              }
          ]
      },
      {
          "featureType": "all",
          "elementType": "labels.icon",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "landscape",
          "elementType": "geometry",
          "stylers": [
              {
                  "lightness": 30
              },
              {
                  "saturation": 30
              }
          ]
      },
      {
          "featureType": "poi",
          "elementType": "geometry",
          "stylers": [
              {
                  "saturation": 20
              }
          ]
      },
      {
          "featureType": "poi.park",
          "elementType": "geometry",
          "stylers": [
              {
                  "lightness": 20
              },
              {
                  "saturation": -20
              }
          ]
      },
      {
          "featureType": "road",
          "elementType": "geometry",
          "stylers": [
              {
                  "lightness": 10
              },
              {
                  "saturation": -30
              }
          ]
      },
      {
          "featureType": "road",
          "elementType": "geometry.stroke",
          "stylers": [
              {
                  "saturation": 25
              },
              {
                  "lightness": 25
              }
          ]
      },
      {
          "featureType": "water",
          "elementType": "all",
          "stylers": [
              {
                  "lightness": -20
              }
          ]
      }
  ]
    });

    var infowindow = new google.maps.InfoWindow();

    var marker, i;

    for (i = 0; i < locations.length; i++) {
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map,
        icon: '/images/pin.png'
      });

      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(locations[i][0]);
          infowindow.open(map, marker);
        }
      })(marker, i));
    }
  }
});


/*===================================================================================*/
/*  GOOGLE MAPS CONTACT
/*===================================================================================*/

$(document).ready(function () {
  if ($('body').hasClass('contact')) {
    var locations = [
      ['Cincinnati Mine Machinery Co.', 39.214526, -84.582801, 1]
    ];

    var map = new google.maps.Map(document.getElementById('map-contact'), {
      zoom: 10,
      center: new google.maps.LatLng(39.27, -84.582801),
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      disableDefaultUI: true,
      scrollwheel: false,
      styles: [
      {
          "featureType": "all",
          "elementType": "all",
          "stylers": [
              {
                  "visibility": "simplified"
              },
              {
                  "saturation": "-44"
              },
              {
                  "gamma": "10.00"
              }
          ]
      },
      {
          "featureType": "all",
          "elementType": "geometry",
          "stylers": [
              {
                  "color": "#117156"
              }
          ]
      },
      {
          "featureType": "all",
          "elementType": "geometry.fill",
          "stylers": [
              {
                  "lightness": "-19"
              },
              {
                  "gamma": "2.14"
              },
              {
                  "saturation": "-41"
              }
          ]
      },
      {
          "featureType": "all",
          "elementType": "labels.text.fill",
          "stylers": [
              {
                  "gamma": 0.01
              },
              {
                  "lightness": 20
              }
          ]
      },
      {
          "featureType": "all",
          "elementType": "labels.text.stroke",
          "stylers": [
              {
                  "saturation": -31
              },
              {
                  "lightness": -33
              },
              {
                  "weight": 2
              },
              {
                  "gamma": 0.8
              }
          ]
      },
      {
          "featureType": "all",
          "elementType": "labels.icon",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "landscape",
          "elementType": "geometry",
          "stylers": [
              {
                  "lightness": 30
              },
              {
                  "saturation": 30
              }
          ]
      },
      {
          "featureType": "poi",
          "elementType": "geometry",
          "stylers": [
              {
                  "saturation": 20
              }
          ]
      },
      {
          "featureType": "poi.park",
          "elementType": "geometry",
          "stylers": [
              {
                  "lightness": 20
              },
              {
                  "saturation": -20
              }
          ]
      },
      {
          "featureType": "road",
          "elementType": "geometry",
          "stylers": [
              {
                  "lightness": 10
              },
              {
                  "saturation": -30
              }
          ]
      },
      {
          "featureType": "road",
          "elementType": "geometry.stroke",
          "stylers": [
              {
                  "saturation": 25
              },
              {
                  "lightness": 25
              }
          ]
      },
      {
          "featureType": "water",
          "elementType": "all",
          "stylers": [
              {
                  "lightness": -20
              }
          ]
      }
  ]
    });

    var infowindow = new google.maps.InfoWindow();

    var marker, i;

    for (i = 0; i < locations.length; i++) {
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map,
        icon: '/images/pin.png'
      });
    }
  }
});

/*===================================================================================*/
/*  CONVERTING iOS SAFARI VIEWPORT UNITS (BUGGY) INTO PIXELS
/*===================================================================================*/

$(document).ready(function () {
  window.viewportUnitsBuggyfill.init();
});


/*===================================================================================*/
/*  FORM VALIDATION
/*===================================================================================*/

$(document).ready(function() {

  $('#contactform, #commentform').validate({

    errorPlacement: function(error, element) {
      $(element).attr({
        'placeholder' : error.html()
      });
    },

    focusInvalid: false,

    rules: {
      name: {
        required: true,
        minlength: 2
      },
      email: {
        required: true,
        email: true
      },
      message: {
        required: true,
        minlength: 10
      }
    },

    messages: {
      name: {
        required: 'Please enter your name!',
        minlength: jQuery.format('Name requires at least {0} characters!')
      },
      email: {
        required: 'Please enter your email!',
        email: 'Please enter a valid email!'
      },
      message: {
        required: 'Please enter a message!',
        minlength: jQuery.format('Message requires at least {0} characters!')
      }
    },

    submitHandler: function(form) {
      $('#contactform .btn-submit').html('Sending message ...');
      $('#commentform .btn-submit').html('Sending comment ...');
      $(form).ajaxSubmit({
        success: function(responseText, statusText, xhr, $form) {
          $(form).delay(1300).slideUp('fast');
          $('#response').html(responseText).hide().delay(1300).slideDown('fast');
        }
      });
      return false;
    }

  });

});


/*===================================================================================*/
/*  MATCH HEIGHTS FOR CONTACT CARDS
/*===================================================================================*/

$('#contact-names .member-details').matchHeight({
  property: 'min-height'
});

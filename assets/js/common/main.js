/**
* totop
*/
$(function() {
    $(window).scroll(function() {
        if($(this).scrollTop() != 0) {
            $('.totop').fadeIn();
        } else {
            $('.totop').fadeOut();
        }
    });
    $('.totop').click(function() {
        $('body,html').animate({scrollTop:0},800,'easeInOutExpo');
    });
});

$(document).ready(function() {
    /**
    * jQuery-One-Page-Nav
    * https://github.com/davist11/jQuery-One-Page-Nav
    */
    $('.js-page-nav').onePageNav({
        currentClass: 'mainmenu__li--selected',
        changeHash: true,
        scrollSpeed: 800,
        scrollThreshold: 0.02,
        easing: 'easeInOutExpo',
    });

    /**
    * slick
    * https://github.com/kenwheeler/slick
    */
    // $('#fullpage').fullpage();

    /**
    * slick
    * https://github.com/kenwheeler/slick
    */
    $('.js-events-item-slick').slick({
        dots: false,
        arrows: false,
        infinite: true,
        speed: 300,
        // fade: true,
        cssEase: 'ease',
        centerMode: true,
        centerPadding: '20%',
        slidesToShow: 1,
        lazyLoad: 'ondemand',
        // swipeToSlide: true,
        mobileFirst: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: true,
                    swipeToSlide: false,
                    // fade: true,
                }
            }
        ]
    });
    $('.js-clients-slick').slick({
        dots: false,
        arrows: true,
        infinite: true,
        speed: 300,
        // fade: true,
        cssEase: 'ease',
        // centerMode: true,
        // centerPadding: '20%',
        slidesToShow: 6,
        slidesToScroll: 1,
        lazyLoad: 'progressive',
        autoplay: true,
        autoplaySpeed: 3000,
        variableWidth: true,
        // swipeToSlide: true,
        mobileFirst: true,
        mobileFirst: true,
        responsive: [
            {
                breakpoint: 754,
                settings: {
                    slidesToShow: 8,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1054,
                settings: {
                    slidesToShow: 10,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 12,
                    slidesToScroll: 2,
                }
            },
        ]
    });
    $('.js-agency-slick').slick({
        dots: false,
        arrows: true,
        infinite: true,
        speed: 300,
        // fade: true,
        cssEase: 'ease',
        centerMode: true,
        centerPadding: '20%',
        slidesToShow: 1,
        // slidesToScroll: 1,
        lazyLoad: 'ondemand',
        // autoplay: true,
        // autoplaySpeed: 4000,
        // swipeToSlide: true,
        // mobileFirst: true,
        // responsive: [
        //     {
        //         breakpoint: 768,
        //         settings: {
        //             slidesToShow: 8,
        //             slidesToScroll: 2,
        //         }
        //     }
        // ]
    });
    $('.js-hero-slick').slick({
        dots: true,
        arrows: true,
        infinite: true,
        speed: 400,
        fade: true,
        cssEase: 'ease',
        // centerMode: true,
        // centerPadding: '20%',
        slidesToShow: 1,
        // slidesToScroll: 1,
        lazyLoad: 'ondemand',
        autoplay: true,
        autoplaySpeed: 4000,
        // swipeToSlide: true,
        // mobileFirst: true,
        // responsive: [
        //     {
        //         breakpoint: 768,
        //         settings: {
        //             slidesToShow: 8,
        //             slidesToScroll: 2,
        //         }
        //     }
        // ]
    });

    /**
    * Remodal
    * https://github.com/VodkaBears/Remodal
    */
    // $('.js-remodal').remodal({
    //     closeOnEscape: false
    // });

    /**
    * isotope with imagesloaded
    * https://github.com/metafizzy/isotope
    * https://github.com/desandro/imagesloaded
    */
    var $eventsList = $('.js-events-list'),
        $eventsRelated = $('.js-events-related'),
        $win = $(window);

    $eventsList.imagesLoaded(function() {

        $eventsList.isotope({
            itemSelector: '.events-list__item',
            percentPosition: true,
            masonry: {
                columnWidth: '.events-list__sizer'
            },
            filter: '.best',
            // animationOptions: {
            //     duration: 4000,
            //     easing: 'easeInOutQuad',
            //     queue: false
            // },
        });

        $eventsList.on('layoutComplete', function(){
            $win.trigger("scroll");
        });

        var filterFns = {
        };

        $('.js-events-filter').on( 'click', 'a', function() {
            var filterValue = $( this ).attr('data-filter');
            filterValue = filterFns[ filterValue ] || filterValue;
            $eventsList.isotope({ filter: filterValue });
        });

        $('.js-events-filter').each( function( i, buttonGroup ) {
            var $buttonGroup = $( buttonGroup );
            $buttonGroup.on( 'click', 'a', function() {
            $buttonGroup.find('.events-filter__link--selected').removeClass('events-filter__link--selected');
            $( this ).addClass('events-filter__link--selected');
            });
        });
    });

    $eventsRelated.imagesLoaded(function() {

        $eventsRelated.isotope({
            itemSelector: '.events-list__item',
            percentPosition: true,
            masonry: {
                columnWidth: '.events-list__sizer'
            },
        });
    });
});

/**
* lazyload.js
* https://github.com/tuupola/jquery_lazyload
*/
$(function() {
    $("img.lazy").lazyload({
        threshold : 0,
        effect : 'show',
        // placeholder : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"',
        placeholder : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MjBCMDA0RDZGQjdGMTFFNTlCQTFCRkU5Nzk0QUY4MDYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MjBCMDA0RDdGQjdGMTFFNTlCQTFCRkU5Nzk0QUY4MDYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoyMEIwMDRENEZCN0YxMUU1OUJBMUJGRTk3OTRBRjgwNiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoyMEIwMDRENUZCN0YxMUU1OUJBMUJGRTk3OTRBRjgwNiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PrIDXPwAAAAbSURBVHjaYhRxW8xALmBioACMah7VTBAABBgAtCwBE+gRdY0AAAAASUVORK5CYII=',
    });
});

/**
* isotope with imagesloaded
* https://github.com/metafizzy/isotope
* https://github.com/desandro/imagesloaded
*/
// $(function(){

//     var $container = $('#container');

//     $container.isotope({
//         itemSelector : '.element'
//     });

//     $container.infinitescroll({
//         navSelector  : '#page_nav',    // selector for the paged navigation 
//         nextSelector : '#page_nav a',  // selector for the NEXT link (to page 2)
//         itemSelector : '.element',     // selector for all items you'll retrieve
//         loading: {
//             finishedMsg: 'No more pages to load.',
//             img: 'http://i.imgur.com/qkKy8.gif'
//         }
//     },

//     function( newElements ) {
//         $container.isotope( 'appended', $( newElements ) ); 
//         }
//     );
// });





// function initMap() {

//   // Specify features and elements to define styles.
//   var styleArray = [
//     {
//       featureType: "all",
//       stylers: [
//        { saturation: -80 }
//       ]
//     },{
//       featureType: "road.arterial",
//       elementType: "geometry",
//       stylers: [
//         { hue: "#00ffee" },
//         { saturation: 50 }
//       ]
//     },{
//       featureType: "poi.business",
//       elementType: "labels",
//       stylers: [
//         { visibility: "off" }
//       ]
//     }
//   ];

//   // Create a map object and specify the DOM element for display.
//   var map = new google.maps.Map(document.getElementById('map'), {
//     center: {lat: -34.397, lng: 150.644},
//     scrollwheel: false,
//     // Apply the map style array to the map.
//     styles: styleArray,
//     zoom: 8
//   });
// }



/**
* google map
*/
function initMap() {
    var myLatLng = {lat: 50.44761581, lng: 30.52425742};

    var styles = {
      'Blue': [
            {
              featureType: 'all',
              stylers: [
                {hue: '#1446a3'},
                {invert_lightness: 'true'},
                {saturation: 100}
              ]
            }
          ]
    };

    for (var s in styles) {
        var opt = {
            mapTypeControlOptions: {
                mapTypeIds: [google.maps.MapTypeId.ROADMAP, google.maps.MapTypeId.SATELLITE, s]
            },
            disableDefaultUI: false,
            navigationControl: true,
            scrollwheel: false,
            center: myLatLng,
            zoom: 18,
            mapTypeId: s
        };

        var div = document.getElementById('map');
        var map = new google.maps.Map(div, opt);
        var styledMapType = new google.maps.StyledMapType(styles[s], {name: s});
        map.mapTypes.set(s, styledMapType);
    }

    var marker = new google.maps.Marker({
        map: map,
        position: myLatLng,
        title: 'Hello World!'
    });
}

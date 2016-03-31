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
        scrollThreshold: 0.011,
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
        slidesToShow: 4,
        slidesToScroll: 1,
        lazyLoad: 'ondemand',
        autoplay: true,
        autoplaySpeed: 4000,
        // swipeToSlide: true,
        mobileFirst: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 8,
                    slidesToScroll: 2,
                }
            }
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

    /**
    * Remodal
    * https://github.com/VodkaBears/Remodal
    */
    $('.js-remodal').remodal({
        // closeOnEscape: false
    });

    /**
    * isotope with imagesloaded
    * https://github.com/metafizzy/isotope
    * https://github.com/desandro/imagesloaded
    */
    var $container = $('.isotope-container');
    var $win = $(window);
    $container.imagesLoaded( function() {
        $container.isotope({
            // itemSelector: '.isotope-item',
            // layoutMode: 'fitRows',
            masonry: {
                columnWidth: 0
            }
        });
        $container.on('layoutComplete', function(){
        $win.trigger("scroll");
        });
        var filterFns = {
        };
        $('.isotope-filter').on( 'click', 'a', function() {
            var filterValue = $( this ).attr('data-filter');
            filterValue = filterFns[ filterValue ] || filterValue;
            $container.isotope({ filter: filterValue });
        });
        $('.isotope-filter').each( function( i, buttonGroup ) {
            var $buttonGroup = $( buttonGroup );
            $buttonGroup.on( 'click', 'a', function() {
            $buttonGroup.find('.events-filter__link--selected').removeClass('events-filter__link--selected');
            $( this ).addClass('events-filter__link--selected');
            });
        });
    });
});

/**
* lazyload.js
* https://github.com/tuupola/jquery_lazyload
*/
$(function() {
    $("img.lazy").lazyload({
      // threshold : 0,
      effect : "fadeIn",
      // placeholder : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"
    });
});

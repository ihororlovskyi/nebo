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
        $('body,html').animate({scrollTop:0},1100,'easeInOutExpo');
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
        scrollSpeed: 1100,
        scrollThreshold: 0.011,
        easing: 'easeInOutExpo',
    });

    /**
    * slick
    * https://github.com/kenwheeler/slick
    */
    $('#fullpage').fullpage();

    /**
    * slick
    * https://github.com/kenwheeler/slick
    */
    $('.your-class').slick({
        dots: true
    });

    /**
    * Remodal
    * https://github.com/VodkaBears/Remodal
    */
    $('.js-remodal').remodal({
        // closeOnEscape: false
    });
});


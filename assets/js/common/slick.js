;$(document).ready(function () {
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
                breakpoint: 754,
                settings: {
                    arrows: true,
                    swipeToSlide: false
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
        autoplaySpeed: 3500,
        variableWidth: true,
        // swipeToSlide: true,
        mobileFirst: true,
        responsive: [
            {
                breakpoint: 754,
                settings: {
                    slidesToShow: 8,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1054,
                settings: {
                    slidesToShow: 10,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 12,
                    slidesToScroll: 2
                }
            }
        ]
    });

    $('.js-agency-slick').slick({
        dots: false,
        arrows: false,
        infinite: true,
        speed: 300,
        // fade: true,
        cssEase: 'ease',
        centerMode: true,
        centerPadding: '20%',
        slidesToShow: 1,
        // slidesToScroll: 1,
        lazyLoad: 'ondemand',
        autoplay: true,
        autoplaySpeed: 4000,
        // swipeToSlide: true,
        mobileFirst: true,
        responsive: [
            {
                breakpoint: 754,
                settings: {
                    arrows: true,
                }
            }
        ]
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
        autoplaySpeed: 4000
        // swipeToSlide: true,
        // mobileFirst: true,
        // responsive: [
        //     {
        //         breakpoint: 754,
        //         settings: {
        //             slidesToShow: 8,
        //             slidesToScroll: 2,
        //         }
        //     }
        // ]
    });
});

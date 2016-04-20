;$(document).ready(function () {

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

    $eventsList.imagesLoaded(function () {

        $eventsList.isotope({
            itemSelector: '.events-list__item',
            percentPosition: true,
            masonry: {
                columnWidth: '.events-list__sizer'
            },
            filter: '.best'
            // animationOptions: {
            //     duration: 4000,
            //     easing: 'easeInOutQuad',
            //     queue: false
            // },
        });

        $eventsList.on('layoutComplete', function () {
            $win.trigger("scroll");
        });

        var filterFns = {};

        $('.js-events-filter').on('click', 'a', function () {
            var filterValue = $(this).attr('data-filter');
            filterValue = filterFns[filterValue] || filterValue;
            $eventsList.isotope({filter: filterValue});
        });

        $('.js-events-filter').each(function (i, buttonGroup) {
            var $buttonGroup = $(buttonGroup);
            $buttonGroup.on('click', 'a', function () {
                $buttonGroup.find('.events-filter__link--selected').removeClass('events-filter__link--selected');
                $(this).addClass('events-filter__link--selected');
            });
        });
    });

    $eventsRelated.imagesLoaded(function () {

        $eventsRelated.isotope({
            itemSelector: '.events-list__item',
            percentPosition: true,
            masonry: {
                columnWidth: '.events-list__sizer'
            }
        });
    });

    /**
     * Remodal
     * https://github.com/VodkaBears/Remodal
     */
    $('.js-popup').remodal({
        // closeOnEscape: false
    });
});
/**
* isotope with imagesloaded
* https://github.com/metafizzy/isotope
* https://github.com/desandro/imagesloaded
*/
;$(document).ready(function () {
    var $eventsList = $('.js-events-list'),
        $eventsFilter = $('.js-events-filter'),
        $eventsRelated = $('.js-events-related'),
        $clientList = $('.js-clients-events-list'),
        $clientFilter = $('.js-clients-events-filter'),
        filterFns = {},
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

        $eventsFilter.on('click', 'a', function () {
            var filterValue = $(this).attr('data-filter');
            filterValue = filterFns[filterValue] || filterValue;
            $eventsList.isotope({filter: filterValue});
        });

        $eventsFilter.each(function (i, buttonGroup) {
            var $buttonGroup = $(buttonGroup);
            $buttonGroup.on('click', 'a', function () {
                $buttonGroup.find('.events-filter__link--selected').removeClass('events-filter__link--selected');
                $(this).addClass('events-filter__link--selected');
            });
        });

        $eventsRelated.isotope({
            itemSelector: '.events-list__item',
            percentPosition: true,
            masonry: {
                columnWidth: '.events-list__sizer'
            }
        });

        $clientList.isotope({
            itemSelector: '.clients__event',
            percentPosition: true,
            transitionDuration: 0,
            filter: '.none'
        });

        $clientFilter.on('click', 'a', function () {
            var filterValue = $(this).attr('data-filter');
            filterValue = filterFns[filterValue] || filterValue;
            $clientList.isotope({filter: filterValue});
        });

        $clientFilter.each(function (i, buttonGroup) {
            var $buttonGroup = $(buttonGroup);
            $buttonGroup.on('click', 'a', function () {
                $buttonGroup.find('.clients-filter__link--selected').removeClass('clients-filter__link--selected');
                $(this).addClass('clients-filter__link--selected');
            });
        });
    });
});

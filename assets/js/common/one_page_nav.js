;$(document).ready(function () {

    /**
     * jQuery-One-Page-Nav
     * https://github.com/davist11/jQuery-One-Page-Nav
     */
    $('.js-page-nav').onePageNav({
        currentClass: 'mainmenu__li--selected',
        changeHash: true,
        scrollSpeed: 800,
        scrollThreshold: 0.02,
        easing: 'easeInOutExpo'
    });
});
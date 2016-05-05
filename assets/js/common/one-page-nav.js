/**
* jQuery-One-Page-Nav
* https://github.com/davist11/jQuery-One-Page-Nav
*/
;$(document).ready(function () {
    $('.js-one-page-nav').onePageNav({
        currentClass: 'mainmenu__nav-li--selected',
        changeHash: true,
        scrollSpeed: 800,
        scrollThreshold: 0.02,
        easing: 'easeInOutExpo'
    });
});

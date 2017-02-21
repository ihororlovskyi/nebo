;$(document).ready(function () {


    // menu
    $('.js-one-page-nav').onePageNav({
        currentClass: 'mainmenu__nav-li--selected',
        changeHash: true,
        scrollSpeed: 800,
        scrollThreshold: 0.02,
        filter: '',
        easing: 'easeInOutExpo',
        // begin: function() {
        //     console.log('I get fired when the animation is starting');
        // },
        // end: function() {
        //     console.log('I get fired when the animation is ending');
        // },
        // scrollChange: function($currentListItem) {
        //     console.log('I get fired when you enter a section and I pass the list item of the section');
        // }
    });


    // history
    $(document).on('click', '.mainmenu__nav-li', function(){
        // console.log(window.location.hash);
        var hash = window.location.hash;
        history.replaceState(undefined, undefined, hash)
    })
});

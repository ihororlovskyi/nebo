/**
* mobile-menu-btn
* 
*/
;$(document).ready(function() {
    var $menu = $('.mainmenu__wrapper'),
    $menulink = $('.mainmenu__mobile-menu-btn');

    $menulink.click(function() {
        $menulink.toggleClass('mainmenu__mobile-menu-btn--active');
        $menu.toggleClass('mainmenu__wrapper--active');
        return false;
    });
});

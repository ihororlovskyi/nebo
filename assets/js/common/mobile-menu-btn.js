/**
* mobile-menu-btn
* 
*/
;$(document).ready(function() {
    var $menu = $('.mainmenu__wrapper'),
        $menupattern = $('.mainmenu__mobile-pattern'),
        $menubtn = $('.mainmenu__mobile-menu-btn'),
        $menulink = $('.mainmenu__nav-a');

    $menubtn.click(function() {
        $menupattern.toggleClass('mainmenu__mobile-pattern--active');
        $menubtn.toggleClass('mainmenu__mobile-menu-btn--active');
        $menu.toggleClass('mainmenu__wrapper--active');
    });

    $menulink.click(function() {
        $menupattern.toggleClass('mainmenu__mobile-pattern--active');
        $menubtn.toggleClass('mainmenu__mobile-menu-btn--active');
        $menu.toggleClass('mainmenu__wrapper--active');
    });

    $menupattern.click(function() {
        $menupattern.toggleClass('mainmenu__mobile-pattern--active');
        $menubtn.toggleClass('mainmenu__mobile-menu-btn--active');
        $menu.toggleClass('mainmenu__wrapper--active');
    });

    // $(document).mouseup(function(e) {
    //     if (!$menubtn.is(e.target) && $menubtn.has(e.target).length === 0) {
    //         $menupattern.toggleClass('mainmenu__mobile-pattern--active');
    //         $menubtn.toggleClass('mainmenu__mobile-menu-btn--active');
    //         $menu.toggleClass('mainmenu__wrapper--active');
    //     }
    // });
});


/**
* isotope with imagesloaded
* https://github.com/metafizzy/isotope
* https://github.com/desandro/imagesloaded
*/
// $(function(){

//     var $container = $('#container');

//     $container.isotope({
//         itemSelector : '.element'
//     });

//     $container.infinitescroll({
//         navSelector  : '#page_nav',    // selector for the paged navigation 
//         nextSelector : '#page_nav a',  // selector for the NEXT link (to page 2)
//         itemSelector : '.element',     // selector for all items you'll retrieve
//         loading: {
//             finishedMsg: 'No more pages to load.',
//             img: 'http://i.imgur.com/qkKy8.gif'
//         }
//     },

//     function( newElements ) {
//         $container.isotope( 'appended', $( newElements ) ); 
//         }
//     );
// });





// function initMap() {

//   // Specify features and elements to define styles.
//   var styleArray = [
//     {
//       featureType: "all",
//       stylers: [
//        { saturation: -80 }
//       ]
//     },{
//       featureType: "road.arterial",
//       elementType: "geometry",
//       stylers: [
//         { hue: "#00ffee" },
//         { saturation: 50 }
//       ]
//     },{
//       featureType: "poi.business",
//       elementType: "labels",
//       stylers: [
//         { visibility: "off" }
//       ]
//     }
//   ];

//   // Create a map object and specify the DOM element for display.
//   var map = new google.maps.Map(document.getElementById('map'), {
//     center: {lat: -34.397, lng: 150.644},
//     scrollwheel: false,
//     // Apply the map style array to the map.
//     styles: styleArray,
//     zoom: 8
//   });
// }

// js-awards-show-more

$(".js-awards-show-more").click(function(){
    $(".awards__list").toggleClass("awards__list--open");
});










/**
* google map
* 
*/
function initMap() {
    var myLatLng = {lat: 50.44761581, lng: 30.52425742},
        draggable = isMobile.any() ? false : true;

    var styles = {
        'Nebo Style': [
            {
                featureType: 'all',
                stylers: [
                    {hue: '#1446a3'},
                    {invert_lightness: 'true'},
                    {saturation: 100}
                ]
            }
        ]
    };

    for (var s in styles) {
        var opt = {
            mapTypeControlOptions: {
                mapTypeIds: [google.maps.MapTypeId.ROADMAP, google.maps.MapTypeId.SATELLITE, s]
            },
            disableDefaultUI: false,
            navigationControl: true,
            draggable: draggable,
            scrollwheel: false,
            center: myLatLng,
            zoom: 18,
            mapTypeId: s
        };

        var div = document.getElementById('map');
        var map = new google.maps.Map(div, opt);
        var styledMapType = new google.maps.StyledMapType(styles[s], {name: s});
        map.mapTypes.set(s, styledMapType);
    }

    var marker = new google.maps.Marker({
        map: map,
        position: myLatLng,
        title: 'Hello World!'
    });
}

//////////////////////////////////////////////////////////////////////////////////////////////////////
// GLOBAL VARIABLES
//////////////////////////////////////////////////////////////////////////////////////////////////////
var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

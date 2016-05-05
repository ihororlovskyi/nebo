/**
* google map
* 
*/
function initMap() {
    var myLatLng = {lat: 50.44761581, lng: 30.52425742};

    var styles = {
        'Blue': [
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

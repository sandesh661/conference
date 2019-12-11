function initialize() {
    var locations = [
        ['Kundalahalli, Bengaluru', 12.955997, 77.714816, 3],
        ['Marathalli, Bengaluru', 12.959761, 77.701480, 2],
        ['Hoodi, Bengaluru', 12.963765, 77.710610, 1]
    ];

    window.map = new google.maps.Map(document.getElementById('map'), {
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var infowindow = new google.maps.InfoWindow();

    var bounds = new google.maps.LatLngBounds();

    for (i = 0; i < locations.length; i++) {
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i][1], locations[i][2]),
            icon: "./img/marker-icon.png",
            //icon: "https://developers.google.com/maps/documentation/javascript/examples/full/images/library_maps.png",
            map: map
        });

        bounds.extend(marker.position);

        google.maps.event.addListener(marker, 'click', (function (marker, i) {
            return function () {
                infowindow.setContent(locations[i][0]);
                infowindow.open(map, marker);
            }
        })(marker, i));
    }

    map.fitBounds(bounds);

    var listener = google.maps.event.addListener(map, "idle", function () {
        map.setZoom(14);
        google.maps.event.removeListener(listener);
    });
}

function loadScript() {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDj9Nxy8B-eVC0fYp5qMCdlA9Nsimqh0N0&' + 'callback=initialize';
    document.body.appendChild(script);
}

window.onload = function() {
    loadScript();
    rangeSelector();
}
'use strict';

var map;
var json;
var issCoords;
var flightPath;
var marker;
var circle;
var distance;

$(document).ready(function () {
    ajax();
});

function setDistance(distance) {
    $('#distance > p').empty().append(distance + ' Miles');
    if (distance < 1000) {
        circle.setOptions({
            fillColor: '#00AA30',
            strokeColor: '#005D1A'
        });
    } else {
        circle.setOptions({
            fillColor: '#F61919',
            strokeColor: '#AA0000'
        });
    }
}

function ajax() {
    $.getJSON('/ajax', function (data) {
        issCoords = data['coordinates'];
        distance = data['distance'];
        marker.setPosition(issCoords[issCoords.length - 1]);
        flightPath.setPath(issCoords);
        setDistance(distance);
    });
};

function initMap() {

    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 2,
        styles: [{
            "featureType": "all",
            "elementType": "labels.text.fill",
            "stylers": [{
                "saturation": 36
            }, {
                "color": "#000000"
            }, {
                "lightness": 40
            }]
        }, {
            "featureType": "all",
            "elementType": "labels.text.stroke",
            "stylers": [{
                "visibility": "on"
            }, {
                "color": "#000000"
            }, {
                "lightness": 16
            }]
        }, {
            "featureType": "all",
            "elementType": "labels.icon",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "administrative",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 20
            }]
        }, {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 17
            }, {
                "weight": 1.2
            }]
        }, {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 20
            }]
        }, {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 21
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 17
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 29
            }, {
                "weight": 0.2
            }]
        }, {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 18
            }]
        }, {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 16
            }]
        }, {
            "featureType": "transit",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 19
            }]
        }, {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 17
            }]
        }],
        center: new google.maps.LatLng({
            lat: 53.5421579,
            lng: -2.1092045
        }),
        mapTypeId: 'terrain'
    });

    marker = new google.maps.Marker({
        icon: '/images/iss_map_marker.png',
        map: map,
        title: 'ISS Location'
    });

    hackOldham = new google.maps.Marker({
        position: {
            lat: 53.5421579,
            lng: -2.1092045
        },
        icon: '/images/cog_map_marker.png',
        map: map,
        title: 'Hack Oldham'
    });

    circle = new google.maps.Circle({
        map: map,
        radius: 1287440, // 1000 miles in metres
        fillColor: '#F61919',
        strokeColor: '#AA0000',
        strokeWeight: 1
    });
    circle.bindTo('center', hackOldham, 'position');

    flightPath = new google.maps.Polyline({
        path: issCoords,
        geodesic: true,
        strokeColor: '#8fbce5',
        strokeOpacity: 1.0,
        strokeWeight: 1.5
    });
    flightPath.setMap(map);
}

setInterval(function () {
    ajax();
}, 5000);
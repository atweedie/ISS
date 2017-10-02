var http = require('http');
var fetch = require('node-fetch');
var fs = require('fs');
var express = require('express');
var app = express();

var json = {}
var issCoords = [];
var distance;

app.use(express.static('public'));
app.set('view engine', 'ejs'); //tell Express we're using EJS

app.get('/', function(req, res) {
    //render index.ejs file
    res.render('index');
});

app.get('/ajax', function(req, res) {
    json['coordinates'] = issCoords;
    json['distance'] = distance;
    res.send(JSON.stringify(json));
});

app.listen(8080);


function getIssLoc() {
    var url = 'http://api.open-notify.org/iss-now.json'
    fetch(url)
        .then(function(response) {
            return response.json();
        })
        .then(function(json) {
            var currentLatLng = {};
            var lat = parseFloat(json.iss_position.latitude);
            var lng = parseFloat(json.iss_position.longitude);
            currentLatLng.lat = lat;
            currentLatLng.lng = lng;
            issCoords.push(currentLatLng);
            if (issCoords.length > 1080) {
                issCoords.shift();
            }
            distance = groundDistance(lat, lng);
            console.log(currentLatLng, groundDistance(lat, lng));
        });
}

function groundDistance(lat2, lon2) {
    var lat1 = 53.5421643;
    var lon1 = -2.109124;
    var R = 6371; // Radius of the earth in km
    var dLat = (lat2 - lat1) * Math.PI / 180; // deg2rad below
    var dLon = (lon2 - lon1) * Math.PI / 180;
    var a =
        0.5 - Math.cos(dLat) / 2 +
        Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
        (1 - Math.cos(dLon)) / 2;

    return Math.round(R * 2 * Math.asin(Math.sqrt(a)) * 0.62137119);
}

function loop() {
    setInterval(getIssLoc, 5000);
}

getIssLoc();
loop();

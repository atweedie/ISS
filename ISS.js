var http = require('http');
var fetch = require('node-fetch');
var fs = require('fs');
var express = require('express');
var app = express();

var issCoords = [];

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');  //tell Express we're using EJS

app.get('/', function(req, res) {
    //render index.ejs file
    res.render('index');
});

app.get('/ajax', function(req, res) {
    res.send(issCoords);
});

app.listen(8080);


function getIssLoc() {
	var url = 'http://api.open-notify.org/iss-now.json'
	fetch(url)
	.then(function(response){
	    return response.json();
	})
	.then(function(json){
		var currentLatLng = {};
		var lat = parseFloat(json.iss_position.latitude);
		var lng = parseFloat(json.iss_position.longitude);
	    currentLatLng.lat = lat;
	    currentLatLng.lng = lng;
	    issCoords.push(currentLatLng);
	    console.log(currentLatLng);
	});	
}

function loop() {
  setInterval(getIssLoc, 300000);
}

getIssLoc();
loop();


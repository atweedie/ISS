import Orbit from './classes/orbit';
import issLocation from './server/services/issLocation';

const express = require('express');
const app = express();

app.use(express.static('app/public'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('index');
});

app.listen(8080);

// const currentCoordinates = issLocation();
// console.log(currentCoordinates);

// const iss = new Orbit(405000);
// iss.setLatitude(currentCoordinates.latitude);
// iss.setLongitude(currentCoordinates.longitude);
// console.log(`Latitude: ${iss.getLatitude()} Longitude: ${iss.getLongitude}`);

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

const iss = new Orbit(405000);

issLocation()
    .then(response => {
        iss.setLatitude(response.latitude);
        iss.setLongitude(response.longitude);
        console.log(`Latitude: ${iss.getLatitude()} Longitude: ${iss.getLongitude()}`);
    });

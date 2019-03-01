import express from 'express';
import issLocation from '../services/issLocation';
import Orbit from '../../classes/orbit';

const locationHistory = [];

const router = express.Router();

router.get('/', (request, response) => {
    response.render('index');
});

router.get('/ajax', (request, response) => {
    const iss = new Orbit(405000);

    issLocation()
    .then(result => {
        iss.setLatitude(result.latitude);
        iss.setLongitude(result.longitude);

        const currentLocation = {
            lat: parseFloat(iss.getLatitude()),
            lng: parseFloat(iss.getLongitude())
        }

        if (locationHistory.length === 20) {
            locationHistory.pop;
        }

        locationHistory.push(currentLocation);

        response.json({
            coordinates: locationHistory
        });
    });
});

export default router
import express from 'express';
import issLocation from '../services/issLocation';
import Orbit from '../../classes/orbit';

const router = express.Router();

router.get('/', (request, response) => {
    const iss = new Orbit(405000);

    issLocation()
    .then(result => {
        iss.setLatitude(result.latitude);
        iss.setLongitude(result.longitude);

        response.locals.issLocation = {
            latitude: iss.getLatitude(),
            longitude: iss.getLongitude()
        }

        response.render('index');
    });
});





export default router
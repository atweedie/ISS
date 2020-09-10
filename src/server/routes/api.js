import express from 'express';

const router = express.Router();

router.get('/history', (request, response) => {
    const {iss} = response.locals.orbits;;

    response.json({
        coordinates: iss.getLocationHistory()
    });
});

export default router
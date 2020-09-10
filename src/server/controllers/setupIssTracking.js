import fetchIssLocation from '../services/issLocation';
import Orbit from '../../classes/orbit';

const setupIssTracking = () => {
    const iss = new Orbit(405000);

    const updateIssLocation = () => {
    
        fetchIssLocation().then((issLocation) => {
            iss.setLatitude(issLocation.latitude);
            iss.setLongitude(issLocation.longitude);
        
            iss.updateLocationHistory();
        })
    }

    setInterval(updateIssLocation, 5000);

    return iss;
}

export default setupIssTracking
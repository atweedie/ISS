import * as constants from '../constants/universalConstants';
import {groundDistance} from '../helpers/calculations';

export default class Orbit {
    constructor(altitude) {
        this.altitude = altitude;
        this.locationHistory = [];
    }

    getOrbitalVelocity() {
        return (constants.gravitationalConstant * constants.earthMass)/(constants.earthRadius + this.altitude)    }

    getAltitude() {
        return this.altitude;
    }

    getLatitude() {
        return this.latitude;
    }

    getLongitude() {
        return this.longitude;
    }

    getLocationHistory() {
        return this.locationHistory;
    }

    updateLocationHistory() {
        const currentLocation = {
            lat: parseFloat(this.latitude),
            lng: parseFloat(this.longitude)
        }

        if (this.locationHistory.length >= 20) {
            this.locationHistory.pop();
        }

        this.locationHistory.push(currentLocation);
    }

    setAltitude(altitude) {
        this.altitude = altitude;
    }

    setLatitude(latitude) {
        this.latitude = latitude;
    }

    setLongitude(longitude) {
        this.longitude = longitude;
    }
}
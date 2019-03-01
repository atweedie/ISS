import * as constants from '../constants/universalConstants';
import {groundDistance} from '../helpers/calculations';

export default class Orbit {
    constructor(altitude) {
        this.altitude = altitude;
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
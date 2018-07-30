import * as constants from '../constants/universalConstants';

export default class Orbit {
    constructor(altitude) {
        this.altitude = altitude;
        this.orbitalVelocity = Math.sqrt(
            (constants.gravitationalConstant * constants.earthMass)/(constants.earthRadius + altitude)
        );
    }

    getOrbitalVelocity() {
        return this.orbitalVelocity;
    }

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
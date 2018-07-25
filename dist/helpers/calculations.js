'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
function groundDistance(primaryCoordinates, secondaryCoordinates) {
    var radius = 6371; // Radius of the earth in km
    var latitudeDifference = (secondaryCoordinates['lat'] - primaryCoordinates['lat']) * Math.PI / 180; // deg2rad below
    var longitudeDifference = (secondaryCoordinates['lon'] - primaryCoordinates['lon']) * Math.PI / 180;
    var squaredHalfChordLength = 0.5 - Math.cos(latitudeDifference) / 2 + Math.cos(primaryCoordinates['lat'] * Math.PI / 180) * Math.cos(secondaryCoordinates['lat'] * Math.PI / 180) * (1 - Math.cos(longitudeDifference)) / 2;

    return Math.round(radius * 2 * Math.asin(Math.sqrt(squaredHalfChordLength)) * 0.62137119);
}

exports.groundDistance = groundDistance;
function groundDistance(primaryCoordinates, secondaryCoordinates) {
    const radius = 6371; // Radius of the earth in km
    const latitudeDifference = (secondaryCoordinates['lat'] - primaryCoordinates['lat']) * Math.PI / 180; // deg2rad below
    const longitudeDifference = (secondaryCoordinates['lon'] - primaryCoordinates['lon']) * Math.PI / 180;
    const squaredHalfChordLength =
        0.5 - Math.cos(latitudeDifference) / 2 +
        Math.cos(primaryCoordinates['lat'] * Math.PI / 180) * Math.cos(secondaryCoordinates['lat'] * Math.PI / 180) *
        (1 - Math.cos(longitudeDifference)) / 2;

    return Math.round(radius * 2 * Math.asin(Math.sqrt(squaredHalfChordLength)) * 0.62137119);
}

export {
    groundDistance
};
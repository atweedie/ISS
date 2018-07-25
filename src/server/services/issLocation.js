import fetch from 'node-fetch';

function getIssLoc() {
    const url = 'http://api.open-notify.org/iss-now.json'
    fetch(url)
        .then(function(response) {
            return response.json();
        })
        .then(function(json) {
            let currentLatLng = {};
            const lat = parseFloat(json.iss_position.latitude);
            const lng = parseFloat(json.iss_position.longitude);
            currentLatLng.lat = lat;
            currentLatLng.lng = lng;
            console.log(currentLatLng);
        });
}

export default getIssLoc;
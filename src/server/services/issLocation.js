import fetch from 'node-fetch';

function getIssLoc() {
    const url = 'http://api.open-notify.org/iss-now.json'
    fetch(url)
        .then(response => {
            return response.json();
        })
        .then(json => {
            return json.iss_position
        });
}

export default getIssLoc;
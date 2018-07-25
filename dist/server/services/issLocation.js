'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _nodeFetch = require('node-fetch');

var _nodeFetch2 = _interopRequireDefault(_nodeFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getIssLoc() {
    var url = 'http://api.open-notify.org/iss-now.json';
    (0, _nodeFetch2.default)(url).then(function (response) {
        return response.json();
    }).then(function (json) {
        var currentLatLng = {};
        var lat = parseFloat(json.iss_position.latitude);
        var lng = parseFloat(json.iss_position.longitude);
        currentLatLng.lat = lat;
        currentLatLng.lng = lng;
        console.log(currentLatLng);
    });
}

exports.default = getIssLoc;
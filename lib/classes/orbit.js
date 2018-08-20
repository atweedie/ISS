'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _universalConstants = require('../constants/universalConstants');

var constants = _interopRequireWildcard(_universalConstants);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Orbit = function () {
    function Orbit(altitude) {
        _classCallCheck(this, Orbit);

        this.altitude = altitude;
        this.orbitalVelocity = Math.sqrt(constants.gravitationalConstant * constants.earthMass / (constants.earthRadius + altitude));
    }

    _createClass(Orbit, [{
        key: 'getOrbitalVelocity',
        value: function getOrbitalVelocity() {
            return this.orbitalVelocity;
        }
    }, {
        key: 'getAltitude',
        value: function getAltitude() {
            return this.altitude;
        }
    }, {
        key: 'getLatitude',
        value: function getLatitude() {
            return this.latitude;
        }
    }, {
        key: 'getLongitude',
        value: function getLongitude() {
            return this.longitude;
        }
    }, {
        key: 'setAltitude',
        value: function setAltitude(altitude) {
            this.altitude = altitude;
        }
    }, {
        key: 'setLatitude',
        value: function setLatitude(latitude) {
            this.latitude = latitude;
        }
    }, {
        key: 'setLongitude',
        value: function setLongitude(longitude) {
            this.longitude = longitude;
        }
    }]);

    return Orbit;
}();

exports.default = Orbit;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jbGFzc2VzL29yYml0LmpzIl0sIm5hbWVzIjpbImNvbnN0YW50cyIsIk9yYml0IiwiYWx0aXR1ZGUiLCJvcmJpdGFsVmVsb2NpdHkiLCJNYXRoIiwic3FydCIsImdyYXZpdGF0aW9uYWxDb25zdGFudCIsImVhcnRoTWFzcyIsImVhcnRoUmFkaXVzIiwibGF0aXR1ZGUiLCJsb25naXR1ZGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7O0lBQVlBLFM7Ozs7OztJQUVTQyxLO0FBQ2pCLG1CQUFZQyxRQUFaLEVBQXNCO0FBQUE7O0FBQ2xCLGFBQUtBLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0EsYUFBS0MsZUFBTCxHQUF1QkMsS0FBS0MsSUFBTCxDQUNsQkwsVUFBVU0scUJBQVYsR0FBa0NOLFVBQVVPLFNBQTdDLElBQXlEUCxVQUFVUSxXQUFWLEdBQXdCTixRQUFqRixDQURtQixDQUF2QjtBQUdIOzs7OzZDQUVvQjtBQUNqQixtQkFBTyxLQUFLQyxlQUFaO0FBQ0g7OztzQ0FFYTtBQUNWLG1CQUFPLEtBQUtELFFBQVo7QUFDSDs7O3NDQUVhO0FBQ1YsbUJBQU8sS0FBS08sUUFBWjtBQUNIOzs7dUNBRWM7QUFDWCxtQkFBTyxLQUFLQyxTQUFaO0FBQ0g7OztvQ0FFV1IsUSxFQUFVO0FBQ2xCLGlCQUFLQSxRQUFMLEdBQWdCQSxRQUFoQjtBQUNIOzs7b0NBRVdPLFEsRUFBVTtBQUNsQixpQkFBS0EsUUFBTCxHQUFnQkEsUUFBaEI7QUFDSDs7O3FDQUVZQyxTLEVBQVc7QUFDcEIsaUJBQUtBLFNBQUwsR0FBaUJBLFNBQWpCO0FBQ0g7Ozs7OztrQkFsQ2dCVCxLIiwiZmlsZSI6Im9yYml0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgY29uc3RhbnRzIGZyb20gJy4uL2NvbnN0YW50cy91bml2ZXJzYWxDb25zdGFudHMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3JiaXQge1xyXG4gICAgY29uc3RydWN0b3IoYWx0aXR1ZGUpIHtcclxuICAgICAgICB0aGlzLmFsdGl0dWRlID0gYWx0aXR1ZGU7XHJcbiAgICAgICAgdGhpcy5vcmJpdGFsVmVsb2NpdHkgPSBNYXRoLnNxcnQoXHJcbiAgICAgICAgICAgIChjb25zdGFudHMuZ3Jhdml0YXRpb25hbENvbnN0YW50ICogY29uc3RhbnRzLmVhcnRoTWFzcykvKGNvbnN0YW50cy5lYXJ0aFJhZGl1cyArIGFsdGl0dWRlKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0T3JiaXRhbFZlbG9jaXR5KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm9yYml0YWxWZWxvY2l0eTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRBbHRpdHVkZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hbHRpdHVkZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRMYXRpdHVkZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5sYXRpdHVkZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRMb25naXR1ZGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubG9uZ2l0dWRlO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEFsdGl0dWRlKGFsdGl0dWRlKSB7XHJcbiAgICAgICAgdGhpcy5hbHRpdHVkZSA9IGFsdGl0dWRlO1xyXG4gICAgfVxyXG5cclxuICAgIHNldExhdGl0dWRlKGxhdGl0dWRlKSB7XHJcbiAgICAgICAgdGhpcy5sYXRpdHVkZSA9IGxhdGl0dWRlO1xyXG4gICAgfVxyXG5cclxuICAgIHNldExvbmdpdHVkZShsb25naXR1ZGUpIHtcclxuICAgICAgICB0aGlzLmxvbmdpdHVkZSA9IGxvbmdpdHVkZTtcclxuICAgIH1cclxufSJdfQ==
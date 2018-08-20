'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _issLocation = require('../services/issLocation');

var _issLocation2 = _interopRequireDefault(_issLocation);

var _orbit = require('../../classes/orbit');

var _orbit2 = _interopRequireDefault(_orbit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.get('/', function (request, response) {
    var iss = new _orbit2.default(405000);

    (0, _issLocation2.default)().then(function (result) {
        iss.setLatitude(result.latitude);
        iss.setLongitude(result.longitude);

        response.locals.issLocation = {
            latitude: iss.getLatitude(),
            longitude: iss.getLongitude()
        };

        response.render('index');
    });
});

exports.default = router;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zZXJ2ZXIvcm91dGVzL3RyYWNrZXIuanMiXSwibmFtZXMiOlsicm91dGVyIiwiZXhwcmVzcyIsIlJvdXRlciIsImdldCIsInJlcXVlc3QiLCJyZXNwb25zZSIsImlzcyIsIk9yYml0IiwidGhlbiIsInNldExhdGl0dWRlIiwicmVzdWx0IiwibGF0aXR1ZGUiLCJzZXRMb25naXR1ZGUiLCJsb25naXR1ZGUiLCJsb2NhbHMiLCJpc3NMb2NhdGlvbiIsImdldExhdGl0dWRlIiwiZ2V0TG9uZ2l0dWRlIiwicmVuZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLFNBQVNDLGtCQUFRQyxNQUFSLEVBQWY7O0FBRUFGLE9BQU9HLEdBQVAsQ0FBVyxHQUFYLEVBQWdCLFVBQUNDLE9BQUQsRUFBVUMsUUFBVixFQUF1QjtBQUNuQyxRQUFNQyxNQUFNLElBQUlDLGVBQUosQ0FBVSxNQUFWLENBQVo7O0FBRUEsaUNBQ0NDLElBREQsQ0FDTSxrQkFBVTtBQUNaRixZQUFJRyxXQUFKLENBQWdCQyxPQUFPQyxRQUF2QjtBQUNBTCxZQUFJTSxZQUFKLENBQWlCRixPQUFPRyxTQUF4Qjs7QUFFQVIsaUJBQVNTLE1BQVQsQ0FBZ0JDLFdBQWhCLEdBQThCO0FBQzFCSixzQkFBVUwsSUFBSVUsV0FBSixFQURnQjtBQUUxQkgsdUJBQVdQLElBQUlXLFlBQUo7QUFGZSxTQUE5Qjs7QUFLQVosaUJBQVNhLE1BQVQsQ0FBZ0IsT0FBaEI7QUFDSCxLQVhEO0FBWUgsQ0FmRDs7a0JBcUJlbEIsTSIsImZpbGUiOiJ0cmFja2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XHJcbmltcG9ydCBpc3NMb2NhdGlvbiBmcm9tICcuLi9zZXJ2aWNlcy9pc3NMb2NhdGlvbic7XHJcbmltcG9ydCBPcmJpdCBmcm9tICcuLi8uLi9jbGFzc2VzL29yYml0JztcclxuXHJcbmNvbnN0IHJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XHJcblxyXG5yb3V0ZXIuZ2V0KCcvJywgKHJlcXVlc3QsIHJlc3BvbnNlKSA9PiB7XHJcbiAgICBjb25zdCBpc3MgPSBuZXcgT3JiaXQoNDA1MDAwKTtcclxuXHJcbiAgICBpc3NMb2NhdGlvbigpXHJcbiAgICAudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgIGlzcy5zZXRMYXRpdHVkZShyZXN1bHQubGF0aXR1ZGUpO1xyXG4gICAgICAgIGlzcy5zZXRMb25naXR1ZGUocmVzdWx0LmxvbmdpdHVkZSk7XHJcblxyXG4gICAgICAgIHJlc3BvbnNlLmxvY2Fscy5pc3NMb2NhdGlvbiA9IHtcclxuICAgICAgICAgICAgbGF0aXR1ZGU6IGlzcy5nZXRMYXRpdHVkZSgpLFxyXG4gICAgICAgICAgICBsb25naXR1ZGU6IGlzcy5nZXRMb25naXR1ZGUoKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmVzcG9uc2UucmVuZGVyKCdpbmRleCcpO1xyXG4gICAgfSk7XHJcbn0pO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvdXRlciJdfQ==
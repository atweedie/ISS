'use strict';

var _issLocation = require('./server/services/issLocation');

var _issLocation2 = _interopRequireDefault(_issLocation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var express = require('express');
var app = express();

app.use(express.static('app/public'));
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.render('index');
});

app.listen(8080);

(0, _issLocation2.default)();
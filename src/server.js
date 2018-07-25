import issLocation from './server/services/issLocation';

const express = require('express');
const app = express();

app.use(express.static('app/public'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('index');
});

app.listen(8080);

issLocation();

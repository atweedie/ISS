import tracker from './server/routes/tracker';

const express = require('express');
const app = express();

app.use(express.static('app/public'));
app.set('views', './build/app/views')
app.set('view engine', 'ejs');

app.use('/', tracker);

app.listen(8080);

console.log('Node server listening on port: 8080');

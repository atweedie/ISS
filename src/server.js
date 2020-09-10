import path from 'path';
import tracker from './server/routes/tracker';
import api from './server/routes/api';
import setupIssTracking from './server/controllers/setupIssTracking'

const viewDirectory = '/app/views';
const publicDirectory = '/app/public';

const express = require('express');
const app = express();
const iss = setupIssTracking();


app.use(express.static(path.join(__dirname, publicDirectory)));
app.set('views', path.join(__dirname, viewDirectory));
app.set('view engine', 'ejs');

app.use((request, response, next) => {
    response.locals.orbits = {iss};

    next();
})

app.use('/', tracker);

app.use('/api', api);

app.listen(8080);

console.log('Node server listening on port: 8080');

import path from 'path';
import tracker from './server/routes/tracker';

const viewDirectory = '/app/views';
const publicDirectory = '/app/public';

const express = require('express');
const app = express();

app.use(express.static(path.join(__dirname, publicDirectory)));
app.set('views', path.join(__dirname, viewDirectory));
app.set('view engine', 'ejs');

app.use('/', tracker);

app.listen(8080);

console.log('Node server listening on port: 8080');

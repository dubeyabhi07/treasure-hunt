/**
* Endpoint for tresure-hunt
*/
'use strict';

const express = require('express');
var path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const gconst = require('./utilities/constants.js');
const routes = require('./routes/routes.js');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
console.log(path.join(__dirname, 'resources'))
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'resources')));

routes(app);
app.listen(process.env.PORT, function() {
    console.log("Server for tresure-hunt, running on port :"+process.env.PORT);
});

module.exports = app;

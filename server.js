/**
 * @module server
 * @author Jerry Garcia
 * @desc Node JS server.js
 */

/** Node app enviroment */
const nodeEnv = process.env.NODE_ENV || 'development';
/** Environment configurations */
const envConfigs = require('./config/environments');
/** URL API */
const apiUrl = envConfigs[nodeEnv].API_URL;
/** Express instance */
const express = require('express');
/** Path instance */
const path = require('path');
/** Node app port */
const port = process.env.PORT || envConfigs[nodeEnv].API_PORT;
/** Express Server */
const app = require('./config/expressServer');
/** Init route */
const initRoute = require('./routes/init');
/** Users route */
const usersRoute = require('./routes/users');
/** Authentication route */
const authRoute = require('./routes/authentication');


/** Publishing public/ folder */
app.use(express.static(path.join(__dirname, 'public')));

/** App listening port */
app.listen(port);

/************************************************
 * Express routes                               *
 ************************************************/
app.use(initRoute);
app.use(usersRoute);
app.use(authRoute);
// jsdoc -c ./jsDoc.conf.json -t ./node_modules/ink-docstrap/template -d public/documentation -R README.md server.js package.json -r config/ routes/ 
//More http://docstrap.github.io/docstrap/themes/yeti/

console.log("API Listening at " + apiUrl + ':' + port);

module.exports = app; // for testing
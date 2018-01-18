/**
 * @module dbConnections
 * @author Jerry Garcia
 * @desc Mongoose connections module
 */

/** Mongoose dependency */
const mongoose = require('mongoose');
/** Node app enviroment */
const nodeEnv = process.env.NODE_ENV || 'development';
/** Environment configurations */
const dbConnections = require('./config/db');

/** MongoDB USERS connection chain  */
const usersConnectionChain = dbConnections[nodeEnv].MONGODB_USERS_URL;

/** Mongoose promises configuration  */
mongoose.Promise = global.Promise;

module.exports = {
  /** Mongoose USER connection object  */
  usersConnection: mongoose.createConnection(usersConnectionChain)
};
/**
 * @module models/error
 * @author Jerry Garcia
 * @desc error model
 */

/** Mongoose connections */
const connections = require('../dbConnections');
/** Mongoose dependency */
const mongoose = require('mongoose');
/** Mongoose schema object */
let Schema = mongoose.Schema;

let Error = {
  name: String,
  stacktrace: String
};

/** timestamps configurations */
var configs = {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
};

/** Error schema object*/
var errorSchema = new Schema(Error, configs);

/** Error model instance */
module.exports = connections.usersConnection.model('Error', errorSchema, 'errors');
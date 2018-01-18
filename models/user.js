/**
 * @module models/user
 * @author Jerry Garcia
 * @desc user model
 */

/** Mongoose connections */
const connections = require('../dbConnections');
/** Mongoose dependency */
const mongoose = require('mongoose');
/** Mongoose schema object */
let Schema = mongoose.Schema;

let User = {
  name: String,
  lastName: String,
  email: { type: String, unique: true },
  phone: String,
  address: String,
  socialNetworks: {},
  credentials : {}
};

/** timestamps configurations */
var configs = {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
};

/** User schema object*/
var userSchema = new Schema(User, configs);

/** User model instance */
module.exports = connections.usersConnection.model('User', userSchema, 'users');
/** 
 * @module controllers/authentication 
 * @author Jerry Garcia
 * @desc Authentication operations Controller  
 */

/** User Model  */
const User = require('../models/user');
/** User CRUD operations */
const UsersCrud = require('../models/crud/users');
/** API Errors */
const errors = require('../errors');
/** Authentication utils */
const authUtil = require('../utils/authentication');

/**
 * User authentication
 * @param {object} req -  Express Request object 
 * @param {object} res - Express Response object 
 * @return {array} user - User's object/ error response
 */
exports.authenticate = (req, res) => {
  if (!req.body || req.body.username === undefined || req.body.password === undefined) {
    return res.status(400).json(errors.badRequest);
  }
  const credentials = {
    "email": req.body.username,
    "credentials.password": req.body.password
  };
  const fields = ['name', 'lastName', 'email', 'credentials.password'];

  UsersCrud.authenticate(credentials, fields)
    .then((user) => {
      if (user !== null) {

        const token = authUtil.tokenGeneration(user);
        let userResponse = {
          name: user.name + ' ' + user.lastName,
          email: user.email,
          token: token
        };

        res.status(200).json(userResponse);
      } else {
        res.status(401).json(errors.wrongCredentials);
      }
    }, //Error
    (reason) => {
      errors.genericResponse.error.message = reason
      return res.status(400).send(errors.genericResponse);
    });
};
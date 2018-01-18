/**
 * @module utils/authentication
 * @author Jerry Garcia
 * @desc Authentication utils
 */

/** jsonwebtoken instance */
const jwt = require('jsonwebtoken');
/** User CRUD operations */
const UsersCRUD = require('../models/crud/users');
/**
 * User token validation
 * @param {object} req -  Express Request object 
 * @return {booelan} result - Validation result 
 */
exports.tokenValidation = (req, res) => {
  let result;
  let authBearerString = req.get('Authorization');
  if (authBearerString.indexOf('Bearer') == -1) return false;
  const token = authBearerString.replace('Bearer ', '');

  try {
    result = jwt.verify(token, 'shhhhh');
    const fields = ['name'];
    const credentials = {
      email: result.user.email,
      'credentials.password': result.user.credentials.password
    };
    //console.log(credentials)
    /* 
    UsersCRUD.authenticate(credentials, fields).then(function (exists) {
      return (exists != null);
    }, function (reason) {
      return false;
    });
    */
  } catch (error) {
    result = false;
  }
  return result;
};


/**
 * Token generation
 * @param {object}  -  User object
 * @return {object} token - Users encoded token
 */
exports.tokenGeneration = (source) => {
  let token = jwt.sign({
    user: source,
  }, 'shhhhh', {
      expiresIn: '1h',
    });
  return token;
};

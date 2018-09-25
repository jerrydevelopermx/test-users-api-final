/**
 * @module models/crud/users
 * @author Jerry Garcia
 * @desc User model CRUD operations
 */

/** User Model  */
const User = require('../user');
/** Error Model  */
const Error = require('../error');

/**
 * Find all Users 
 * @param {array} fields -  Fields of query to SELECT
 * @return {object} Promise - Resolve/reject Promise object with users list or error
 */
exports.findAll = (fields) => {
  let query = User.find({});
  query.select(fields.join(' '));
  return query.exec().then((regs) => {
    return (regs);
  },
    (reason) => {
      return ({ error: reason });
    });
};

/**
* Save User 
* @function
* @param {object} user -  User data object
* @return {object} prospect - Saved prospect object
*/
exports.save = (user) => {
  let UserResource = new User(user);
  return UserResource.save()
    .then((saved) => {
      return (saved);
    },
    (reason) => {
      return ({ error: reason });
    });
};

/**
 * Authenticate and get User Information
 * @param {array} fields -  Fields of query to SELECT
 * @return {object} Promise - Resolve/reject Promise object with users list or error
 */
exports.authenticate = (credentials, fields) => {
  let query = User.findOne(credentials);
  query.select(fields.join(' '));
  return query.exec().then((reg) => {
    return (reg);
  },
    (reason) => {
      return ({ error: reason });
    });
};

/**
 * Delets an User
 * @param {object} conditions -  User to delete
 * @return {object} Promise - Resolve/reject Promise object with users list or error
 */
exports.delete = (conditions) => {
  let query = User.remove(conditions);
  return query.exec().then((reg) => {
    return (reg);
  },
    (reason) => {
      return ({ error: reason });
    });
};

/**
 * Updates an User
 * @param {object} user -  Query conditions
 * @return {object} Promise - Resolve/reject Promise object with user object/error
 */
exports.update = (user) => {
  return User.update({ email: user.email }, user).then(() => {
    return (user);
  },
    (reason) => {
      return { error: reason };
    });
};




/**
 * Find all Errors 
 * @param {array} fields -  Fields of query to SELECT
 * @return {object} Promise - Resolve/reject Promise object with error list or error
 */
exports.findAllErrors = (fields) => {
  let query = Error.find({});
  query.select(fields.join(' '));
  return query.exec().then((regs) => {
    return (regs);
  },
    (reason) => {
      return ({ error: reason });
    });
};

/**
* Save Error 
* @function
* @param {object} error -  Error data object
* @return {object} error - Saved error object
*/
exports.saveError = (error) => {
  let ErrorResource = new Error(error);
  return ErrorResource.save()
    .then((saved) => {
      return (saved);
    },
    (reason) => {
      return ({ error: reason });
    });
};
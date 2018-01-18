/** 
 * @module controllers/users 
 * @author Jerry Garcia
 * @desc Users operations Controller  
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
 * Get All Users
 * @param {object} req -  Express Request object 
 * @param {object} res - Express Response object 
 * @return {array} users - Users array
 */
exports.getAllUsers = (req, res) => {
  //Auth token validation
  let validUser = authUtil.tokenValidation(req);
  if (!validUser) {
    return res.status(401).send(errors.unauthorized);
  }

  UsersCrud.findAll(['name', 'lastName', 'email', 'phone', 'address', 'socialNetworks'])
    .then((users) => {
      res.status(200).json(users);
    }, //Error
    (reason) => {
      errors.genericResponse.error.message = reason
      return res.status(400).send(errors.genericResponse);
    });
};


/**
 * Add User
 * @param {object} req -  Express Request object 
 * @param {object} res - Express Response object 
 * @return {object} reg - User object
 */
exports.add = (req, res) => {
  //Auth token validation
  let validUser = authUtil.tokenValidation(req);
  if (!validUser) {
    return res.status(401).send(errors.unauthorized);
  }

  if (!req.body || !req.body.name || !req.body.lastName || !req.body.email || !req.body.phone || !req.body.address ||
    !req.body.socialNetworks || !req.body.credentials) {
    return res.status(400).json(errors.badRequest);
  }

  const user = {
    name: req.body.name,
    lastName: req.body.lastName,
    email: req.body.email,
    phone: req.body.phone,
    address: req.body.address,
    socialNetworks: req.body.socialNetworks,
    credentials: req.body.credentials
  };

  UsersCrud.save(user)
    .then((reg) => {
      res.status(200).json(reg);
    }, //Error
    (reason) => {
      errors.genericResponse.error.message = reason
      return res.status(400).send(errors.genericResponse);
    });
};

/**
 * Delete User
 * @param {object} req -  Express Request object 
 * @param {object} res - Express Response object 
 * @return {object} reg - User object
 */
exports.delete = (req, res) => {
  //Auth token validation
  let validUser = authUtil.tokenValidation(req);
  if (!validUser) {
    return res.status(401).send(errors.unauthorized);
  }

  if (!req.params.email) {
    return res.status(400).json(errors.badRequest);
  }

  UsersCrud.delete({ email: req.params.email })
    .then((reg) => {
      res.status(200).json(reg);
    }, //Error
    (reason) => {
      errors.genericResponse.error.message = reason
      return res.status(400).send(errors.genericResponse);
    });
};

/**
 * Update User
 * @param {object} req -  Express Request object 
 * @param {object} res - Express Response object 
 * @return {object} reg - User object
 */
exports.update = (req, res) => {
  //Auth token validation
  let validUser = authUtil.tokenValidation(req);
  if (!validUser) {
    return res.status(401).send(errors.unauthorized);
  }

  if (!req.body || !req.body.name || !req.body.lastName || !req.params.email || !req.body.phone || !req.body.address ||
    !req.body.socialNetworks) {
    return res.status(400).json(errors.badRequest);
  }

  const user = {
    email: req.params.email,
    name: req.body.name,
    lastName: req.body.lastName,
    phone: req.body.phone,
    address: req.body.address,
    socialNetworks: req.body.socialNetworks
  };

  UsersCrud.update(user)
    .then((reg) => {
      res.status(200).json(reg);
    }, //Error
    (reason) => {
      errors.genericResponse.error.message = reason
      return res.status(400).send(errors.genericResponse);
    });
}


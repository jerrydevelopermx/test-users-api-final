/** 
 * @module errors
 * @author Jerry Garcia
 * @desc API errors
 */

/** Validations Messages dependency */
var messages = require('./messages');

module.exports = {
  /** Generic response error object */
  genericResponse: { error: { code: 500, message: '' } },
  /** Wrong arguments error object */
  badRequest: { error: { code: 400, message: messages.badRequestError } },
  /** Unauthorized error object */
  unauthorized: { error: { code: 401, message: messages.unauthorizedError } },
  /** Wron credentials error object */
  wrongCredentials: { error: { code: 401, message: messages.wrongUserCredentials } },
};

/**
 * @module config/db
 * @author Jerry Garcia
 * @desc App DB connections configurations file
 */

module.exports = {
  local: {
    MONGODB_USERS_URL: 'mongodb://compropago:j3rry@ds046367.mlab.com:46367/demo-tests',
  },

  development: {
    MONGODB_USERS_URL: 'mongodb://compropago:j3rry@ds046367.mlab.com:46367/demo-tests',
  },

  production: {
    MONGODB_USERS_URL: 'mongodb://compropago:j3rry@ds046367.mlab.com:46367/demo-tests',
  }
};
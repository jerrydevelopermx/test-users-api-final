/**
 * @module config/environments
 * @author Jerry Garcia
 * @desc App enviroments configurations file
 */

module.exports = {

  local: { 
    API_URL: 'http://localhost',
    API_PORT: '1349'
  },

  development: {
    API_URL: 'https://thawing-springs-94357.herokuapp.com',
    API_PORT: '5000'
  },

  staging: {
    API_URL: 'http://localhost',
    API_PORT: '1342'
  },

  production: {
    API_URL: 'http://localhost',
    API_PORT: '1342'
  }

};
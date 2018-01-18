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
    API_URL: 'https://glacial-plateau-68528.herokuapp.com',
    API_PORT: '5000'
  },

  staging: {
    API_URL: 'https://glacial-plateau-68528.herokuapp.com',
    API_PORT: '5000'
  },

  production: {
    API_URL: 'https://glacial-plateau-68528.herokuapp.com',
    API_PORT: '5000'
  }

};
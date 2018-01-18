/**
 * @module config/swagger
 * @author Jerry Garcia
 * @desc App Swagger specifications file
 */

/** Node app enviroment */
const nodeEnv = process.env.NODE_ENV || 'development';
/** Swagger JSDoc instance */
const swaggerJSDoc = require('swagger-jsdoc');
/** Environment configurations */
const envConfigs = require('./environments');
/** URL instance */
const url = require('url');

/** URL host */
const urlHost = url.parse(envConfigs[nodeEnv].API_URL).host;
/** API Port */
const apiPort = envConfigs[nodeEnv].API_PORT;

const swaggerDefinition = {
  info: {
    title: 'Jerry\'s Basic API',
    version: '1.0.0',
    description: 'API Documentation',
  },
  host: (urlHost == 'localhost') ? (urlHost + ':' + apiPort) : urlHost,
  basePath: '/',

  // Order of tags in UI
  tags: [ ],
};

/** Swagger options object */
const options = {
  // import swaggerDefinitions
  swaggerDefinition: swaggerDefinition,
  // path to the API docs
  apis: ['./routes/*.js'],
};
const specification = swaggerJSDoc(options);

/** Swagger specification */
module.exports = specification; 


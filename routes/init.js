/** 
 * @module routes/init 
 * @author Broxel Innovation Dev
 * @desc Init API routes  
 */

/** Swagger configurations */
const swagger = require('../config/swagger');
/** Express instance */
const express = require('express');
/** Express Router instance */
const router = express.Router();

// Init get
router.get('/', (req, res) => {
  res.send('Hola!!! Bienvenido, Jerry\'s API!!');
});
// serve swagger
router.get('/api/swagger.json', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(swagger);
});

module.exports = router;
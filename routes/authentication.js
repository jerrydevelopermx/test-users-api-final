/**
 * @module routes/authentication
 * @author Jerry Garcia
 * @desc Authentication routes
 */

 /** Express dependency */
 var express = require('express');
 /** Router dependency */
 var router = express.Router();
 /** authentication Layer */
 var authentication = require('../controllers/authentication');
 /** API login route*/
 var apiLoginRoute = '/api/authentication/login';

 /**
 * @swagger
 * definitions:
 *   UserLoginObject:
 *     properties:
 *       username:
 *         type: string
 *       password:
 *         type: string
 */
/**
 * @swagger
 * definitions:
 *   UserObject:
 *     properties: 
 *       userId:
 *         type: string
 *       name:
 *         type: string  
 *       email:
 *         type: string 
 *       password:
 *         type: string 
 *       status:
 *         type: number
 *       conversations:
 *         type: number
 *       deleted:
 *         type: boolean
 *       token: 
 *         type: string
 *         format: base64
 */
 /**
 * @swagger
 * /api/authentication/login:
 *   post:
 *     tags:
 *       - Authentication
 *     description: Authenticate an USER
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: User
 *         description: User object
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/UserLoginObject'
 *     responses:
 *       200:
 *         description: Successful request
 *         schema:
 *           $ref: '#/definitions/UserObject'
 *       400:
 *         description: Bad request
 *         schema:
 *           $ref: '#/definitions/error'
 *       401:
 *         description: Unauthorized access
 *         schema:
 *           $ref: '#/definitions/error'
 *       404:
 *         description: Resource not found
 *         schema:
 *           $ref: '#/definitions/error'
 */
router.post(apiLoginRoute, authentication.authenticate);

module.exports = router;
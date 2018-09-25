/** 
 * @module routes/users 
 * @author Jerry Garcia
 * @desc Users API routes  
 */

/** Express dependency */
const express = require('express');
/** Router dependency */
const router = express.Router();
/** Users controller */
const UsersCtrl = require('../controllers/users');
/** API users route*/
const usersRoute = '/api/users';
/** API users route*/
const usersEmailRoute = '/api/users/:email';
/** API errors route*/
const errorsRoute = '/api/errors';


/**
 * @swagger
 * definitions:
 *   error:
 *     properties:
 *       code:
 *         type: integer
 *       message:
 *         type: string
 */
 /**
 * @swagger
 * definitions:
 *   socialNetworks:
 *     properties:
 *       facebook:
 *         type: string
 *       twitter:
 *         type: string
 */
 /**
 * @swagger
 * definitions:
 *   credentials:
 *     properties:
 *       password:
 *         type: string
 */
/**
 * @swagger
 * definitions:
 *   User:
 *     properties: 
 *       name:
 *         type: string  
 *       lastName:
 *         type: string  
 *       email:
 *         type: string 
 *       phone:
 *         type: string 
 *       address:
 *         type: string
 *       socialNetworks:
 *         $ref: '#/definitions/socialNetworks'
 *       credentials:
 *         $ref: '#/definitions/credentials'
 * 
 */
/**
 * @swagger
 * definitions:
 *   ErrorObject:
 *     properties: 
 *       name:
 *         type: string  
 *       stacktrace:
 *         type: string  
 *       createdAt:
 *         type: string 
 * 
 */
/**
* @swagger
* definitions:
*   ErrorsArr:
*     type: array   
*     items: 
*       $ref: '#/definitions/ErrorObject'
*/


/**
* @swagger
* definitions:
*   Users:
*     type: array   
*     items: 
*       $ref: '#/definitions/User'
*/
/**
 * @swagger
 * /api/users:
 *   get:
 *     tags:
 *       - Users
 *     description: Get API Users
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: Authorization
 *         description: Bearer authorization string
 *         in: header
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Sucessful request
 *         schema:
 *           $ref: '#/definitions/Users'
 *       400:
 *         description: Bad request 
 *         schema:
 *           $ref: '#/definitions/error'
 *       401:
 *         description: Unauthorized access 
 *         schema:
 *           $ref: '#/definitions/error'
 *       404:
 *         description: User not found 
 *         schema:
 *           $ref: '#/definitions/error'
 */
router.get(usersRoute, UsersCtrl.getAllUsers);

/**
 * @swagger
 * /api/users:
 *   post:
 *     tags:
 *       - Users
 *     description: Saves User
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: Authorization
 *         description: Bearer authorization string
 *         in: header
 *         required: true
 *         type: string
 *       - name: User
 *         description: User object
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/User'
 *     responses:
 *       200:
 *         description: Sucessful request
 *         schema:
 *           $ref: '#/definitions/User'
 *       400:
 *         description: Bad request 
 *         schema:
 *           $ref: '#/definitions/error'
 *       401:
 *         description: Unauthorized access 
 *         schema:
 *           $ref: '#/definitions/error'
 *       404:
 *         description: User not found 
 *         schema:
 *           $ref: '#/definitions/error'
 */
router.post(usersRoute, UsersCtrl.add);

/**
 * @swagger
 * /api/users/{email}:
 *   delete:
 *     tags:
 *       - Users
 *     description: Saves User
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: Authorization
 *         description: Bearer authorization string
 *         in: header
 *         required: true
 *         type: string
 *       - name: email
 *         description: User email
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Sucessful request
 *         schema:
 *           $ref: '#/definitions/User'
 *       400:
 *         description: Bad request 
 *         schema:
 *           $ref: '#/definitions/error'
 *       401:
 *         description: Unauthorized access 
 *         schema:
 *           $ref: '#/definitions/error'
 *       404:
 *         description: User not found 
 *         schema:
 *           $ref: '#/definitions/error'
 */
router.delete(usersEmailRoute, UsersCtrl.delete);

/**
 * @swagger
 * /api/users/{email}:
 *   put:
 *     tags:
 *       - Users
 *     description: Updates User
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: Authorization
 *         description: Bearer authorization string
 *         in: header
 *         required: true
 *         type: string
 *       - name: email
 *         description: User email
 *         in: path
 *         required: true
 *         type: string
 *       - name: User
 *         description: User object
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/User'
 *     responses:
 *       200:
 *         description: Sucessful request
 *         schema:
 *           $ref: '#/definitions/User'
 *       400:
 *         description: Bad request 
 *         schema:
 *           $ref: '#/definitions/error'
 *       401:
 *         description: Unauthorized access 
 *         schema:
 *           $ref: '#/definitions/error'
 *       404:
 *         description: User not found 
 *         schema:
 *           $ref: '#/definitions/error'
 */
router.put(usersEmailRoute, UsersCtrl.update);

/**
 * @swagger
 * /api/errors:
 *   get:
 *     tags:
 *       - Errors
 *     description: Get logged errors
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Sucessful request
 *         schema:
 *           $ref: '#/definitions/ErrorsArr'
 *       400:
 *         description: Bad request 
 *         schema:
 *           $ref: '#/definitions/error'
 *       401:
 *         description: Unauthorized access 
 *         schema:
 *           $ref: '#/definitions/error'
 *       404:
 *         description: User not found 
 *         schema:
 *           $ref: '#/definitions/error'
 */
router.get(errorsRoute, UsersCtrl.getAllErrors);

/**
 * @swagger
 * /api/errors:
 *   post:
 *     tags:
 *       - Errors
 *     description: Saves Error
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: Error
 *         description: Error object
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/ErrorObject'
 *     responses:
 *       200:
 *         description: Sucessful request
 *         schema:
 *           $ref: '#/definitions/ErrorObject'
 *       400:
 *         description: Bad request 
 *         schema:
 *           $ref: '#/definitions/error'
 *       401:
 *         description: Unauthorized access 
 *         schema:
 *           $ref: '#/definitions/error'
 *       404:
 *         description: User not found 
 *         schema:
 *           $ref: '#/definitions/error'
 */
router.post(errorsRoute, UsersCtrl.addError);

module.exports = router;
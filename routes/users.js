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

module.exports = router;
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const appController = require('../controllers/appController');

router.post('/register', userController.registerUser);
router.post('/login',userController.loginUser);
router.post('/login-status',userController.loginStatus);
router.post('/forgot',userController.forgotPassword);
router.post('/verify',userController.verifyToken);
router.post('/contact',appController.contactDetails)

router.get('/getalluser', userController.getAllUser);

router.put('/reset',userController.resetUserByEmail)

router.delete('/delete', userController.deleteUserById);
router.delete('/logout',userController.deleteUserByToken);

module.exports = router;
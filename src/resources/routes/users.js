const express = require('express');
const router = express.Router();

const usersController = require('../controllers/UsersControllers')




router.get('/:id', usersController.getUserDetail)
router.get('/', usersController.getAllUsers)
router.post('/login', usersController.loginUser)
router.get('/store', usersController.storeUser)
router.post('/create', usersController.createUser)
router.delete('/:id', usersController.deleteUser)

module.exports = router;
const express = require('express')
const User = require('../models/User')
const UsersController = require('../controllers/users')
const router = express.Router()

// user authorize (pending)

// admin routes
router.get('/', UsersController.getUsers)
router.get('/:userId', UsersController.getUser)
router.post('/', UsersController.createUser)
router.put('/:userId', UsersController.updateUser)
router.put('/:userId/update-password', UsersController.updatePassword)
router.delete('/:userId', UsersController.deleteUser)

module.exports = router
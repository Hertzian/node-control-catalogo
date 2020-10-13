const express = require('express')
const User = require('../models/User')
const UsersController = require('../controllers/users')
const router = express.Router()

// user authorize (pending)

// routes
router.get('/', UsersController.getUsers)
router.get('/:userId', UsersController.getUser)
router.post('/', UsersController.createUser)
router.put('/:userId', UsersController.updateUser)
router.delete('/:userId', UsersController.deleteUser)

module.exports = router
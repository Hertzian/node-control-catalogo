const express = require('express')
const User = require('../models/User')
const UsersController = require('../controllers/users')
const router = express.Router()

// user authorize (pending)

router.get('/', UsersController.getUsers)


module.exports = router
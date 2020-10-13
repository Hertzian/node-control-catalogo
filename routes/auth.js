const express = require('express')
const AuthController = require('../controllers/auth')
const router = express.Router()

// routes
router.post('/', AuthController.register)

module.exports = router
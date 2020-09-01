const express = require('express')
const MaterialsController = require('../controllers/materials')
const router = express.Router()

// Routes
router.get('/', MaterialsController.getMaterials)


module.exports = router
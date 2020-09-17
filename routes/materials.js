const express = require('express')
const MaterialsController = require('../controllers/materials')
const router = express.Router()

// Routes
router.get('/', MaterialsController.getMaterials)
router.post('/', MaterialsController.addMaterial)


module.exports = router
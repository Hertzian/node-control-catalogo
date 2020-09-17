const express = require('express')
const MaterialsController = require('../controllers/materials')
const router = express.Router()

// Routes
router.get('/', MaterialsController.getMaterials)
router.get('/:materialId', MaterialsController.getMaterial)
router.post('/', MaterialsController.addMaterial)
router.delete('/:materialId', MaterialsController.deleteMaterial)


module.exports = router
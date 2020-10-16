const express = require('express')
const MaterialsController = require('../controllers/materials')
const router = express.Router()

// Routes
router.get('/', MaterialsController.getMaterials)
router.get('/:materialId', MaterialsController.getMaterial)
// admin routes
router.post('/', MaterialsController.addMaterial)
router.put('/:materialId', MaterialsController.updateMaterial)
router.delete('/:materialId', MaterialsController.deleteMaterial)


module.exports = router
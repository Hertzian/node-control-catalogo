const express = require('express')
const VolumesController = require('../controllers/volumes')
const router = express.Router()

// Routes
router.get('/:catalogId', VolumesController.getVolumes)
router.get('/:catalogId/:volumeId', VolumesController.getVolumeById)
router.get('/:catalogId/concept/:conceptId', VolumesController.getVolumeByConceptId)
router.post('/:catalogId/concept/:conceptId/material/:materialId', VolumesController.addVolumeToCatalogConceptMaterial)

module.exports = router
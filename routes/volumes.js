const express = require('express')
const VolumesController = require('../controllers/volumes')
const router = express.Router()

// Routes
router.get('/:catalogId', VolumesController.getVolumes)
router.get('/:catalogId/:volumeId', VolumesController.getVolumeById)
router.get('/:catalogId/:conceptId', VolumesController.getVolumeByConceptId)
router.post('/:catalogId/:conceptId/:materialId', VolumesController.addVolumeToCatalogConceptMaterial)

module.exports = router
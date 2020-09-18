const express = require('express')
const VolumesController = require('../controllers/volumes')
const router = express.Router()

// Routes
router.get('/catalog/:catalogId', VolumesController.getVolumes)
router.get('/catalog/:catalogId/:volumeId', VolumesController.getVolumeById)
router.get('/catalog/:catalogId/concept/:conceptId', VolumesController.getVolumeByConceptId)
router.post('/catalog/:catalogId/concept/:conceptId/material/:materialId', VolumesController.addVolumeToCatalogConceptMaterial)
router.put('/:volumeId', VolumesController.updateVolumeToCatalogConceptMaterial)
router.delete('/:volumeId', VolumesController.deleteVolumeFromCatalogConceptMaterial)

module.exports = router
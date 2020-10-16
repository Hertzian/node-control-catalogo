const express = require('express')
const ConceptVolumesController = require('../controllers/conceptVolumes')
const router = express.Router()

// Routes
router.get('/catalog/:catalogId/volume/:volumeId', ConceptVolumesController.getVolumeById)
router.get('/catalog/:catalogId/concept/:conceptId', ConceptVolumesController.getVolumeByConceptId)
// admin routes
router.post('/catalog/:catalogId/concept/:conceptId/material/:materialId', ConceptVolumesController.addVolumeToCatalogConceptMaterial)
router.put('/:volumeId', ConceptVolumesController.updateVolumeToCatalogConceptMaterial)
router.delete('/:volumeId', ConceptVolumesController.deleteVolumeFromCatalogConceptMaterial)

module.exports = router
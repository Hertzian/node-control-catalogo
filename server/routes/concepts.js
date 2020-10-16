const express = require('express')
const ConceptsController = require('../controllers/concepts')
const router = express.Router()

// Routes
router.get('/', ConceptsController.getConcepts)
router.get('/:conceptId', ConceptsController.getConceptById)
router.get('/catalog/:catalogId', ConceptsController.getConceptsByCatalogId)
// admin routes
router.post('/', ConceptsController.newConcept)
router.post('/:conceptId/materials', ConceptsController.addMaterial)
router.delete('/:conceptId', ConceptsController.deleteConcept)
router.delete('/:conceptId/materials/:materialId', ConceptsController.deleteMaterial)


module.exports = router
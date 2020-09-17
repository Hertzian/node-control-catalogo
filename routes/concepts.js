const express = require('express')
const ConceptsController = require('../controllers/concepts')
const router = express.Router()

// Routes
router.get('/', ConceptsController.getConcepts)
router.get('/:conceptId', ConceptsController.getConceptById)
router.post('/', ConceptsController.newConcept)
router.delete('/:conceptId', ConceptsController.deleteConcept)
router.post('/:conceptId/material/:materialId', ConceptsController.addMaterial)


module.exports = router
const express = require('express')
const ConceptsController = require('../controllers/concepts')
const router = express.Router()

// Routes
router.get('/', ConceptsController.getConcepts)
router.post('/', ConceptsController.newConcept)


module.exports = router
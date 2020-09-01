const express = require('express')
const ConceptsController = require('../controllers/concepts')
const router = express.Router()

// Routes
router.get('/', ConceptsController.getConcepts)


module.exports = router
const express = require('express')
const CatalogController = require('../controllers/catalogs')
const router = express.Router()

// Routes
router.get('/', CatalogController.getCatalogs)
router.get('/:catalogId', CatalogController.getCatalog)
router.post('/', CatalogController.newCatalog)
router.post('/:catalogId/add-concept', CatalogController.addConcept)
router.put('/:catalogId', CatalogController.updateCatalog)
router.delete('/:catalogId/concept/:conceptId', CatalogController.removeConcept)
router.delete('/:catalogId', CatalogController.removeCatalog)


module.exports = router


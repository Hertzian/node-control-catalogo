const express = require('express')
const CatalogController = require('../controllers/catalogs')
const router = express.Router()

// Routes
router.get('/', CatalogController.getCatalogs)
router.get('/:catalogId', CatalogController.getCatalog)
// admin routes
router.post('/', CatalogController.newCatalog)
router.put('/:catalogId', CatalogController.updateCatalog)
router.post('/:catalogId/add-concept', CatalogController.addConcept)
router.delete('/:catalogId', CatalogController.removeCatalog)
router.delete('/:catalogId/concept/:conceptId', CatalogController.removeConcept)


module.exports = router


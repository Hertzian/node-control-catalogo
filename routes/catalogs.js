const express = require('express')
const CatalogController = require('../controllers/catalogs')
const router = express.Router()

// Routes
router.get('/', CatalogController.getCatalogs)
router.post('/', CatalogController.newCatalog)


module.exports = router


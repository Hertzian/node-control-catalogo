const express = require('express')
const CatalogController = require('../controllers/catalogs')
const router = express.Router()

// Routes
router.get('/', CatalogController.getCatalogs)


module.exports = router


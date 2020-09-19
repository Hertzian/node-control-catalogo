const ErrorResponse = require('../util/errorResponse')
const asyncHandler = require('../middleware/asyncHandler')
const Catalog = require('../models/Catalog')
const Volume = require('../models/Volume')


// @desc    get all catalogs
// @route   GET /api/v1/catalogs/
// @access  private
exports.getCatalogs = asyncHandler(async (req, res, next) => {
  const catalogs = await Catalog.find({}, '_id name contest createdAt')

  res.status(200).json({
    success: true,
    data: catalogs
  })
})

// @desc    get catalog by id
// @route   GET /api/v1/catalogs/:catalogId
// @access  private
exports.getCatalog = asyncHandler(async (req, res, next) => {
  const catalogId = req.params.catalogId
  const catalog = await Catalog.findOne({_id: catalogId}, '_id name contest createdAt')
  const volumes = await Volume
    .find({catalog: catalogId}, '_id volume unit concept')
    .populate('concept', '_id name')

  res.status(200).json({
    success: true,
    data: {
      catalog,
      volumes
  }
  })
})

// @desc    new catalog
// @route   POST /api/v1/catalogs/
// @access  private
exports.newCatalog = asyncHandler(async (req, res, next) => {
  let catalog = await Catalog.create(req.body)

  res.status(201).json({
    success: true,
    data: catalog
  })
})

// @desc    add concept to catalog
// @route   POST /api/v1/catalogs/:catalogId/add-concept
// @access  private
exports.addConcept = asyncHandler(async (req, res, next) => {
  const catalogId = req.params.catalogId
  const concept = req.body.concept

  let catalog = await Catalog.findOne({_id: catalogId})
  catalog.concept.push(concept)
  catalog.save()

  res.status(201).json({
    success: true,
    data: catalog
  })
})

// @desc    remove concept from catalog
// @route   DELETE /api/v1/catalogs/:catalogId/remove-concept/:conceptId
// @access  private
exports.removeConcept = asyncHandler(async (req, res, next) => {
  const catalogId = req.params.catalogId
  const conceptId = req.params.conceptId

  let catalog = await Catalog.findOne({_id: catalogId})
  catalog.concept.pull(conceptId)
  catalog.save()

  res.status(201).json({
    success: true,
    data: catalog
  })
})

// @desc    remove entire catalog
// @route   DELETE /api/v1/catalogs/:catalogId
// @access  private
exports.removeCatalog = asyncHandler(async (req, res, next) => {
  const catalogId = req.params.catalogId

  let catalog = await Catalog.findOneAndDelete({_id: catalogId})

  res.status(201).json({
    success: true,
    data: catalog
  })
})
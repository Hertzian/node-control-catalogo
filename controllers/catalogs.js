const ErrorResponse = require('../util/errorResponse')
const asyncHandler = require('../middleware/asyncHandler')
const Catalog = require('../models/Catalog')


// @desc    get all catalogs
// @route   GET /api/v1/catalogs/
// @access  private
exports.getCatalogs = asyncHandler(async (req, res, next) => {
  const catalogs = await Catalog.find()

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
  const catalog = await Catalog.findOne({_id: catalogId}).populate('concept')
  
  res.status(200).json({
    success: true,
    data: catalog
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

  await catalog.save()

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
    data: {
      catalog,
    }
  })
})
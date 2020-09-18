const ErrorResponse = require('../util/errorResponse')
const asyncHandler = require('../middleware/asyncHandler')
const Catalog = require('../models/Catalog')
const Concept = require('../models/Concept')

// @desc    get all concepts
// @route   GET /api/v1/concepts/
// @access  private
exports.getConcepts = asyncHandler(async (req, res, next) => {
  const concepts = await Concept.find()

  res.status(200).json({
    success: true,
    data: concepts
  })
})

// @desc    get concept by id
// @route   GET /api/v1/concepts/:conceptId
// @access  private
exports.getConceptById = asyncHandler(async (req, res, next) => {
  const conceptId = req.params.conceptId
  const concept = await Concept
    .findOne({_id: conceptId})
    .populate('material', '_id name unit')

  res.status(200).json({
    success: true,
    data: concept
  })
})

// @desc    get concept by catalog id
// @route   GET /api/v1/concepts/catalog/:catalogId
// @access  private
exports.getConceptsByCatalogId = asyncHandler(async (req, res, next) => {
  const catalogId = req.params.catalogId

  const catalog = await Catalog
    .findById(catalogId, '_id name contest')
  
  const concepts = await Catalog
    .findOne({_id: catalogId})
    .populate({path: 'concept', select: 'name'})

  res.status(200).json({
    success: true,
    data: {
      catalog,
      concepts
    }
  })
})

// @desc    new concept
// @route   POST /api/v1/concepts/
// @access  private
exports.newConcept = asyncHandler(async (req, res, next) => {
  let concept = await Concept.create(req.body)

  res.status(201).json({
    success: true,
    data: concept
  })
})

// @desc    add material to concept
// @route   POST /api/v1/concepts/:conceptId/materials
// @access  private
exports.addMaterial = asyncHandler(async (req, res, next) => {
  const conceptId = req.params.conceptId
  const materialId = req.body.material

  let concept = await Concept.findOne({_id: conceptId})
  concept.material.push(materialId)
  await concept.save()

  res.status(201).json({
    success: true,
    data: concept
  })
})

// @desc    delete concept
// @route   DELETE /api/v1/concepts/:conceptId
// @access  private
exports.deleteConcept = asyncHandler(async (req, res, next) => {
  const conceptId = req.params.conceptId
  let conceptDelete = await Concept.findOneAndDelete(conceptId)

  res.status(201).json({
    success: true,
    data: conceptDelete
  })
})

// @desc    delete material from concept
// @route   DELETE /api/v1/concepts/:conceptId/materials/:materialId
// @access  private
exports.deleteMaterial = asyncHandler(async (req, res, next) => {
  const conceptId = req.params.conceptId
  const materialId = req.params.materialId
  console.log(conceptId, materialId)

  let concept = await Concept.findOne({_id: conceptId})
  concept.material.pull(materialId)
  await concept.save()

  res.status(201).json({
    success: true,
    data: concept
  })
})
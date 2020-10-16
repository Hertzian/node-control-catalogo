const ErrorResponse = require('../middleware/errorResponse')
const asyncHandler = require('../middleware/asyncHandler')
const Catalog = require('../models/Catalog')
const Concept = require('../models/Concept')
const ConceptVolume = require('../models/ConceptVolume')

// @desc    get all concepts
// @route   GET /api/v1/concepts/
// @access  private
exports.getConcepts = asyncHandler(async (req, res, next) => {
  const concepts = await Concept.find({}, '_id name number createdAt')

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
    .findById(conceptId, '_id name number')
    .populate('material', '_id name unit')

  res.status(200).json({
    success: true,
    data: concept
  })
})

// @desc    get all concepts by catalog id
// @route   GET /api/v1/concepts/catalog/:catalogId
// @access  private
exports.getConceptsByCatalogId = asyncHandler(async (req, res, next) => {
  const catalogId = req.params.catalogId

  const concepts = await Catalog
    .findOne({_id: catalogId}, '_id name contest concept')
    .populate({path: 'concept', select: 'name number'})

  res.status(200).json({
    success: true,
    data: concepts
  })
})

// @desc    new concept
// @route   POST /api/v1/concepts/
// @access  admin/private
exports.newConcept = asyncHandler(async (req, res, next) => {
  let concept = await Concept.create(req.body)

  res.status(201).json({
    success: true,
    data: concept
  })
})

// @desc    add material to concept
// @route   POST /api/v1/concepts/:conceptId/materials
// @access  admin/private
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
// @access  admin/private
exports.deleteConcept = asyncHandler(async (req, res, next) => {
  const conceptId = req.params.conceptId

  let concept = await Concept.findById(conceptId)

  if(!concept){
    return next(new ErrorResponse(`Concept ${conceptId} doesn't exists`, 404))
  }

  concept.remove()

  const volumes = await ConceptVolume.find({concept: conceptId})
  volumes.forEach(volume => volume.remove())

  const catalog = await Catalog.find({concept: conceptId})
  catalog.forEach(cat => {
    cat.concept.pull(conceptId)
    cat.save()  
  })

  res.status(201).json({
    success: true,
    data: {}
  })
})

// @desc    delete material from concept
// @route   DELETE /api/v1/concepts/:conceptId/materials/:materialId
// @access  admin/private
exports.deleteMaterial = asyncHandler(async (req, res, next) => {
  const conceptId = req.params.conceptId
  const materialId = req.params.materialId

  let concept = await Concept.findOne({_id: conceptId})
  concept.material.pull(materialId)
  concept.save()

  res.status(201).json({
    success: true,
    data: concept
  })
})
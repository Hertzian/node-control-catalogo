const ErrorResponse = require('../util/errorResponse')
const asyncHandler = require('../middleware/asyncHandler')
const ConceptVolume = require('../models/ConceptVolume')
const Concept = require('../models/Concept')
const Catalog = require('../models/Catalog')

// @desc    get all volumes from catalog
// @route   GET /api/v1/volumes/catalog/:catalogId
// @access  private
exports.getVolumes = asyncHandler(async(req, res, next) => {
  const catalogId = req.params.catalogId

  const catalog = await Catalog.findById(catalogId, '_id name contest')
  const volumes = await ConceptVolume
    .find({catalog: catalogId}, 'concept volume unit')
    .populate('concept', '_id name number')

  res.status(200).json({
    success: true,
    data: {
      catalog,
      volumes
    }
  })
})

// @desc    get volume by id
// @route   GET /api/v1/volumes/catalog/:catalogId/:volumeId
// @access  private
exports.getVolumeById = asyncHandler(async(req, res, next) => {
  const volumeId = req.params.volumeId

  const volume = await ConceptVolume.findOne({_id: volumeId})

  res.status(200).json({
    success: true,
    data: volume
  })
})

// @desc    get volume by concept id 
// @route   GET /api/v1/volumes/catalog/:catalogId/concept/:conceptId
// @access  private
exports.getVolumeByConceptId = asyncHandler(async(req, res, next) => {
  const catalogId = req.params.catalogId
  const conceptId = req.params.conceptId

  const concept = await Concept.findOne({_id: conceptId}, '_id name number')
  // const concept = await Concept.findOne({_id: conceptId}, '_id name number')
  const volume = await ConceptVolume
    .findOne({concept: conceptId, catalog: catalogId}, '_id volume unit')

  if (!concept || !volume) {
    return next(new ErrorResponse(`Concept ${conceptId} doesn't exist in catalog ${catalogId}`, 404));
  }

  res.status(200).json({
    success: false,
    data: {
      concept,
      volume
    }
  })
})

// @desc    add volume 
// @route   POST /api/v1/volumes/catalog/:catalogId/concept/:conceptId/material/:materialId
// @access  private
exports.addVolumeToCatalogConceptMaterial = asyncHandler(async(req, res, next) => {
  const catalogId = req.params.catalogId
  const conceptId = req.params.conceptId
  const materialId = req.params.materialId

  let volume = await ConceptVolume.create({
    catalog: catalogId,
    concept: conceptId,
    material: materialId,
    volume: req.body.volume,
    unit: req.body.unit
  })

  res.status(201).json({
    success: true,
    data: volume
  })
})

// @desc    update volume 
// @route   PUT /api/v1/volumes/:volumeId
// @access  private
exports.updateVolumeToCatalogConceptMaterial = asyncHandler(async(req, res, next) => {
  const volumeId = req.params.volumeId

  const volume = await ConceptVolume.findById(volumeId)

  let number = req.body.volume || volume.volume
  let unit = req.body.unit || volume.unit

  let updatedVolume = await ConceptVolume.findOneAndUpdate(
    {_id: volumeId},
    {
      volume: number,
      unit: unit
    },
    {new: true}
  )

  res.status(201).json({
    success: true,
    data: updatedVolume
  })
})

// @desc    delete volume 
// @route   DELETE /api/v1/volumes/:volumeId
// @access  private
exports.deleteVolumeFromCatalogConceptMaterial = asyncHandler(async(req, res, next) => {
  const volumeId = req.params.volumeId

  let volume = await ConceptVolume.findOneAndDelete({_id: volumeId})

  res.status(201).json({
    success: true,
    data: volume
  })
})
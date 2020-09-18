const ErrorResponse = require('../util/errorResponse')
const asyncHandler = require('../middleware/asyncHandler')
const Volume = require('../models/Volume')
const Concept = require('../models/Concept')
const Catalog = require('../models/Catalog')

// @desc    get all volumes from catalog
// @route   GET /api/v1/volumes/catalog/:catalogId
// @access  private
exports.getVolumes = asyncHandler(async(req, res, next) => {
  const catalogId = req.params.catalogId

  const volumes = await Volume.find({catalog: catalogId})

  res.status(200).json({
    success: true,
    data: volumes
  })
})

// @desc    get volume by id
// @route   GET /api/v1/volumes/catalog/:catalogId/:volumeId
// @access  private
exports.getVolumeById = asyncHandler(async(req, res, next) => {
  const volumeId = req.params.volumeId

  const volume = await Volume.findOne({_id: volumeId})

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

  const volume = await Volume
    .findOne({catalog: catalogId, concept: conceptId})
    .populate({path: 'concept', select: 'name number'})
    .populate({path: 'material', select: 'name unit'})

  res.status(200).json({
    success: false,
    data: volume
  })
})

// @desc    add volume 
// @route   POST /api/v1/volumes/catalog/:catalogId/concept/:conceptId/material/:materialId
// @access  private
exports.addVolumeToCatalogConceptMaterial = asyncHandler(async(req, res, next) => {
  const catalogId = req.params.catalogId
  const conceptId = req.params.conceptId
  const materialId = req.params.materialId

  let volume = await Volume.create({
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

// @desc    add volume 
// @route   PUT /api/v1/volumes/:volumeId
// @access  private
exports.updateVolumeToCatalogConceptMaterial = asyncHandler(async(req, res, next) => {
  const volumeId = req.params.volumeId

  const volume = await Volume.findById(volumeId)
  let number = req.body.volume || volume.volume
  let unit = req.body.unit || volume.unit

  let updatedVolume = await Volume.findOneAndUpdate(
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
  let volume = await Volume.findOneAndDelete({_id: volumeId})

  res.status(201).json({
    success: true,
    data: volume
  })
})
const ErrorResponse = require('../util/errorResponse')
const asyncHandler = require('../middleware/asyncHandler')
const Volume = require('../models/Volume')
const Concept = require('../models/Concept')
const Catalog = require('../models/Catalog')

// @desc    get all volumes from catalog
// @route   GET /api/v1/volumes/:catalogId
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
// @route   GET /api/v1/volumes/:catalogId/:volumeId
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
// @route   GET /api/v1/volumes/:catalogId/concept/:conceptId
// @access  private
exports.getVolumeByConceptId = asyncHandler(async(req, res, next) => {
  const catalogId = req.params.catalogId
  const conceptId = req.params.conceptId

  const volume = await Volume
    .findOne({catalog: catalogId, concept: conceptId})
    .populate('concept material')

  res.status(200).json({
    success: false,
    data: volume
  })
})

// @desc    add volume 
// @route   POST /api/v1/volumes/:catalogId/concept/conceptId/material/:materialId
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

// @desc    delete volume 
// @route   DELETE /api/v1/volumes/:catalogId/conceptId/:materialId
// @access  private
exports.addVolumeToCatalogConceptMaterial = asyncHandler(async(req, res, next) => {
  const catalogId = req.params.catalogId
  const conceptId = req.params.conceptId
  const materialId = req.params.materialId

  let volume = await Volume.findOneAndDelete({
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
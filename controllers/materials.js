const ErrorResponse = require('../util/errorResponse')
const asyncHandler = require('../middleware/asyncHandler')
const Material = require('../models/Material')

// @desc    get materials
// @route   GET /api/v1/materials
// @access  private
exports.getMaterials = asyncHandler(async (req, res, next) => {
  const materials = await Material.find()

  res.status(200).json({
    success: true,
    data: materials
  })
})

// @desc    get material by id
// @route   GET /api/v1/materials/:materialId
// @access  private
exports.getMaterial = asyncHandler(async (req, res, next) => {
  const materialId = req.params.materialId
  const material = await Material.findOne({_id: materialId})

  res.status(200).json({
    success: true,
    data: material
  })
})

// @desc    new material
// @route   POST /api/v1/materials
// @access  private
exports.addMaterial = asyncHandler(async(req, res, next) => {
  let material = await Material.create(req.body)

  res.status(201).json({
    success: true,
    data: material
  })
})

// @desc    delete material
// @route   DELETE /api/v1/materials/:materialId
// @access  private
exports.deleteMaterial = asyncHandler(async(req, res, next) => {
  const materialId = req.params.materialId
  let material = await Material.findOneAndDelete(materialId)

  res.status(201).json({
    success: true,
    data: material
  })
})




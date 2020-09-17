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


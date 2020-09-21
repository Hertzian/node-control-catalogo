const ErrorResponse = require('../util/errorResponse')
const asyncHandler = require('../middleware/asyncHandler')
const Material = require('../models/Material')

// @desc    get materials
// @route   GET /api/v1/materials
// @access  private
exports.getMaterials = asyncHandler(async (req, res, next) => {
  const materials = await Material.find()

  if(!materials){
    return next(new ErrorResponse(`There are not materials found`, 404))
  }

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
  const material = await Material.findById(materialId)

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
  const material = await Material.findById(materialId)

  if(!material){
    return next(new ErrorResponse(`Material ${materialId} not found`, 404))
  }

  material.remove()

  res.status(201).json({
    success: true,
    data: material
  })
})




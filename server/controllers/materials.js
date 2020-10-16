const ErrorResponse = require('../middleware/errorResponse')
const asyncHandler = require('../middleware/asyncHandler')
const Material = require('../models/Material')
const Concept = require('../models/Concept')

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
// @access  admin/private
exports.addMaterial = asyncHandler(async(req, res, next) => {
  const material = await Material.create(req.body)

  res.status(201).json({
    success: true,
    data: material
  })
})

// @desc    update material
// @route   PUT /api/v1/materials/:materialId
// @access  admin/private
exports.updateMaterial = asyncHandler(async(req, res, next) => {
  const materialId = req.params.materialId
  let material = await Material.findOne({_id: materialId})

  if(!material){
    return next(new ErrorResponse(`Doesn't exists material with id of ${materialId}`, 404))
  }

  material = await Material.findByIdAndUpdate(materialId, req.body, {
    new: true,
    runValidators: true
  })

  res.status(200).json({
    success: true,
    data: material
  })
})

// @desc    delete material
// @route   DELETE /api/v1/materials/:materialId
// @access  admin/private
exports.deleteMaterial = asyncHandler(async(req, res, next) => {
  const materialId = req.params.materialId
  const material = await Material.findById(materialId)

  if(!material){
    return next(new ErrorResponse(`Material ${materialId} not found`, 404))
  }

  material.remove()

  let concept = await Concept.find({material: materialId})
  concept.forEach(con => {
    con.material.pull(materialId)
    con.save()
  })

  res.status(201).json({
    success: true,
    data: {}
  })
})




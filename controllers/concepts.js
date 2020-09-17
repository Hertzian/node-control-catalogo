const ErrorResponse = require('../util/errorResponse')
const asyncHandler = require('../middleware/asyncHandler')
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
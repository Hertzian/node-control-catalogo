const Concept = require('../models/Concept')

// @desc    get all concepts
// @route   GET /api/v1/concepts/
// @access  private
exports.getConcepts = async (req, res, next) => {
  try {
    const concepts = await Concept.find()

    res.status(200).json({
      success: true,
      data: concepts
    })
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err
    })
  }
}

// @desc    new concept
// @route   POST /api/v1/concepts/
// @access  private
exports.newConcept = async (req, res, next) => {
  try {
    let concept = await Concept.create(req.body)

    res.status(201).json({
      success: true,
      data: concept
    })
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err
    })
  }
}
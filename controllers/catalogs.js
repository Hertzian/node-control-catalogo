const Catalog = require('../models/Catalog')

// @desc    get all catalogs
// @route   GET /api/v1/catalogs/
// @access  private
exports.getCatalogs = async (req, res, next) => {
  try {
    const catalogs = await Catalog.find()

    res.status(200).json({
      success: true,
      data: catalogs
    })
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err
    })    
  }
}

// @desc    new catalog
// @route   POST /api/v1/catalogs/
// @access  private
exports.newCatalog = async (req, res, next) => {
  try {
    let catalog = await Catalog.create(req.body)

    res.status(201).json({
      success: true,
      data: catalog
    })
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err
    })
  }

}
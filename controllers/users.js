// this is the users controller :D
const User = require('../models/User')

// @desc    get users
// @route   GET /api/v1/users
// @access  private
exports.getUsers = (req, res, next) => {
  console.log('hello')

  res.status(200).json({
    success: true,
    data: 'hello'
  })
}

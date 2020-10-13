const crypto = require('crypto')
const ErrorResponse = require('../util/errorResponse')
const asyncHandler = require('../middleware/asyncHandler')
const User = require('../models/User')

// @desc    register user
// @route   POST /api/v1/auth/register
// @access  admin
exports.register = asyncHandler(async ( req, res, next) => {
  const {name, email, password, role} = req.body

  const user = await User.create({
    name,
    email,
    password,
    role
  })
}) 
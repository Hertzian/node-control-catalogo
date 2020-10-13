const crypto = require('crypto')
const ErrorResponse = require('../middleware/errorResponse')
const asyncHandler = require('../middleware/asyncHandler')
const sendTokenResponse = require('../middleware/tokenResponseHandler')
const User = require('../models/User')

// @desc    register user
// @route   POST /api/v1/auth/register
// @access  admin
exports.register = asyncHandler(async ( req, res, next) => {
  const {name, email, password, role} = req.body

  const user = await User.create({name, email, password, role})

  sendTokenResponse(user, 200, res)
})

// @desc    login user
// @route   POST /api/v1/auth/login
// @access  public
exports.login = asyncHandler(async (req, res, next) => {
  const {email, password} = req.body

  // validate email & password
  if(!email || !password) return next(new ErrorResponse('Es necesario email y password', 400))

  // check for user
  const user = await User.findOne({email}).select('+password')

  if(!user) return next(new ErrorResponse('Credenciales no válidas', 401))

  // check if password matches
  const isMatch = await user.matchPassword(password)

  if(!isMatch) return next(new ErrorResponse('Credenciales no válidas', 401))

  sendTokenResponse(user, 200, res)
})


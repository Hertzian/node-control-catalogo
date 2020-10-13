const asyncHandler = require('../middleware/asyncHandler')
const ErrorResponse = require('../util/errorResponse')
const bcrypt = require('bcryptjs')
const User = require('../models/User')

// @desc    get all users
// @route   GET /api/v1/users
// @access  private/admin
exports.getUsers = asyncHandler(async (req, res, next) => {
  const users = await User.find()

  res.status(200).json({
    success: true,
    data: users
  })
})

// @desc    get single user
// @route   GET /api/v1/auth/users/:userId
// @access  private/admin
exports.getUser = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.params.userId)

  res.status(200).json({
    success: true,
    data: user
  })
})


// @desc    create user
// @route   POST /api/v1/auth/users
// @access  private/admin
exports.createUser = asyncHandler(async (req, res, next) => {
  const user = await User.create(req.body)

  res.status(200).json({
    success: true,
    // data: user
    data: 'Usuario creado'
  })
})

// @desc    edit user
// @route   PUT /api/v1/auth/users/:userId
// @access  private/admin
exports.updateUser = asyncHandler(async (req, res, next) => {
  const user = await User.findByIdAndUpdate(req.params.userId, req.body.name, {
    new: true,
    runValidators: true
  })

  console.log(user)

  res.status(200).json({
    success: true,
    data: user
  })
})

// @desc    delete user
// @route   DELETE /api/v1/auth/users/:userId
// @access  private/admin
exports.deleteUser = asyncHandler(async (req, res, next) => {
  await User.findByIdAndDelete(req.params.userId)

  res.status(200).json({
    success: true,
    data: {}
  })
})
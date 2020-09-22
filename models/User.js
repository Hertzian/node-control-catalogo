const crypto = require('crypto')
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {promises} = require('fs')

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add name']
  },
  email: {
    type: String,
    required: [true, 'Please add an email'],
    unique: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Please add a valid email'
    ]
  },
  role: {
    type: String,
    enum: ['admin', 'user'],
    default: 'user'
  },
  password: {
    type: String,
    required: [true, 'Please add password'],
    minlength: 8
  },
  resetPasswordToken: String,
  resetPasswordExpire: Date,
  createdAt: {
      type: Date,
      default: Date.now
  }
})

// encrypt password
UserSchema.pre('save', async function(next) {
  if(!this.isModified('password'))next()

  // gensalt returns a promise
  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)
})

// sign jwt and return
UserSchema.methods.getSignedJwtToken = function () {
  return jwt.sign(
    {id: this._id},
    process.env.JWT_SECRET,
    {expiresIn: process.env.JWT_EXPIRE}
  )
}

// Match user entered password to hashed password in db
UserSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password)
}

// generate and hash password token
UserSchema.methods.getResetPasswordToken = function() {
  // generate token
  const resetToken = crypto.randomBytes(20).toString('hex')

  // hash token and set to resetPasswordToken field
  this.resetpassword = crypto
    .createHash('sha256')
    .update(resetToken)
    .digest('hex')

  // set expire
  this.resetPasswordExpire = Date.now() + 10 * 60 * 1000

  return resetToken
}

module.exports = mongoose.model('User', UserSchema)
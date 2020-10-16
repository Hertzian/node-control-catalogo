const sendTokenResponse = (user, statusCode, res) => {
  // create token
  const token = user.getSignedJwtToken()

  // options to process cookie parser
  const options = {expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 *100)}

  // secure flag in cookie for production 
  if(process.env.NODE_ENV === 'production') options.secure = true

  // return & cookie
  res
    .status(statusCode)
    .cookie('token', token, options)
    .json({success: true, token})
}

module.exports = sendTokenResponse
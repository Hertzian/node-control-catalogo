const ErrorResponse = require('./errorResponse')

const errorHandler = (err, req, res, next) => {
  let error = {...err}

  error.message = err.message

  // log console for dev
  console.log(err)

  // mongoose bad objectId
  if(err.name === 'CastError'){
    const message = 'Recurso no encontrado'
    error = new ErrorResponse(message, 404)
  }

  // mongoose duplicate key
  if(err.code === 11000){
    const message = 'Valor duplicado'
    error = new ErrorResponse(message, 400)
  }

  // validation errors
  if(err.name === 'ValidationError'){
    const message = Object.values(err.errors).map(val => val.message)
    error = new ErrorResponse(message, 400)
  }

  res.status(error.statusCode || 500).json({
    success: false,
    error: error.message || 'Server Error :('
  })
}

module.exports = errorHandler
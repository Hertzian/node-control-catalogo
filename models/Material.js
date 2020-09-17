const mongoose = require('mongoose')

const MaterialSchema = new mongoose.Schema({
  name: {
    type: String
  },
  unit: {
    type: String
  },
  // number: {
  //   type: String
  // },
  createdAt:{
    type: Date,
    default: Date.now()
  }
})

module.exports = mongoose.model('Material', MaterialSchema)
const mongoose = require('mongoose')

const MaterialSchema = new mongoose.Schema({
  name: {
    type: String
  },
  number: {
    type: String
  },
  concept: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Concept'
    }
  ],
  createdAt:{
    type: Date,
    default: Date.now()
  }
})

module.exports = mongoose.model('Material', MaterialSchema)
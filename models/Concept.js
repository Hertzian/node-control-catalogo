const mongoose = require('mongoose')

const ConceptSchema = new mongoose.Schema({
  name: {
    type: String
  },
  number: {
    type: String
  },
  material: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Material'
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now()
  }
})

module.exports = mongoose.model('Concept', ConceptSchema)
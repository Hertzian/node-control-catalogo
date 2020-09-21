const mongoose = require('mongoose')

const ConceptVolumeSchema = new mongoose.Schema({
  catalog: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Catalog'
  },
  concept: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Concept'
  },
  material: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Material'
  },
  volume: {
    type: Number
  },
  unit: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
})

module.exports = mongoose.model('Volume', ConceptVolumeSchema)
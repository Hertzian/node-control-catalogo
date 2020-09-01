const mongoose = require('mongoose')

const CatalogSchema = new mongoose.Schema({
  name: {
    type: String
  },
  contest: {
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

module.exports = mongoose.model('Catalog', CatalogSchema)
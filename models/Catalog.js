const mongoose = require('mongoose')

const CatalogSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Es necesario un nombre']
  },
  contest: {
    type: String,
    required: [true, 'Necesita un numero de catalogo/concurso']
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
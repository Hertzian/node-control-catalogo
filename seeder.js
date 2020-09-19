const fs = require('fs')
const mongoose = require('mongoose')
const dotenv = require('dotenv')

// load env vars
dotenv.config({path: './config/config.env'})

// load models
const Catalog = require('./models/Catalog')
const Concept = require('./models/Concept')
const Material = require('./models/Material')
const Volume = require('./models/Volume')

// conect to db
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true
})

// read JSON files 
const catalogs = JSON.parse(fs.readFileSync(`${__dirname}/_dummyData/catalogs.json`, 'utf-8'))
const concepts = JSON.parse(fs.readFileSync(`${__dirname}/_dummyData/concepts.json`, 'utf-8'))
const materials = JSON.parse(fs.readFileSync(`${__dirname}/_dummyData/materials.json`, 'utf-8'))
const volumes = JSON.parse(fs.readFileSync(`${__dirname}/_dummyData/volumes.json`, 'utf-8'))

// import to db
const imporData = async () => {
  try {
    await Catalog.create(catalogs)
    await Concept.create(concepts)
    await Material.create(materials)
    await Volume.create(volumes)

    console.log('Data imported')
    process.exit()
  } catch (err) {
    console.log(err)
  }
}

// delete from db
const deleteData = async () => {
  try {
    await Catalog.deleteMany()
    await Concept.deleteMany()
    await Material.deleteMany()
    await Volume.deleteMany()

    console.log('Data destroyed')
    process.exit()
  } catch (err) {
    console.log(err)
  }
}

// pasing args by console...
if(process.argv[2] === '-i'){
  imporData()
}else if(process.argv[2] === '-d'){
  deleteData()
}
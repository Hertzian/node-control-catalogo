const path = require('path')
const express = require('express')
const dotenv = require('dotenv')
dotenv.config({path: './config/config.env'})
const connectDB = require('./config/db')
const errorHandler = require('./middleware/errorHandler')

// connect DB
connectDB()

// express
const app = express()

// body parser
app.use(express.json())

// mount routes
const catalogs = require('./routes/catalogs')
const concepts = require('./routes/concepts')
const materials = require('./routes/materials')
const volumes = require('./routes/volumes')

// route use
app.use('/api/v1/catalogs', catalogs)
app.use('/api/v1/concepts', concepts)
app.use('/api/v1/materials', materials)
app.use('/api/v1/volumes', volumes)

// error handler
app.use(errorHandler)

const PORT = process.env.PORT

app.listen(PORT, console.log(`Server running on port: ${PORT}`))
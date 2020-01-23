const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const authRoutes = require('./routes/auth')
const carRoutes = require('./routes/car')
const orderRoutes = require('./routes/order')
const keys = require('./config/keys')

const app = express()

mongoose.connect(keys.mongoURI, { useNewUrlParser: true,  useUnifiedTopology: true} )
    .then(() => console.log('MongoDB connected'))
    .catch(error => console.log(error))


app.use(require('morgan')('dev'))
app.use(bodyParser.urlencoded( {extended: true} ))
app.use(bodyParser.json())
app.use(require('cors')())

app.use('/api/auth', authRoutes)
app.use('/api/car', carRoutes)
app.use('/api/order', orderRoutes)

module.exports = app
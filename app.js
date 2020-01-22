const express = require('express')
const bodyParser = require('body-parser')
const authRoutes = require('./routes/auth')
const carRoutes = require('./routes/car')
const orderRoutes = require('./routes/order')

const app = express()

app.use(require('morgan')('dev'))
app.use(bodyParser.urlencoded( {extended: true} ))
app.use(bodyParser.json())
app.use(require('cors')())

app.use('/api/auth', authRoutes)
app.use('/api/car', carRoutes)
app.use('/api/order', orderRoutes)

module.exports = app
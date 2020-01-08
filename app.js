const express = require('express')
const authRoutes = require('./routes/auth')
const carRoutes = require('./routes/car')

const app = express()

app.use('/api/auth', authRoutes)
app.use('/api/car', carRoutes)

module.exports = app
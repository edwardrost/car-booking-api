const mongoose = require('mongoose')
const Schema = mongoose.Schema
const carSchema = new Schema({
    carName: {
        type: String,
        required: true
    },
    carModel: {
        type: String,
        required: true
    },
    carImage: {
        type: String,
        default: ''
    },
    carAvailable: {
        type: String,
        default: 'true'
    },
    user: {
        ref: 'users',
        type: Schema.Types.ObjectId
    }
})

module.exports = mongoose.model('cars', carSchema)
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const orderSchema = new Schema({
    fromDate: {
        type: Date,
        default: Date.now,
        required: true
    },
    toDate: {
        type: Date,
        default: Date.now,
        required: true
    },
    order: {
        type: Number,
        required: true
    },
    car: {
        ref: 'cars',
        type: Schema.Types.ObjectId
    },
    user: {
        ref: 'users',
        type: Schema.Types.ObjectId
    },
    approved: {
        type: Boolean,
        default: false
    }

})

module.exports = mongoose.model('orders', orderSchema)
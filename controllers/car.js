const Car = require('../models/Car')
const errorHandler = require('../utils/errorHandler')

module.exports.getAll = async function(req, res) {
    try {
        const cars = await Car.find({
            user: req.user.id
        })
        res.status(200).json(cars)
    } catch (e) {
        errorHandler(res, e)
    }
}

module.exports.create = async function(req, res) {
    try {
        const car = await new Car({
            carName: req.body.carName,
            carModel: req.body.carModel,
            carImage: req.file ? req.file.path : '',
            carAvailable: req.body.carAvailable,
            user: req.user.id
        }).save()
        res.status(201).json(car)
    } catch (e) {
        errorHandler(res, e)
    }
}

module.exports.getById = async function(req, res) {
    try {
        const car = await Car.findById(req.params.id)
        res.status(200).json(car)
    } catch (e) {
        errorHandler(res, e)
    }
}

module.exports.update = async function(req, res) {
    try {
        const car = await Car.findOneAndUpdate(
            {_id: req.params.id},
            {$set: req.body},
            {new: true}
        )
        res.status(200).json(car)
    } catch (e) {
        errorHandler(res, e)
    }
}

module.exports.remove = async function(req, res) {
    try {
        await Car.remove({_id: req.params.id})
        res.status(200).json({
            message: 'Позиция была удалена'
        })
    } catch (e) {
        errorHandler(res, e)
    }
}
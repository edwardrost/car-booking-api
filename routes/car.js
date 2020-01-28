const express = require('express')
const passport = require('passport')
const upload = require('../middleware/upload')
const controller = require('../controllers/car')
const router = express.Router()

// localhost:5000/api/car
router.get('/', passport.authenticate('jwt', {session: false}), controller.getAll)

// localhost:5000/api/car
router.post('/', passport.authenticate('jwt', {session: false}), upload.single('carImage'), controller.create)

// localhost:5000/api/car/:id
router.get('/:id', controller.getById)

// localhost:5000/api/car/:id
router.patch('/:id', passport.authenticate('jwt', {session: false}), upload.single('carImage'), controller.update)

// localhost:5000/api/car/:id
router.delete('/:id', controller.remove)

module.exports = router


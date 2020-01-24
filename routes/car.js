const express = require('express')
const controller = require('../controllers/car')
const passport = require('passport')
const router = express.Router()

// localhost:5000/api/car
router.get('/', passport.authenticate('jwt', {session: false}), controller.getAll)

// localhost:5000/api/car
router.post('/', controller.create)

// localhost:5000/api/car/:id
router.get('/:id', controller.getById)

// localhost:5000/api/car/:id
router.patch('/:id', controller.update)

// localhost:5000/api/car/:id
router.delete('/:id', controller.remove)

module.exports = router


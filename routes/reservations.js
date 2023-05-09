const express = require('express')
const { getReservations } = require('../controller/reservations')

const router = express.Router()

router.get('/', getReservations)

module.exports = router

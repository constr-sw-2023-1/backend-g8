const express = require('express')
const {
  getReservations,
  createReservation,
  getReservation,
  updateReservation,
  patchReservation,
  deleteReservation,
} = require('../controller/reservations')

const router = express.Router()

router.route('/').get(getReservations).post(createReservation)

router
  .route('/:id')
  .get(getReservation)
  .put(updateReservation)
  .patch(patchReservation)
  .delete(deleteReservation)

module.exports = router

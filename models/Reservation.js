const mongoose = require('mongoose')

const ReservationSchema = new mongoose.Schema({
  dateSchedule: [
    {
      day: Date,
      hour: String,
      shift: String,
    },
  ],
  dateReservationBegin: [
    {
      day: Date,
      hour: Date,
      shift: String,
    },
  ],
  dateReservationEnd: [
    {
      day: Date,
      hour: Date,
      shift: String,
    },
  ],
  resourceId: { type: mongoose.Schema.Types.ObjectId, ref: 'Resources' },
})

module.exports = mongoose.model('Reservation', ReservationSchema)

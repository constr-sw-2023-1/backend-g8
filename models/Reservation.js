const mongoose = require('mongoose')

const ReservationSchema = new mongoose.Schema({
  dateSchedule: {
    date: {
      type: Date,
      default: Date.now,
      required: [true, 'Adicione uma data'],
    },
    shift: String,
  },
  dateReservationBegin: {
    date: { type: Date, required: [true, 'Adicione uma data'] },
    shift: String,
  },
  dateReservationEnd: {
    date: {
      type: Date,
      default: Date.now,
      required: [true, 'Adicione uma data'],
    },
    shift: String,
  },
  //resourceId: { type: mongoose.Schema.Types.ObjectId, ref: 'Resources' },
})

module.exports = mongoose.model('Reservation', ReservationSchema)

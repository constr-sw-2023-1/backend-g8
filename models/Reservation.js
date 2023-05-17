const mongoose = require('mongoose')

const ReservationSchema = new mongoose.Schema(
  {
    dateReservationBegin: {
      date: { type: Date, required: [true, 'Adicione uma data'] },
      shift: String,
    },
    dateReservationEnd: {
      date: {
        type: Date,
        required: [true, 'Adicione uma data'],
      },
      shift: String,
    },
    resource: {
      resourceId: { type: Number },
      resourceName: { type: String },
    },
    class: {
      classId: { type: Number },
      className: { type: String },
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model('Reservation', ReservationSchema)

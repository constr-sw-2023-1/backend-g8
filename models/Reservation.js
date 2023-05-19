const mongoose = require('mongoose')

const ReservationSchema = new mongoose.Schema(
  {
    dateReservationBegin: { type: Date, required: [true, 'Adicione uma data'] },
    dateReservationEnd: { type: Date, required: [true, 'Adicione uma data'] },
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

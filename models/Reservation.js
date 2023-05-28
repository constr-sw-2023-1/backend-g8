const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const ReservationSchema = new mongoose.Schema(
  {
    _id: {
      type: String,
      default: uuidv4,
    },
    dateReservationBegin: { type: Date, required: [true, "Adicione uma data"] },
    dateReservationEnd: { type: Date, required: [true, "Adicione uma data"] },
    resource: {
      type: String,
      ref: "Resource",
      required: true,
    },
    class: {
      type: String,
      ref: "Class",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Reservation", ReservationSchema);

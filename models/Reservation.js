const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const ReservationSchema = new mongoose.Schema(
  {
    _id: {
      type: String,
      default: uuidv4,
    },
    dateReservationBegin: {
      type: Date,
      required: [true, "Adicione uma data"],
    },
    dateReservationEnd: {
      type: Date,
      required: [true, "Adicione uma data"],
    },
    resource: {
      _id: {
        type: String,
        required: true,
      },
      description: String,
    },
    class: {
      _id: {
        type: String,
        required: true,
      },
      numClass: String,
    },
    active: {
      type: Boolean,
      default: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Reservation", ReservationSchema);

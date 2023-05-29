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
      resourceName: String,
    },
    class: {
      _id: {
        type: String,
        required: true,
      },
      numClass: String,
      schedule: String,
      userName: String,
    },
    active: {
      type: Boolean,
      default: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Reservation", ReservationSchema);

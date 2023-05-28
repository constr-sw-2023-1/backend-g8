const mongoose = require("mongoose");

const ClassSchema = new mongoose.Schema({
  numClass: String,
  schedule: String,
  userName: String,
});

module.exports = mongoose.model("Class", ClassSchema);

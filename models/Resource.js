const mongoose = require("mongoose");

const ResourceSchema = new mongoose.Schema({
  resourceName: String,
});

module.exports = mongoose.model("Resource", ResourceSchema);

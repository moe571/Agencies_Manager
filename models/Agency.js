const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const AgencySchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  address: {
    type: String,
    required: true,
  },
  wilaya: {
    type: String,
    required: true,
  },
  commune: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  register_date: {
    type: Date,
    default: Date.now,
  },
});
module.exports = agency = mongoose.model("agency", AgencySchema);

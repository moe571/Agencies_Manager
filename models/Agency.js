const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const AgencySchema = new Schema({
  name: {
    type: String,
    trim: true,
  },
  address: {
    type: String,
  },
  wilaya: {
    type: String,
  },
  commune: {
    type: String,
  },
  phone: {
    type: String,
  },
  register_date: {
    type: Date,
    default: Date.now,
  },
});
module.exports = agency = mongoose.model("agency", AgencySchema);

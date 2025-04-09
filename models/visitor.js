const mongoose = require("mongoose");

const visitorSchema = new mongoose.Schema({
  name: String,
  phone: String,
  email: String,
  place: String,
  purpose: String,
  meetingWith: String,
  photo: String,
  timestamp: String,
  id: String,
});

module.exports = mongoose.model("Visitor", visitorSchema);

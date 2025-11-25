const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  email: { type: String, required: true },
  equipment: { type: String, required: true },
  slot: { type: String, required: true },
  date: {
    type: String,
    default: () => new Date().toDateString(),
  },
});

module.exports = mongoose.model("Booking", bookingSchema);





const mongoose = require("mongoose");

const warningSchema = new mongoose.Schema({
  message: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 86400, // 24 hours
  },
});

module.exports = mongoose.model("Warning", warningSchema);

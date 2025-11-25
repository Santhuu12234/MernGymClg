// models/User.js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  joinedAt: {
    type: Date,
    default: Date.now, // Automatically stores the registration time
  },
});

module.exports = mongoose.model("User", userSchema);

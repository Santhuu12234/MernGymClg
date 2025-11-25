const mongoose = require('mongoose');

const progressSchema = new mongoose.Schema({
  name: String,
  email: String,
  weight: Number,
  reps: Number,
  sets: Number,
  recordedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Progress', progressSchema);

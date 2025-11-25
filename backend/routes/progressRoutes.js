const express = require('express');
const router = express.Router();
const Progress = require('../models/Progress');

// Create progress entry
router.post('/', async (req, res) => {
  const { name, email, weight, reps, sets } = req.body;
  const progress = new Progress({ name, email, weight, reps, sets });
  await progress.save();
  res.json(progress);
});

// Get progress only for specific user
router.get('/:email', async (req, res) => {
  const { email } = req.params;
  const data = await Progress.find({ email }).sort({ recordedAt: -1 });
  res.json(data);
});

module.exports = router;

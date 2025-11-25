const express = require("express");
const router = express.Router();
const Warning = require("../models/Warning");

// Get latest warning
router.get("/", async (req, res) => {
  const warning = await Warning.findOne();
  if (!warning) return res.status(404).json({ message: "No warning found." });
  res.json(warning);
});

// Add new warning (deletes existing)
router.post("/", async (req, res) => {
  await Warning.deleteMany(); // Ensure only one exists
  const newWarning = new Warning({ message: req.body.message });
  await newWarning.save();
  res.json({ message: "Warning saved." });
});

// Delete warning manually
router.delete("/", async (req, res) => {
  await Warning.deleteMany();
  res.json({ message: "Warning deleted." });
});

module.exports = router;

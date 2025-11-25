// backend/routes/contact.js
const express = require("express");
const router = express.Router(); // ✅ DO NOT FORGET THIS
const Contact = require("../models/Contact");

router.post("/", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !message) {
    return res.status(400).json({ error: "Name and message are required" });
  }

  try {
    const newContact = new Contact({ name, email, message });
    await newContact.save();
    res.status(200).json({ message: "Enquiry submitted successfully!" });
  } catch (err) {
    console.log("Error saving contact:", err); // Add this line
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;

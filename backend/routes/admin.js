// routes/admin.js
const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Contact = require("../models/Contact");
const Booking = require("../models/Booking");

// Get all users
router.get("/users", async (req, res) => {
  try {
    const users = await User.find().select("-password");
    res.json(users);
  } catch (err) {
    res.status(500).json({ msg: "Error fetching users" });
  }
});

// Get all contacts
router.get("/contacts", async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ msg: "Error fetching contacts" });
  }
});

// ✅ Get bookings for specific date
router.get("/bookings", async (req, res) => {
  try {
    const { date } = req.query;

    if (date) {
      const bookings = await Booking.find({ date: date });
      return res.json(bookings);
    }

    // if no date is provided, return all
    const bookings = await Booking.find();
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ msg: "Error fetching bookings" });
  }
});

module.exports = router;

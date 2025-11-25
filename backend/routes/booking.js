const express = require("express");
const router = express.Router();
const Booking = require("../models/Booking");

// GET today's bookings
router.get("/", async (req, res) => {
  try {
    const today = new Date().toDateString();
    const bookings = await Booking.find({ date: today });
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ message: "Error fetching bookings" });
  }
});

// POST a new booking
router.post("/", async (req, res) => {
  try {
    const { email, equipment, slot } = req.body;
    const date = new Date().toDateString();

    const alreadyBooked = await Booking.findOne({ equipment, slot, date });
    if (alreadyBooked) {
      return res.status(409).json({ message: "Slot already booked" });
    }

    const newBooking = new Booking({ email, equipment, slot, date });
    await newBooking.save();
    res.json({ message: "Booking successful" });
  } catch (err) {
    res.status(500).json({ message: "Booking failed" });
  }
});

module.exports = router;

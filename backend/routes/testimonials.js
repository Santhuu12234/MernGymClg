const express = require("express");
const multer = require("multer");
const path = require("path");
const Testimonial = require("../models/Testimonial");

const router = express.Router();

// Multer storage config
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) =>
    cb(null, Date.now() + path.extname(file.originalname)),
});

const upload = multer({ storage });

// GET all testimonials
router.get("/", async (req, res) => {
  try {
    const testimonials = await Testimonial.find().sort({ _id: -1 });
    res.json(testimonials);
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
});

// POST a testimonial
router.post("/", upload.single("image"), async (req, res) => {
  try {
    const { name, role, feedback, rating } = req.body;
    const image = req.file ? `/uploads/${req.file.filename}` : "";

    const newTestimonial = new Testimonial({
      name,
      role,
      feedback,
      rating,
      image,
    });

    await newTestimonial.save();
    res.json({ message: "Testimonial saved" });
  } catch (err) {
    res.status(500).json({ error: "Error saving testimonial" });
  }
});

module.exports = router;

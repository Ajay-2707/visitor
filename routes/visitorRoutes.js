const express = require("express");
const router = express.Router();
const Visitor = require("../models/visitor");

// Save visitor
router.post("/save", async (req, res) => {
  try {
    const visitor = new Visitor(req.body);
    await visitor.save();
    res.status(201).json({ message: "Visitor saved", visitor });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all visitors
router.get("/all", async (req, res) => {
  try {
    const visitors = await Visitor.find().sort({ _id: -1 });
    res.json(visitors);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;

const express = require('express');
const Order = require('../models/Order');
const router = express.Router();

// Submit order
router.post('/submit', async (req, res) => {
  const newOrder = new Order(req.body);
  try {
    await newOrder.save();
    res.status(201).json({ message: 'Order placed successfully!' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
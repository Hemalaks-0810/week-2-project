const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  name: String,
  email: String,
  paymentOption: String,
  address: String,
  items: [
    {
      title: String,
      price: Number,
      count: Number,
    },
  ],
});

module.exports = mongoose.model('Order', OrderSchema);
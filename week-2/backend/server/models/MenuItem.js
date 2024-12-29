const mongoose = require('mongoose');

const MenuItemSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String,
  price: Number,
  type: String,
  weight: String,
});

module.exports = mongoose.model('MenuItem', MenuItemSchema);
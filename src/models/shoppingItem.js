const mongoose = require('mongoose');

const shoppingItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  category: {
    type: String,
  },
  distributor: {
    type: String,
  },
  expiration_date: {
    type: String,
  },
  amount: {
    type: String,
  },
  weight: {
    type: String,
  },
});

mongoose.model('ShoppingItem', shoppingItemSchema);

module.exports = mongoose.model('ShoppingItem');

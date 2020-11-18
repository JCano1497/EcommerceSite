const { schema } = require('./User');

const mongoose = require('mongoose'), Schema = mongoose.Schema;

const CartSchema = mongoose.Schema({
    Username: String,
    product: [{
      name: String,
      price: Number,
      quantity: Number,
      company: String,
      image: String
    }],
});
module.exports = mongoose.model('Cart', CartSchema);


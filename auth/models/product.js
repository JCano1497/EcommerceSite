const mongoose = require('mongoose'), Schema = mongoose.Schema;

const ProductSchema = mongoose.Schema({
    name: String,
    price: String,
    quantity: String,
    company: String,
    image:String
});

module.exports = mongoose.model('Product', ProductSchema);

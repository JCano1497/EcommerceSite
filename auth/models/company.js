const mongoose = require('mongoose'), Schema = mongoose.Schema;

const CompanySchema = mongoose.Schema({
    name: String,
    price: String,
    quantity: String,
});

module.exports = mongoose.model('Company', CompanySchema);

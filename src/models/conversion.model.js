const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
    conversion_value: Number,
    conversion_currency: String,
    converted_value: Number,
    converted_currency: String
}, {
    timestamps: true
})

const conversion = mongoose.model('conversionHistory', DataSchema);
module.exports = conversion;
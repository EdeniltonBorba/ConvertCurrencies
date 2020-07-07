const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const conversionSchema = new Schema({
    data: { type: Date, default: Date.now },
    from: { type: Number, required: true },
    to: { type: Number, required: true }
});

const Conversion = mongoose.model("Conversion", conversionSchema);

module.exports = Conversion;

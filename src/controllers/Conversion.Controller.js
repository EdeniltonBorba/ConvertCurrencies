const Conversion = require("../models/conversion.model");
const { create, update } = require("../models/conversion.model");

module.exports = {
    async indexedDB(req, res) {
        const conversion = await Conversion.find();
        res.json(conversion);
    },
    async create(req, res) {
        const { conversion_value, conversion_currency, converted_value, converted_currency } = req.body;
        let data = {};
        let conversion = await Conversion.findOne({ conversion_value });

        if (!conversion) {
            data = { conversion_value, conversion_currency, converted_value, converted_currency };
            conversion = await Conversion.create(data);
            return res.status(200).json(conversion);
        } else {
            return res.status(500).json(conversion);
        }
    },
    async details(req, res) {
        const { _id } = req.params;
        const conversion = await Conversion.findOne({ _id });
        res.json(conversion);
    },
    async delete(req, res) {
        const { _id } = req.params;
        const conversion = await Conversion.findByIdAndDelete({ _id });
        return res.json(conversion);
    },
    async update(req, res) {
        const { _id, conversion_value, conversion_currency, converted_value, converted_currency } = req.body;
        data = { conversion_value, conversion_currency, converted_value, converted_currency };
        const conversion = await Conversion.findByIdAndUpdate({ _id }, data, { new: true });
        return res.json(conversion);
    },
}


const mongoose = require('mongoose');
const db = require("../models");

mongoose.connect('mongodb://localhost/reactreadinglist', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connect;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('we re connected')
});


const conversionSeed = [
    {
        from: 1,
        to: 0.456,
        date: new Date(Date.now())
    },
    {
        from: 10,
        to: 8.346,
        date: new Date(Date.now())
    }
];

db.Conversion
    .remove({})
    .then(() => db.Conversion.collection.insertMany(conversionSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
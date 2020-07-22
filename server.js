const express = require("express");
const cookieParser = require('cookie-parser');
const cors = require('cors');
const mongoose = require("mongoose");
const routes = require("./routes");
const path = require('path');

const PORT = process.env.PORT || 9000;

mongoose.connect('mongodb://localhost:27017/CurrencyConverter', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}, function (err) {
    if (err) {
        console.log(err)
    } else {
        console.log('MongoDB successfully connected.')
    }
});

const app = express();
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(routes);

app.listen(PORT, function () {
    console.log(`API Server now listening on PORT ${PORT}!`)
});
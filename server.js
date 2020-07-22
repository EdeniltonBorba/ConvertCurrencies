const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const path = require('path');
const app = express();
const PORT = process.env.PORT || 9000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    app.use('/static', express.static(path.join(__dirname, 'public')))
}


app.use(routes);


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/conversionhistory", { useNewUrlParser: true, useUnifiedTopology: true });

app.listen(PORT, function () {
    console.log(`API Server now listening on PORT ${PORT}!`)
});
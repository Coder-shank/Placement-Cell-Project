const mongoose = require("mongoose");
require("dotenv").config();

async function connectDB() {

    try {

        await mongoose.connect(process.env.MONGO_URL);

        console.log("Connected to Database :: MongoDB");

    } catch (err) {

        console.log("MongoDB Connection Error:", err);

    }

}

connectDB();

module.exports = mongoose.connection;

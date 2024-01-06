const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

//Loads environment variables from .env file
require("dotenv").config();

const cors = require("cors");

const app = express();

//Connecting Database
const connectDB = async () => {
    try {
        const db = await mongoose.connect(process.env.DATABASE);
        console.log(`mongodb connected ${db.connection.host}`);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
};
connectDB();

app.use(cors());

// import routes
const itemRoutes = require("./routes/index");

// app middlewares
app.use(bodyParser.json());

app.use("/api", itemRoutes);

//Establishing server port
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`API is running on port ${port}`);
});

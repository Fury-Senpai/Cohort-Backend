require("dotenv").config();
const mongoose = require("mongoose");


const connectDB = async () => {
    try {
        await mongoose.connect(process.env.mongodb_uri)
        console.log("Database is connected Successfuly");
    } catch (error) {
        console.error("Database is not connected" , error.message);
    }
}

module.exports = connectDB;
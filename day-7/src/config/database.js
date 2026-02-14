const mongoose = require('mongoose');
async function connectToDb(){
    try {
        await mongoose.connect(process.env.MONGO_DB_URI);
        console.log("Connected to Database");
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = connectToDb;
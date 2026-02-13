// - Server run karna
// - Server ko database se connect karna
const app = require('./src/app');
const mongoose = require('mongoose')
const PORT = 3000;

async function connectToDb(){
    await mongoose.connect("mongodb+srv://harbola03nitish_db_user:J91I6Lk8UW3MfJ83@cluster0.6xajgkw.mongodb.net/day-6");
    console.log("Database connected");
}
connectToDb()

app.listen(PORT , ()=>{
    console.log(`Server is running on Port ${PORT}`);
})
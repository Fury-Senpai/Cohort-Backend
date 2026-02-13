// - server ko run karna
// - database se connect karna
const app = require('./src/app');
const mongoose = require('mongoose');
const PORT = 3000;
async function connectToDb(){
    try {
        await mongoose.connect("mongodb+srv://harbola03nitish_db_user:J91I6Lk8UW3MfJ83@cluster0.6xajgkw.mongodb.net/day-7");
        console.log("Connected to Database");
    } catch (error) {
        console.log(error.message);
    }
}
connectToDb();

app.listen(PORT , ()=>{
    try {
        console.log(`Server is running on port ${PORT}`);
    } catch (error) {
        console.error(error.message);
    }
})
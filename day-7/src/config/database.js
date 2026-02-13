async function connectToDb(){
    try {
        await mongoose.connect("mongodb+srv://harbola03nitish_db_user:J91I6Lk8UW3MfJ83@cluster0.6xajgkw.mongodb.net/day-7");
        console.log("Connected to Database");
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = connectToDb;
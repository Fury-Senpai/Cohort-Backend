// - server ko run karna
// - database se connect karna
const app = require('./src/app');
const mongoose = require('mongoose');
const connectToDb = require('./src/config/database')
const PORT = 3000;

connectToDb();

app.listen(PORT , ()=>{
    try {
        console.log(`Server is running on port ${PORT}`);
    } catch (error) {
        console.error(error.message);
    }
})
// - server ko run karna
// - database se connect karna
require('dotenv').config() 
const app = require('./src/app');
const connectToDb = require('./src/config/database')

PORT = 3000 || process.env.PORT;

connectToDb();

app.listen(PORT , ()=>{
    try {
        console.log(`Server is running on port ${PORT}`);
    } catch (error) {
        console.error(error.message);
    }
})
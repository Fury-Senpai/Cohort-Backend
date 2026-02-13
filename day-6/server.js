// - Server run karna
// - Server ko database se connect karna
const app = require('./src/app');
const PORT = 3000;

app.listen(PORT , ()=>{
    console.log(`Server is running on Port ${PORT}`);
})
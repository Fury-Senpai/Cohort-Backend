const express = require('express');
const app = express();

app.use(express.json()) // // enables express to read req.body data
// // app.use is a middleware
const notes = [
    {
        title: 'Reading books',
        desc: 'Have to read animal farm'
    }
]
app.post('/note' , (req,res)=>{ 
    console.log(req.body);
   res.send('Note created');
})

app.listen(3000 , ()=>{
    try {
        console.log('Server is running on port 3000');
    } catch (error) {
        console.log(error.message);
    }
})
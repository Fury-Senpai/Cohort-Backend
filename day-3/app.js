const express = require('express');
const app = express();

app.use(express.json()) // // enables express to read req.body data
const notes = [
    {
        title: 'Reading books',
        desc: 'Have to read animal farm'
    }
]
app.post('/note' , (req,res)=>{ 
   res.send('Note created');
})

app.listen(3000 , ()=>{
    try {
        console.log('Server is running on port 3000');
    } catch (error) {
        console.log(error.message);
    }
})
// 
// - server create karna
// - server config karna
// 
const express = require('express')
const app = express();
app.use(express.json());

const notes = [];

// POST /notes
app.post('/notes' , (req,res)=>{
    try {
        notes.push(req.body);
        res.status(201).json(
            {
                message : "Note Created Successfully",
            
            }
        )    
    } catch (error) {
        res.status(500).json(
            {
                message : 'something went wrong',
                
            }
        )
    }
})

module.exports = app;
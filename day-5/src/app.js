// 
// - server create karna
// - server config karna
// 
const express = require('express')
const app = express();
app.use(express.json());

const notes = [];

// GET /notes
app.get('/note' , (req,res)=>{
    try {
        res.status(200).json(
            {
                notes : notes
            }
        )
    } catch (error) {
        res.status(404).json(
            {
                message: "Bad Request"
            }
        )
    }
})
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

// DELETE /notes
app.delete('/notes/:id' , (req,res)=>{
    try {
        const {id} = req.params;
        delete notes[id];
        res.status(204).json(
            {
                message : 'Note Deleted'
            }
        )
    } catch (error) {
        res.status(400).json(
            {
                message : 'Bad Request'
            }
        )
    }
})
module.exports = app;
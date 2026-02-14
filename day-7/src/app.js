// - server ko create karna
// - server ko config karna
const express = require('express');
const noteModel = require('./models/notes.model')
const app = express();
app.use(express.json());

// POST /note
app.post('/note', async (req,res)=>{
    const {title , desc} = req.body;
    const note = await noteModel.create(
        {
            title : title,
            desc : desc
        }
    )
    res.status(201).json(
        {
            message : "note created",
            note
        }
    )

})

// GET /note
app.get('/note' , async (req,res)=>{
    const notes = await noteModel.find();
    res.status(200).json(
        {notes}
    )
})
module.exports = app;
// - server create karna
// - server ko config karna

const express = require('express');

const app = express();
app.use(express.json());

const notes = [];

// 
// GET ROUTES
// 

app.get('/' , (req,res)=>{
    res.send('Welcome');
})

app.get('/show' , (req,res)=>{
    res.send(notes)
    
})

// 
// POST ROUTES
// 
app.post('/create-note' , (req,res)=>{
    notes.push(req.body)
    res.send(req.body);
})

// 
// DELETE ROUTE
// 

app.delete('/delete-note/:id' , (req,res)=>{
    const {id} = req.params;
    notes.splice(id , 1);
    res.send('Deleted')
})

// 2nd method to delete 
app.delete('/delete/:id' , (req,res)=>{
    const {id} = req.params;
    delete notes[id];
    res.send('Deleted')
})

// delete all
app.delete('/delete-all', (req,res)=>{
    notes.splice(0 , notes.length);
    res.send('Deleted all')
})
//
// UPDATE ROUTE
//


module.exports = app;
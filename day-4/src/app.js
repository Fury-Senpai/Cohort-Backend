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
// UPDATE NOTE PARTIALLY
//

app.patch('/update-desc/:id' , (req,res)=>{
    try {
        const {id} = req.params;
        notes[id].desc = req.body.desc;
        res.send('Updated Successfully');
    } catch (error) {
        res.send('Something went wrong');
        
    }
})

// update all

app.put('/update/:id' , (req,res)=>{
    try{
        const {id} = req.params;
        const {title , desc} = req.body;

        notes[id].title = title;
        notes[id].desc = desc;

        res.send('Changed Succesfully');
    }catch(error) {
        res.send('Something went wrong')
    }
})


module.exports = app;
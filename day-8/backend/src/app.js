const express = require("express");
const path = require("path");
const NoteModel = require("./models/Note.Model")
const cors = require("cors")
const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static("./public"))
// POST /note/create
app.post("/note/create" , async(req,res)=>{
   
    const {title , desc} = req.body;
    try {
        const data = await NoteModel.create({
            title,desc
        })
        res.status(201).json({
            message:"Note Created",
            data
        })
    } catch (error) {
        console.error("Error While Creating Note \n",error.message);
    }
})

// GET /note/all
app.get("/note/all" , async(req,res)=>{
    try {
        const data = await NoteModel.find();
        res.status(200).json({
            message:"Fetched All Notes",
            data
        })
    } catch (error) {
        console.error("Error Fetching Notes \n" , error.message);
    }
})

// /note/:id
app.get("/note/:id" , async(req,res)=>{
    const {id} = req.params;
    try {
        const data = await NoteModel.findOne({_id:id});
        res.status(200).json({
            message: "Note Fetched Successfully",
            data
        })
    } catch (error) {
        console.error("Error while fetching single note \n",error.message)
    }
})
// PATCH /note/update/:id
app.patch("/note/update/:id" , async(req,res)=>{
    const {id} = req.params;
    const {title,desc} = req.body;

    try {
        const data = await NoteModel.findOneAndUpdate({_id:id} , {$set:{title:title , desc:desc}});
        res.status(200).json({
            message:"Note Updated Successfully",
            data
        })
    } catch (error) {
        console.error("Note cannot be updated \n" , error.message);
    }
})

// DELETE /note/delete/:id
app.delete("/note/delete/:id" , async(req,res)=>{
    const {id} = req.params;
    try {
        await NoteModel.findOneAndDelete({_id:id});
        res.status(204).json();
    } catch (error) {
        console.error("Error Deleting Note \n" , error.message)
    }
})

// WILD ROUTES 
console.log(__dirname);
app.use("*name",(req,res)=>{
    res.sendFile(path.join(__dirname , ".." , "/public/index.html"))
})

module.exports = app;
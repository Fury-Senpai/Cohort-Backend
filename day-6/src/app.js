// - Server ko create karna
// - Server ko config karna
const express = require('express');
const app = express();
app.use(express.json());

app.get('/' , (req,res)=>{
    res.status(200).json(
        {
            message : "working"
        }
    )
})
module.exports = app;
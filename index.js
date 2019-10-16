const express =require("express");
const app  = express();
const body = require('body-parser');
const mongoose = require('mongoose');

app.use(express.static('public'));
 app.use(body.json());
 app.use(body.urlencoded());

 mongoose.connect("mongodb://localhost/user",{newUrlParser:true})
    .then(()=>console.log("Connected To mongodb"))
    .catch(()=>console.log("Failed to connect to monogdb"));



app.get('/', (req , res)=>
{
    res.sendFile(__dirname+'/index.html');
});

app.post('/submit' , (req , res)=>
{
    console.log(req.body);
})
app.listen(8080 , ()=>console.log("Listening on port 8080"));


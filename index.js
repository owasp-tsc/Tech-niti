const express =require("express");
const app  = express();
// const body = require('body-parser');

app.use(express.static('public'));
// app.use(body.json());
// app.use(body.urlencoded());

app.get('/', (req , res)=>
{
    res.sendFile(__dirname+'/index.html');
});
    
app.listen(8080 , ()=>console.log("Listening on port 8080"));


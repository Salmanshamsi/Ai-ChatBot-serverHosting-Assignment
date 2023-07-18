const express = require("express");
const app = express();
// const form = require('./routes/routes');

const port =  3000;

app.use((req,rep)=>{
    console.log(rep.send("hello world"));
})


app.listen(port, ()=>{
    console.log("server responding");
})
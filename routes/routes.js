const express = require('express');
const routes = express();

routes.post("/",(req,res)=>{
    console.log(req.url);
});

export default routes;
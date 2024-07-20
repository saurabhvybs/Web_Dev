const express = require("express");

const app = express();
let count=0;

app.use(countRequest);

function countRequest(req,res,next){
    count= count +1;
    next();
}

app.get("/user",function(req,res){
    res.status(200).json({name:"Saurabh"});
});
app.post("/user",function(req,res){
     res.status(200).json({msg:"Dummy User created "});
});
app.get("/count",function(req,res){
    res.status(200).json({count});
})

app.listen(2000);
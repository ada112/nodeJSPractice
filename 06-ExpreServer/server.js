var express = require("express")

var app = express();
var PORT = 3000;

app.get("/", function(req, res){

    res.send("WELCOME TO EXPRESS");
});

app.get("/home", function(req, res){

    res.send("WELCOME TO HOME");
});

app.post("/formulario",function(req, res){
    res.send("WELCOME TO EXPRESS");
});

app.listen(PORT, ()=>{
    console.log("Server on port " + PORT);
});
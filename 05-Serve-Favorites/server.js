var http = require("http");

var fs = require("fs");

var PORT = 3001;

var server = http.createServer(handleRequest);

function handleRequest(req, res){

    fs.readFile(__dirname + "/index.html", function(err, data){
        
        res.writeHead(200, {"Contet-Type" : "text/html"});

        res.end(data);

    });
}


server.listen(PORT, function () {

    console.log("Server UP");
});
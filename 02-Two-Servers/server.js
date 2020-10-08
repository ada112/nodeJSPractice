var http = require("http");

var PORT = 7000;
var PORT2 = 7500;

var server = http.createServer(handleRequest);
var server2 = http.createServer(handleRequest2);

function handleRequest(request, response){
    
    response.end("Bienvenido " + request.url);
}

function handleRequest2(request1, response1){
    response1.end("HALO " + request1.url);
}

server.listen(PORT, function(){

    console.log("Servidor escuchando en puerto " + PORT);
});

server2.listen(PORT2, function(){

    console.log("Servidor escuchando en puerto " + PORT2);
});
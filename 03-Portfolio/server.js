const { SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION } = require("constants");
const { readdirSync } = require("fs");
var http = require("http");

var PORT = 3000;

var server = http.createServer(handleRequest);

function handleRequest(req, res) {

    //url desde donde se hizo la peticion
    var path = req.url;

    switch (path) {
        case "/":
            return displayRoot(path, req, res);
        
        default:
            return noEncontrado(path, req, res);
    }

}

function displayRoot(url, req, res) {

    var myHtml = `<html> 
                    <body>
                     <h1> Home</h1>
                     </body>
                     </html> `

    res.writeHead(200, {"Contet-Type" : "text/html"});
    res.end(myHtml);
}

function noEncontrado(url, req, res) {

    var myHtml = `<html> 
                    <body>
                     <h1>404 Not Found</h1>
                     </body>
                     </html> `

    res.writeHead(404, {"Contet-Type" : "text/html"})
    res.end(myHtml);
}

//function noEn
server.listen(PORT, function () {

    console.log("Server UP");
});
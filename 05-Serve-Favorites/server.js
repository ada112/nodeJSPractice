var http = require("http");

var fs = require("fs");

var PORT = 3001;

var server = http.createServer(handleRequest);



function handleRequest(req, res){

    var path = req.url;

    switch(path){
        case "/food":
        case "/movies":
        case "/frameworks":
            return renderHTML(path + ".html", res);
        default:
            return renderHTML("/index.html", res);
    }


}

function renderHTML(filePath, res){
    return fs.readFile(__dirname +filePath, function(err, data){
        res.end(data);

    });
}



server.listen(PORT, function () {

    console.log("Server UP");
});


const http = require("http");
var server = http.createServer(function(req,res){
    console.log("received request" + req);
    res.write("<h1>Hello World</h1>");
    res.end();
});
server.listen(3000);
console.log("server on 3000");
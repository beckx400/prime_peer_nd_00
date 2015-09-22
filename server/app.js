var http = require('http');
var newMod = require("./joiner");

http.createServer(function(request, response){
    response.writeHead(200);
    response.write(newMod.callSimpleText());
    response.write(newMod.callJoiner());
    response.end();
}).listen(3000);

console.log("listening to port 3000");
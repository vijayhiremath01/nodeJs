let http = require('http');

let server = http.createServer(function(req, res) {
    res.writeHead(200, {'content-type': 'text/html'});
    res.end('Hello World!');

});
server.listen(3000, function(){
    console.log("Server running..");
});
var http = require('http');
var n = require('./primeiromodulo');
http.createServer(function (req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("<b>Matheus dos Santos Bispo<b> <br>");
    res.write("<i>Matheus </i>");
    res.write(n.nome())
    res.write(Date());
    res.end('Hello World!');
  

}).listen(8080);
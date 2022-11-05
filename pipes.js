var http = require('http');
var fs = require('fs');
http.createServer(function(req,res){
      res.writeHead(200,{'content-Type':'text/html'});
      // res.write('the program is start ');
      var readtxt = fs.createReadStream(__dirname + '/index.html' , 'utf8');
      readtxt.pipe(res);
      // res.end('The program is end');
}).listen(3000,'127.0.0.1');
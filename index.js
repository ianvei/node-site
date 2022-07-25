const http = require('http');
const fs = require('fs');

const port = 8080;

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        fs.readFile('index.html', function(err, data){
            if(err) throw err;
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write(data);
            return res.end;
        });
        

    }
    else if(req.url==='/about'){
        fs.readFile('about.html',function(err,data){
            if (err) throw err;
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write(data);
            return res.end;
        });
    }
    else if(req.url==='/contact'){
        fs.readFile('contact-me.html',function(err,data){
            if (err) throw err;
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write(data);
            return res.end;
        });
    }
    else{
        fs.readFile('404.html',function(err,data){
            if (err) throw err;
            res.writeHead(404,{'Content-Type':'text/html'});
            res.write(data);
            return res.end;
        });
    }
    
}).listen(port, () => {
    console.log(`listening on port ${port}`) 
})
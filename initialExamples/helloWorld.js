const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req,res) => {
    res.statusCode = 200;
    res.setHeader = ('Content-Type','text/plain');
    res.end('Hola Mundo 3');
});

server.listen(port, hostname, () => {
  console.log(`El servidor tercera en http://${hostname}:${port}/`);
});










//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
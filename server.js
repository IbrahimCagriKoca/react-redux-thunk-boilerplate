const { createServer } = require('http');

const host = "127.0.0.1";
const port = 3000;
const server = createServer((reque, respose) => {
    respose.statusCode = 200;
    respose.setHeader('Content-Type', 'text/plain');
    respose.end('Hello World');
});

server.listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}/`);
});

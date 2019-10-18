console.log('server dot js is running')
const http = require('http');
const server = http.createServer((req, res)=>{
    res.end('This is my server respone now now');
});

server.listen(process.env.PORT || 3000)

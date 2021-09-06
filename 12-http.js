const http = require('http')

const server = http.createServer((req,res) => {
    if(req.url === '/'){
        res.end('Hello world')
    }
    else if(req.url === '/about') {
        res.end('this is summary')
    } else {
        res.end(`
        <h1>Oops!<h1>
        <p>404<p>
        <a href="/">home</a>
        `)
    }
})

server.listen(8000)
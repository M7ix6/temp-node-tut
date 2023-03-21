const http = require ('http')

const server = http.createServer((req,res)=>{

    console.log(req);
    if (req.url === '/'){
        res.end('Welcome to our homepage!!')
    }
    if(req.url === '/about'){
        res.end('He is our short history')
    }
    res.end(`
    <h1>Oops!!</h1>
    <p>This page is not found</p>
    <a href= "/"> Back Home </a>
    
    `)
})



server.listen(5000)
const http =require('http')
const server =http.createServer()
server.on('request',(req,res) => {
    console.log(666666)
})
server.listen(8080,() =>{
console.log('http serve running at http://127.0.0.1:8080')
})
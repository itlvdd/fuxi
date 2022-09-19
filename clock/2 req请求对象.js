const http =require('http')
let server=http.createServer()
server.on('request',(req,res)=>{
    // console.log(`您请求的地址为${req.url},您的请求方式为${req.method}`)
    res.setHeader('Content-Type','text/html;charset=utf-8')
   const str=`您请求的地址为${req.url},您的请求方式为${req.method}`
   res.end(str)
})

server.listen(8080,()=>{
    console.log('http://127.0.0.1:8080')
})
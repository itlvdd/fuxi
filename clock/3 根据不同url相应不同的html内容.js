const http =require('http')
const server=http.createServer()
server.on('request',(req,res)=>{
    console.log(req.url)
const non = `<h1>404 Not found!</h1>`
const url =req.url
if(url==='/'||url==='/index.html') {
   content =(`<h1>首页</h1>`)
}else if(url==='/about.html') {
   content =('<h1>关于页面</h1>')
}else{
    content=non
}
res.setHeader('Content-Type','text/html;charset=utf-8')
res.end(content)
})
server.listen(8080,()=>{})
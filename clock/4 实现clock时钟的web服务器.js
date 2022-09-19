// 1 导入需要的模块
const fs= require('fs')
const http=require('http')
const path=require('path')
// 创建web服务器
const server=http.createServer()
// 2 创建简易服务器

// 监听客户请求
server.on('request',(req,res)=>{
    // 获取到客户端请求的url地址
console.log('11')
fs.readFile(fpath,'utf-8', (err,dataStr)=>{
  // 3 将资源的请求url地址映射为文件的存放路径
  const url =req.url
  // const fpath = path.join(__dirname,url)
  //  5.优化资源的请求路径
  if(url==='/') {
    fpath=path.join(__dirname,'./clock/index.html')
  }else {
    fpath=path.join(__dirname,'./clock',url)
  }
  //4 读取文件内容并响应给客户端
  if(err) {
    return  res.end('404 Not found.')
  }
  
  res.end(dataStr)
})
})




server.listen(801,()=>{
    console.log('server listen at http://127.0.0.1')
})
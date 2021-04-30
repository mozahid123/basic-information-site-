var http=require('http')
var url=require('url')
var fs=require('fs')

http.createServer(function(req,res){
    let q=url.parse(req.url,true)
     let filename='.'+q.pathname
    if(filename=='./'){
        filename='./index.html'
    } 
  fs.readFile(filename,function(error,value){
      
       if(error){
         res.write('<h1>Oppo... Error</h1>')
         res.end()
       }
      else{
          res.writeHead(200,{'content-type':'text/html'})
         res.write(value)
         res.end()
      }
  })
}).listen(3030)
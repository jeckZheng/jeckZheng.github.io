let http=require('http');
//文件服务
let fs=require('fs');
//创建服务
let server=http.createServer(function(request,response){
    //设置响应头
    response.setHeader('content-type','text/html;charset=utf-8');
    //读取文件
    fs.readFile('./file.html','utf-8',function(err,data){
        if(err){
            console.log(err);
        }else{
            response.end(data);
        }
    })
})
//开启监听
server.listen(80,"10.254.6.158",function(){
    console.log('成功色设置成功');
})
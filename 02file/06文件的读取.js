
/*
    1.同步文件的读取
    2.异步文件的读取
    3.简单文件的读取
    --fs.readFile(path[, options], callback)
    --fs.readFileSync(path[, options])
        --path 要读取的文件的路径
        --options 读取的选项
        --callback(err,data) 回调函数，通过回调函数将读取到内容返回
            --err 错误对象
            --data 读取到的数据，会返回一个Buffer
    4.流式文件的读取
*/


const { error } = require('console');
var fs = require('fs')

fs.readFile('hhhhh.jpg',(err,data)=>{
    if(!err){
        // console.log(data.toString());
        
        //将data写入到文件中
        fs.writeFile('hello35.jpg',data,(err)=>{
            if(!err){
                console.log("写入成功");
            }else{
                console.log(err)
            }
        })
    }else{
        console.log(err)
    }
})
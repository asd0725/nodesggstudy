
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
    流式文件读取也适用一些较大的文件，可以分次将文件读取到内存中
    --fs.createReadStream(path[, options])
*/

var fs = require('fs')

//创建一个可读流
var rs = fs.createReadStream('hhhhh.jpg')

//创建一个可写流
var ws = fs.createWriteStream('hello5.jpg')

//监听流的开启和关闭

rs.once('open',()=>{
    console.log("可读流打开了");
})

rs.once('close',()=>{
    console.log("可读流关闭了");
    ws.close()
})


ws.once('open',()=>{
    console.log("可写流打开了");
})

ws.once('close',()=>{
    console.log("可写流关闭了");
})

//如果要读取一个可读流中的数据，必须要为可读流绑定一个data事件，data事件绑定完毕，会自动开始读取数据
rs.on('data',(data)=>{
    // console.log(data);

    //将读取到的数据写入到可写流中
    ws.write(data)
})
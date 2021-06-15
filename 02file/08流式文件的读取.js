
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
var ws = fs.createWriteStream('hello7.jpg')


//pipe可以将可读流中的内容直接输出到可写流中
rs.pipe(ws);


/*
    异步文件写入
        1.异步打开文件
        --fs.open(path[, flags[, mode]], callback)
        --异步调用的方法，结果都是通过回调函数的参数返回的
        --回调函数的两个参数
            --err 错误对象，如果没有错误则为null
            --fd   文件的描述符
        2.异步向文件写入数据
        --fs.write(fd, string[, position[, encoding]], callback)
        --回调将接收参数 (err, written, string)，其中 written 指定需要写入传入的字符串的字节数。 写入的字节不一定与写入的字符串字符相同。string是写入的内容
        3.异步关闭文件
        --fs.close(fd[, callback])
        --关闭文件描述符。 除了可能的异常之外，没有为完成回调提供任何参数。
        --通过任何其他 fs 操作对当前正在使用的任何文件描述符 (fd) 调用 fs.close() 可能会导致未定义的行为。
*/

var fs = require('fs')


//异步打开文件
fs.open('hello1.txt','w',(err,fd)=>{
    if(!err){
        // console.log(fd);

        //异步向文件中写入数据
        fs.write(fd,"菜鸟教程异步写入",(err)=>{
            if(!err){
                console.log("写入成功");
            }
        })

        //关闭文件
        fs.close(fd,(err)=>{
            if(!err){
                console.log("文件已关闭");
            }
        })
    }
})

console.log("over");
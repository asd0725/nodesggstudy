/*
    文件系统
    --  文件系统就是通过Node操作系统中的文件
    --  使用文件系统，需要先引入fs模块
    Node.js 文件系统（fs 模块）模块中的方法均有异步和同步版本，例如读取文件内容的函数有异步的 fs.readFile() 和同步的 fs.readFileSync()。
    异步的方法函数最后一个参数为回调函数，回调函数的第一个参数包含了错误信息(error)。
    比起同步，异步方法性能更高，速度更快，而且没有阻塞。
    --文件的写入
        1.打开文件
            fs.openSync(path,flags,[mode])
            --path 要打开文件的路径
            --flags 打开文件要做的操作类型   r只读的   w只写的
            --mode 设置文件的操作权限，一般不传
            返回值：
            该方法会返回一个文件的描述作为结果，我们可以通过该描述来对文件进行各种操作
        2.向文件中写入内容
            --fs.writeSync(fd, string[, position[, encoding]])
            --fd 文件的描述符 ,需要传递要写入的文件的描述符
            --string 要写入的内容
        3.保存并关闭文件
            --fs.closeSync(fd)
*/

var fs = require('fs')

//打开文件
var fd = fs.openSync("./hello.txt","w")
//向文件写入内容
fs.writeSync(fd,'菜鸟教程')
//关闭文件
fs.closeSync(fd)
/*
    同步,异步，简单文件的写入都不适合大文件的写入，性能较差，容易导致内存溢出
*/

var fs = require('fs')

/*
    流式文件写入
        fs.createWriteStream(path[, options])
        --可以用来创建一个可写流
        --path 文件路径
        --options 配置的参数
*/

var ws = fs.createWriteStream("hello3.txt")

//可以通过监听流的open和close事件来监听流的打开和关闭
//on(事件字符串，callback)
// --可以为对象绑定一个事件       
//once(事件字符串，callback)
//--可以为对象绑定一个一次性的事件，该事件将会在出发一次后自动失效

ws.once('open',()=>{
    console.log("流打开了");
})

//通过ws向文件中输出内容
ws.write("菜鸟教程，通过流写入")
ws.write("菜鸟教程，通过流写入aaa")
ws.write("菜鸟教程，通过流写入ccc")
ws.write("菜鸟教程，通过流写入sss")

ws.once('close',()=>{
    console.log("流关闭了");
})

ws.close()
/*
    简单文件写入        http://nodejs.cn/api/fs.html#fs_fs_writefilesync_file_data_options
    --fs.writeFile(file, data[, options], callback)
    --fs.writeFileSync(file, data[, options])
        --file 要操作的文件的路径
        --data 要写入的数据
        --options 选项，可以对写入进行一些设置    options <Object> | <string>
            encoding <string> | <null> 默认值: 'utf8'
            mode <integer> 默认值: 0o666
            flag <string> 请参阅对文件系统 flags 的支持。 默认值: 'w'
        --callback 当写入完成以后执行的函数
*/

var fs = require('fs')

fs.writeFile("hello2.txt",'/n菜鸟教程。通过writeFile写入',{flag:'a'},(err)=>{
    if(!err){
        console.log("写入成功");
    }
})





/*

r	以读取模式打开文件。如果文件不存在抛出异常。
r+	以读写模式打开文件。如果文件不存在抛出异常。
rs	以同步的方式读取文件。
rs+	以同步的方式读取和写入文件。
w	以写入模式打开文件，如果文件不存在则创建。
wx	类似 'w'，但是如果文件路径存在，则文件写入失败。
w+	以读写模式打开文件，如果文件不存在则创建。
wx+	类似 'w+'， 但是如果文件路径存在，则文件读写失败。
a	以追加模式打开文件，如果文件不存在则创建。
ax	类似 'a'， 但是如果文件路径存在，则文件追加失败。
a+	以读取追加模式打开文件，如果文件不存在则创建。
ax+	类似 'a+'， 但是如果文件路径存在，则文件读取追加失败。
*/
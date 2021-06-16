const { error } = require('console');
var fs = require('fs')

/*
    fs.existsSync(path)
    --检查一个文件是否存在
*/

var isExists = fs.existsSync("hello.txt")
// console.log(isExists);

/*
    获取文件的状态
    返回一个对象，这个对象中保存了当前对象状态的相关信息
    fs.stat(path[, options], callback)
    fs.statSync(path[, options])
*/

fs.stat("hhhhh.jpg",(err,stat)=>{


    /*
        size 文件的大小
        isFile() 是否是一个文件
        isDirectory() 是否是一个文件夹
    */


    // if(!err){
    //     console.log(stat.isFile());
    // }else{
    //     error.log(err)
    // }
})



/*
fs.unlink(path, callback)
fs.unlinkSync(path)
    --删除文件

*/

// fs.unlinkSync('hello1.txt')



/*
    fs.readdir(path[, options], callback)
    callback(err,files)
        --files是一个字符串数组，每一个元素就是一个文件夹的名字
    fs.readdirSync(path[, options])
        --读取一个目录的目录结构
        
*/

// fs.readdir('.',(err,files)=>{
//     if(!err){
//         console.log(files);
//     }
// })


/*
fs.truncate(path[, len], callback)
fs.truncateSync(path[, len])
    --截断文件,将文件修改为指定大小
*/
// fs.truncateSync('hello4.txt',10)


/*
fs.mkdir(path[, options], callback)
fs.mkdirSync(path[, options])
    --创建一个目录
*/
// fs.mkdirSync('Hellods')

/*
fs.rmdir(path[, options], callback)
fs.rmdirSync(path[, options])
    --删除一个目录
*/

// fs.rmdirSync('Hellods')



/*
fs.rename(oldPath, newPath, callback)
fs.renameSync(oldPath, newPath)
    --对文件进行重命名
        --参数
            oldPath 旧的路径
            newPath 新的路径
            callback 回调函数
*/

// fs.rename('hello2.txt','hello.txt',(err)=>{
//     if(!err){
//         console.log("修改成功了！");
//     }else{
//         console.error(err);
//     }
// })


/*
fs.watchFile(filename[, options], listener)
    --监视文件的修改
    --参数：
        filename要监视的文件的名字
        options配置选项
        listener 回调函数，当文件发生变化是，回调函数执行
            listener(curr,prev)
                curr 当前文件的状态
                prev 修改前文件的状态
                --这两个对象都是stats对象
*/

fs.watchFile('hello.txt',(curr,prev)=>{
    console.log('当前文件大小:',prev.size);
    console.log("修改后文件大小：",curr.size);
})
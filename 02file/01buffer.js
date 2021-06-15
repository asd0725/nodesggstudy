/*
Buffer(缓冲区)
    buffer的结构和数组很像，操作的方法也和数组类似
    使用buffer不需要引入模块，直接使用即可
    在buffer中存储的是二进制数据,显示时以16进制形式显示
    Buffer的大小一旦确定，不能修改，Buffer实际上是对底层的内存直接操作
    Buffer中的一个元素，占用内存的一个字节  00000000 ->  11111111       超出一个字节范围的被舍弃
*/
//var str = 'hello guang'
var str = "hello 灮"

var buf = Buffer.from(str)

console.log(buf);
// console.log(buf.length);     //占用内存的大小
// console.log(str.length);     //字符串的长度

//buffer的构造函数都是不推荐使用的
//var buf2 = new Buffer(1024)

//创建一个10字节的buffer
var buf3 = Buffer.alloc(10);

//通过索引，操作buf3中的元素

buf3[0]=88;
buf3[4]=99;
buf3[7]=0xaa;
buf3[2] = 255;
console.log(buf3);
console.log(buf3[2]);
console.log(buf3.length);




//Buffer.allocUnsafe(size)  创建一个指定大小的buffer ，但是buffer中可能含有敏感数据
var buf4 = Buffer.allocUnsafe(10);
console.log(buf4);


/*
        Buffer.from(str)    将一个字符串转换为buffer
        Buffer.alloc(size)  创建一个指定大小的Buffer
        Buffer.allocUnsafe(size)    创建一个指定大小的buffer ，但是buffer中可能含有敏感数据
        Buffer.toString()将缓冲区的buffer转换为字符串
*/

var buf5 = Buffer.from('菜鸟教程')
console.log(buf5.toString());
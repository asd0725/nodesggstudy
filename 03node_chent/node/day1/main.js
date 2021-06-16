var add1 = require('./hello')
var add2 = require('./hello')

console.log(add1.add());
console.log(add2.add());

//模块在执行的过程中只会被初始化一次
//一个模块中的JS代码仅在模块第一次被使用时执行一次，并且在使用的过程中进行初始化，之后缓存起来便于后续继续使用。
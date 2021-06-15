// exports.name = "田承光"
// exports.age = 18
// exports.sayName = function(){
//     console.log("俺是田承光");
// }

module.exports = {
    name:'猪八戒',
    age:18,
    sayNames:function(){
        console.log("你是猪八戒");
    }
}


var obbj = {}
obbj.a = {}
var a = obbj.a;

//a和obj.a 指向的是同一个对象
// console.log(a===obbj.a);

a.name="沙僧"
console.log(obbj.a.name);
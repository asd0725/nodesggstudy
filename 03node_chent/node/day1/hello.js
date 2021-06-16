var a = 1;
function add(){
    console.log("执行"+a+"次");
    return ++a
}

module.exports={
    add
}
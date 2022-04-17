var obj = {
    name: 'lyb',
    age: 18
}

// 原型式继承函数
function createObject1(o) {
    var newObj = {};
    Object.setPrototypeOf(newObj, o)
    return newObj
}

function createObject2(o) {
    function Fn() { }
    Fn.prototype = o;
    return new Fn()
}

// var info = createObject1(obj)
// var info = createObject2(obj)
var info = Object.create(obj) // 上面两种实现方式相当于 Object.create()
console.log(info);
console.log(info.__proto__);

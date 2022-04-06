// 1.通过对象调用函数
var obj = {
    name: 'lyb',
    foo: function() {
        console.log(this); // obj
    }
}

obj.foo();

// 2.上一个案例的变化
function bar() {
    console.log(this); // obj1
}

var obj1 = {
    name: "obj1",
    bar: bar
}

var obj2 = {
    name: "obj2",
    obj1: obj1
}

obj2.obj1.bar();

// 隐式丢失
function test() {
    console.log(this); // window
}

var obj3 = {
    name: "obj3",
    test: test
}

var result = obj3.test;
result();
// call apply
function foo() {
    console.log(this);
}

foo.call(123); // 123
foo.apply(123); // 123

// 如果我们希望一个函数总是显示的绑定到一个对象上
// 1.手写一个bind的辅助函数
function bar() {
    console.log(this);
}

var obj = {
    name: "obj"
}

function ybbind(func, obj) {
    return function() {
        func.apply(obj, arguments)
    }
}

var test = ybbind(bar, obj);
test();
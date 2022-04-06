// 1.普通函数调用
// function foo() {
//     console.log(this); // window
// }

// foo();

// 2.函数调用链（一个函数又调用另外一个函数）
// 所有函数都没有被绑定到某个对象上，所以都是window
// function test1() {
//     console.log(this); // window
//     test2();
// }

// function test2() {
//     console.log(this); // window
//     test3();
// }

// function test3() {
//     console.log(this); // window
// }

// test1();

// 3.将函数作为参数传入到另一个函数中
function bar() {
    console.log(this); // window
}

function foo(fun) {
    fun();
}

var obj = {
    name: 'why',
    bar: function() {
        console.log(this);
    }
}
foo(obj.bar);

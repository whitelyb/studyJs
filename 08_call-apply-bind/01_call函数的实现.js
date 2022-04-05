// 给所有的函数添加一个ybcall的方法
Function.prototype.ybcall = function (thisArg, ...args) {
    // 在这里要执行调用的那个函数
    // 要怎么获取到是哪一个函数执行了ybcall

    // 1.获取需要被执行的函数
    // var fn = this;

    // 2.将 thisArg 转成对象类型（防止它传入的是非对象类型）
    // 系统自带的call方法传入null或underfined时会指向window
    thisArg = (thisArg !== null && thisArg !== undefined) ? Object(thisArg) : window;

    // 调用需要被执行的函数
    thisArg.fn = this;
    var result = thisArg.fn(...args);
    delete thisArg.fn; // 会多增加一个 fn 不用管

    // 将最终的结果返回出去
    return result;
}

function foo() {
    console.log("foo函数被执行", this);

}

function sum(num1, num2) {
    console.log("sum函数被执行", this, num1, num2);
    return num1 + num2
}

// 系统自带的
// foo.call(123);
// var result = sum.call(123, 20, 30);
// console.log(result);

// 我们自己实现的函数的ybcall方法
// 默认进行隐式绑定
// foo.ybcall({});
var result = sum.ybcall({}, 20, 30);
console.log(result);

Function.prototype.ybbind = function (thisArg, ...argArray) {
    var fn = this;

    thisArg = (thisArg !== null && thisArg !== undefined) ? Object(thisArg) : window;

    return function (...args) {

        thisArg.fn = fn;

        var finalArgs = [...argArray, ...args];

        var result = thisArg.fn(...finalArgs);

        delete thisArg.fn;

        return result;
    }
}

function sum(num1, num2, num3) {
    console.log(this, num1, num2, num3);
    return num1 + num2 + num3;
}

// var foo = sum.bind(123, 10, 20, 30);
// var foo = sum.bind(123, 10);
// var result = foo(20, 30);
// console.log(result);

var foo = sum.ybbind(123);
var result = foo();
console.log(result);


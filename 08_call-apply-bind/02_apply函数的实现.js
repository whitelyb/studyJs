Function.prototype.ybapply = function (thisArg, argArray) {
    var fn = this;

    thisArg = (thisArg !== null && thisArg !== undefined) ? Object(thisArg) : window;

    thisArg.fn = fn;

    argArray = argArray || []; //如果argArray没传的话就赋值为一个空数组

    var result = thisArg.fn(...argArray);

    delete thisArg.fn;

    return result;
}

function sum(num1, num2) {
    console.log('sum函数被执行', this);
    return num1 + num2;

}

// var result = sum.apply(123, [20, 30]);
// console.log(result);


var result = sum.ybapply(0, [20, 30]);
console.log(result);

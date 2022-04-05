// function foo(num1, num2, num3) {
//     console.log(arguments);
//     // 第一种用法
//     console.log(arguments.length);
//     // 第二种用法
//     console.log(arguments[0]);
//     console.log(arguments[1]);
//     console.log(arguments[2]);

//     // 第三种用法 （callee会指向foo）
//     console.log(arguments.callee);

//     // arguments.callee(); //会造成递归
//    // 箭头函数没有 arguments
// }

// foo(10, 20, 30);

function foo(num1, num2, num3) {
    console.log(arguments);
    // 第一种方法
    var newArr1 = [];
    for (var i = 0; i < arguments.length; i++) {
        newArr1.push(arguments[i]);
    }
    console.log(newArr1);

    // 第二种方法
    var newArr2 = Array.prototype.slice.call(arguments);
    console.log(newArr2);
    // 等价于 => 下面的这种写法
    var newArr3 = [].slice.call(arguments);
    console.log(newArr3);

    // 第三种方法（ES6）
    var newArr4 = Array.from(arguments);
    console.log(newArr4);

    var newArr5 = [...arguments];
    console.log(newArr5);


}

foo(10, 20, 30);




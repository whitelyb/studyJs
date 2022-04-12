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
test(); // obj

// 2.使用Function.prototype.bind
const newFn = bar.bind(obj);

newFn(); // obj


// 测试代码 格式化数据 写的玩的
// function formatData(num) {
//     let newNum = num.toFixed(2);
//     let arr = newNum.split('.');
//     let str0 = '';
//     if(arr[0].length > 3) {
//         let count = Math.floor(arr[0].length / 3);
//         for(let i = count; i >= 0; i--) {
//             if(i === 0) {
//                 console.log(arr[0].length-(count * 3));
//                 str0 = arr[0].substring(0, arr[0].length-(count * 3)) + str0;
//             }else {
//                 str0 = str0+=( ',' + arr[0].substr(i * -3, 3));
//             }
//         }
        
//     } else {
//         str0 = arr[0]
//     }
//     let finalStr = str0 + '.' + arr[1];
//     if(arr[0].length > 3 && arr[0].length % 3 === 0) {
//         finalStr = finalStr.substring(1)
//     } else {
//         finalStr = finalStr.substring(0)
//     }
//     return finalStr;
// }

// console.log(formatData(500.5));
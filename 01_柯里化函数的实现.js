// 柯里化函数的实现(单一职责原则)（增加代码的可扩展性）
function ybCurrying(fn) {
    function curried(...args) {
        // fn.length 可以获取当前传进来的函数的参数长度，看与函数本身要接收的参数是否一致
        if (args.length >= fn.length) { // 如果一致
            return fn.apply(this, args)
        } else { // 不一致
            return function (...args2) {
                return curried.apply(this, [...args, ...args2]);
            }
        }
    }
    return curried;
}
function makeAdder(count) {
    return function (num) {
        return count + num;
    }
}
const add5 = makeAdder(5);
console.log(add5(10));
console.log(add5(15));
console.log(add5(20));


// function sum(x, y, z) {
//     return x + y + z;
// }
// =>
const sum = x => y => z => x + y + z;
const currySum = ybCurrying(sum);

console.log(currySum(10)(20)(30))

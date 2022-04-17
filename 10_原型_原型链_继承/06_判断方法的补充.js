var obj = {
    name: 'lyb',
    age: 18
}

var info = Object.create(obj, {
    address: {
        value: '广州市',
        enumerable: true
    }
})

console.log(info);
console.log(info.__proto__);

console.log(info.hasOwnProperty('address')); // true
console.log(info.hasOwnProperty('name')); // false

console.log('address' in info); // true
console.log('name' in info); // true


console.log(Function.prototype === Function.__proto__); // true



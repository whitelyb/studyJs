// 1.setTimeout(内部是通过apply进行绑定的this对象，并且绑定的是全局对象)
setTimeout(function() {
    console.log(this); // window
}, 1000)

// 2.forEach
const arr = ['abc', 'cba', 'nba'];
const obj = {
    name: 'lyb'
}
arr.forEach(function(item) {
    console.log(this); // 三次 window
})

// forEach支持改变this指向
arr.forEach(function(item) {
    console.log(this); // 三次 obj
}, obj)

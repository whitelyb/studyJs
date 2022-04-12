function Person(name) {
    console.log(this); // Person {}
    this.name = name
}
// 使用new关键字来调用函数时会执行如下的操作：
// 1.在内存中创建一个新的对象;
// 2.让this指向这个对象
// 3.执行构造函数里面的方法，给这个对象添加属性和方法
// 4.返回这个对象

const p = new Person('lyb');
console.log(p); // Person {name: 'lyb'}
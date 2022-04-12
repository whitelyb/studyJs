// 1.默认规则的优先级最低
// 2.显示绑定高于隐式绑定
function foo() {
    console.log(this);
}

const obj1 = {
    name: "obj1",
    foo: foo
}

const obj2 = {
    name: "obj2",
    foo: foo
}

obj1.foo(); // obj1
obj2.foo(); // obj2

// 显示绑定和隐式绑定同时存在
obj1.foo.call(obj2); // obj2

// 3.new绑定优先级高于隐式绑定
new obj1.foo(); // foo {}

// 4.new绑定优先级高于bind（new绑定不能和call、apply同时使用）
// const newFn = new foo.call(obj1); // Uncaught TypeError: foo.call is not a constructor
const newFn = foo.bind(obj1);
const bar = new newFn(); // foo {}

// 优先级总结
// new绑定 > 显示绑定（bind）> 隐式绑定 > 默认绑定



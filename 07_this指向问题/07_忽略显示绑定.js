function foo() {
    console.log(this);
}

const obj = {
    name: 'lyb'
}

foo.call(obj); // obj
// 如果再显示绑定中传入null或者undefined,n那么这个显示绑定会被忽略，将使用默认规则
foo.call(null); // window
foo.call(undefined); // window

const bar = foo.bind(null);
bar();

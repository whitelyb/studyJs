function foo() {
  // var m = 100; // 这种会定义在foo 函数的 AO对象上
  m = 100; // 特殊的语法，这种会直接定义在全局对象（GO）上
}

foo();
// console.log(m); // m is not defined
console.log(m); // 100

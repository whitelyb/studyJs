function foo() {
  console.log(n);
  var n = 200;
  console.log(n);
  undefined;
}
var n = 100;
foo();
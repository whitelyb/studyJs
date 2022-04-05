var n = 100;

function foo() {
  console.log(n);
  return;
  var n = 100;
}

foo();

function foo(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return 'Error: Operands must be numbers';
  }
  return a + b;
}

function bar(a, b) {
  let fooResult = foo(a, b);
  if (typeof fooResult === 'string') {
    return fooResult;
  }
  return fooResult * 2;
}

console.log(bar(2, 3)); // Output: 10
console.log(bar(2, 'a')); // Output: Error: Operands must be numbers
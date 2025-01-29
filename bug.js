function foo(a, b) {
  return a + b;
}

function bar(a, b) {
  return foo(a, b) * 2;
}

console.log(bar(2, 3)); // Output: 10

//The bug is that the function bar is not correctly calculating the result.
//The function foo returns a + b, and the function bar takes this result and multiplies it by 2.
//However, it does not take into account that the result of foo(a, b) may be undefined if a or b are not numbers.
//This is because the addition operator (+) will return NaN if either operand is NaN.
//Therefore, the multiplication operation will also return NaN, which may not be the expected result.
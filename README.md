# JavaScript Function Bug

This repository contains a JavaScript function that does not handle non-number operands correctly. This can lead to NaN values, which may not be the expected result.

## Bug Description

The function `bar` does not correctly calculate the result because it does not handle cases where the operands are not numbers. This can lead to NaN values, which may not be the expected result.

## Solution

The solution is to add input validation to the function to check if the operands are numbers. If they are not, the function should return an error message or a default value.

## How to Reproduce

1. Clone this repository.
2. Open `bug.js` in a JavaScript editor.
3. Run the code.
4. Observe the unexpected result.

## How to Fix

1. Open `bugSolution.js` in a JavaScript editor.
2. Run the code.
3. Observe that the expected result is now produced.
// Function composition enabling piping

// Building-blocks to use for composition
const double = x => 2 * x
const triple = x => 3 * x
const quadruple = x => 4 * x

// Function composition enabling pipe functionality
const pipe =
  (...functions) =>
  initialValue =>
    functions.reduce((acc, fn) => fn(acc), initialValue)

// Composed functions for multiplication of specific values
const multiply6 = pipe(double, triple)
const multiply9 = pipe(triple, triple)
const multiply16 = pipe(quadruple, quadruple)
const multiply24 = pipe(double, triple, quadruple)

// Usage
const resultA = multiply6(6) // 36
const resultB = multiply9(9) // 81
const resultC = multiply16(16) // 256
const resultD = multiply24(10) // 240

console.log(resultA)
console.log(resultB)
console.log(resultC)
console.log(resultD)

/*
In summary, this code defines a higher-order function named pipe that takes a variable number of functions as arguments and returns a new function that applies each of those functions to an initial value in a left-to-right sequence. The reduce method is used to apply each function to the accumulator, passing the result of one function to the next, until all functions have been applied to the initial value.
*/

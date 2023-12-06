// Function composition is a mechanism for combining functions, in which the output of each function is passed into the next one, and the output of the last function is the final result. In this example we use reduceRight() to implement function composition.

// See also Function composition on Wikipedia.
// https://en.wikipedia.org/wiki/Function_composition_(computer_science)

const compose =
  (...args) =>
  value =>
    args.reduceRight((acc, fn) => fn(acc), value)

// Increment passed number
const inc = n => n + 1

// Doubles the passed value
const double = n => n * 2

// using composition function
console.log(compose(double, inc)(2)) // 6

// using composition function
console.log(compose(inc, double)(2)) // 5

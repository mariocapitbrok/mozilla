// Run a list of asynchronous functions with callbacks in series each passing their results to the next

const waterfall =
  (...functions) =>
  (callback, ...args) =>
    functions.reduceRight(
      (composition, fn) =>
        (...results) =>
          fn(composition, ...results),
      callback
    )(...args)

const randInt = max => Math.floor(Math.random() * max)

const add5 = (callback, x) => {
  setTimeout(callback, randInt(1000), x + 5)
}
const mult3 = (callback, x) => {
  setTimeout(callback, randInt(1000), x * 3)
}
const sub2 = (callback, x) => {
  setTimeout(callback, randInt(1000), x - 2)
}
const split = (callback, x) => {
  setTimeout(callback, randInt(1000), x, x)
}
const add = (callback, x, y) => {
  setTimeout(callback, randInt(1000), x + y)
}
const div4 = (callback, x) => {
  setTimeout(callback, randInt(1000), x / 4)
}

const computation = waterfall(add5, mult3, sub2, split, add, div4)
computation(console.log, 5) // Logs 14

/*
In summary, this code defines a higher-order function named waterfall that takes a variable number of functions as arguments and returns a new function that applies those functions in a right-to-left sequence. The reduceRight method is used to compose the functions into a new function that takes an initial callback function and any additional arguments, and returns the result of calling the composed function with those arguments. Each function in the array takes the previous function and the results of the previous function as arguments.
*/

// same as:

const computation2 = (input, callback) => {
  const f6 = x => div4(callback, x)
  const f5 = (x, y) => add(f6, x, y)
  const f4 = x => split(f5, x)
  const f3 = x => sub2(f4, x)
  const f2 = x => mult3(f3, x)
  add5(f2, input)
}

computation2(5, console.log)

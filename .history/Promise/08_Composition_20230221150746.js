/*
Composition
There are four composition tools for running asynchronous operations concurrently: 
  Promise.all()
  Promise.allSettled()
  Promise.any()
  Promise.race()

We can start operations at the same time and wait for them all to finish like this:
*/
Promise.all([func1(), func2(), func3()]).then(([result1, result2, result3]) => {
  // use result1, result2 and result3
})

// If one of the promises in the array rejects, Promise.all() immediately rejects the returned promise and aborts the other operations. This may cause unexpected state or behavior. Promise.allSettled() is another composition tool that ensures all operations are complete before resolving.

// These methods all run promises concurrently — a sequence of promises are started simultaneously and do not wait for each other. Sequential composition is possible using some clever JavaScript:

const functionArray = [func1, func2, func3]

functionArray
  .reduce((p, f) => p.then(f), Promise.resolve())
  .then(result3 => {
    /* use result3 */
  })

// In this example, we reduce an array of asynchronous functions down to a promise chain. The code above is equivalent to:
Promise.resolve()
  .then(func1)
  .then(func2)
  .then(func3)
  .then(result3 => {
    /* use result3 */
  })

// This can be made into a reusable compose function, which is common in functional programming:
const applyAsync = (acc, val) => acc.then(val)
const composeAsync =
  (...funcs) =>
  x =>
    funcs.reduce(applyAsync, Promise.resolve(x))

// The composeAsync() function accepts any number of functions as arguments and returns a new function that accepts an initial value to be passed through the composition pipeline:
const transformData = composeAsync(func1, func2, func3)
const result3 = transformData(data)

// Sequential composition can also be done more succinctly with async/await:
let result
for (const f of [func1, func2, func3]) {
  result = await f(result)
}
/* use last result (i.e. result3) */

// However, before you compose promises sequentially, consider if it's really necessary — it's always better to run promises concurrently so that they don't unnecessarily block each other unless one promise's execution depends on another's result.

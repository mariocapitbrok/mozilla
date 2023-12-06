/*
Composition
There are four composition tools for running asynchronous operations concurrently: Promise.all(), Promise.allSettled(), Promise.any(), and Promise.race().

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

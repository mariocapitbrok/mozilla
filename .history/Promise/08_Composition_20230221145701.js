/*
Composition
There are four composition tools for running asynchronous operations concurrently: Promise.all(), Promise.allSettled(), Promise.any(), and Promise.race().

We can start operations at the same time and wait for them all to finish like this:
*/
Promise.all([func1(), func2(), func3()]).then(([result1, result2, result3]) => {
  // use result1, result2 and result3
})

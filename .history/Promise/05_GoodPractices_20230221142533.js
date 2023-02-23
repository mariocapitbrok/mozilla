// A good rule of thumb is to always either return or terminate promise chains, and as soon as you get a new promise, return it immediately, to flatten things:
doSomething()
  .then(function (result) {
    // If using a full function expression: return the promise
    return doSomethingElse(result)
  })
  // If using arrow functions: omit the braces and implicitly return the result
  .then(newResult => doThirdThing(newResult))
  // Even if the previous chained promise returns a result, the next one
  // doesn't necessarily have to use it. You can pass a handler that doesn't
  // consume any result.
  .then((/* result ignored */) => doFourthThing())
  // Always end the promise chain with a catch handler to avoid any
  // unhandled rejections!
  .catch(error => console.error(error))

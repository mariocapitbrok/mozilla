/*
Error handling
You might recall seeing failureCallback three times in the pyramid of doom earlier, compared to only once at the end of the promise chain:
*/
doSomething()
  .then(result => doSomethingElse(result))
  .then(newResult => doThirdThing(newResult))
  .then(finalResult => console.log(`Got the final result: ${finalResult}`))
  .catch(failureCallback)

// If there's an exception, the browser will look down the chain for .catch() handlers or onRejected. This is very much modeled after how synchronous code works:
try {
  const result = syncDoSomething()
  const newResult = syncDoSomethingElse(result)
  const finalResult = syncDoThirdThing(newResult)
  console.log(`Got the final result: ${finalResult}`)
} catch (error) {
  failureCallback(error)
}

// This symmetry with asynchronous code culminates in the async/await syntax:
async function foo() {
  try {
    const result = await doSomething()
    const newResult = await doSomethingElse(result)
    const finalResult = await doThirdThing(newResult)
    console.log(`Got the final result: ${finalResult}`)
  } catch (error) {
    failureCallback(error)
  }
}

/*
It builds on promises — for example, doSomething() is the same function as before, so there's minimal refactoring needed to change from promises to async/await. You can read more about the async/await syntax in the async functions and await references.

Promises solve a fundamental flaw with the callback pyramid of doom, by catching all errors, even thrown exceptions and programming errors. This is essential for functional composition of asynchronous operations.
*/

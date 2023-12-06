// A common need is to execute two or more asynchronous operations back to back, where each subsequent operation starts when the previous operation succeeds, with the result from the previous step. In the old days, doing several asynchronous operations in a row would lead to the classic callback pyramid of doom:

doSomething(function (result) {
  doSomethingElse(
    result,
    function (newResult) {
      doThirdThing(
        newResult,
        function (finalResult) {
          console.log(`Got the final result: ${finalResult}`)
        },
        failureCallback
      )
    },
    failureCallback
  )
}, failureCallback)

// With promises, we accomplish this by creating a promise chain. The API design of promises makes this great, because callbacks are attached to the returned promise object, instead of being passed into a function.

// Here's the magic: the then() function returns a new promise, different from the original:
const promise = doSomething()
const promise2 = promise.then(successCallback, failureCallback)

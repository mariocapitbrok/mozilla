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

// This second promise (promise2) represents the completion not just of doSomething(), but also of the successCallback or failureCallback you passed in — which can be other asynchronous functions returning a promise. When that's the case, any callbacks added to promise2 get queued behind the promise returned by either successCallback or failureCallback.

// With this pattern, you can create longer chains of processing, where each promise represents the completion of one asynchronous step in the chain. In addition, the arguments to then are optional, and catch(failureCallback) is short for then(null, failureCallback) — so if your error handling code is the same for all steps, you can attach it to the end of the chain:
doSomething()
  .then(function (result) {
    return doSomethingElse(result)
  })
  .then(function (newResult) {
    return doThirdThing(newResult)
  })
  .then(function (finalResult) {
    console.log(`Got the final result: ${finalResult}`)
  })
  .catch(failureCallback)

// You might see this expressed with arrow functions instead:
doSomething()
  .then(result => doSomethingElse(result))
  .then(newResult => doThirdThing(newResult))
  .then(finalResult => {
    console.log(`Got the final result: ${finalResult}`)
  })
  .catch(failureCallback)

// Important: Always return results, otherwise callbacks won't catch the result of a previous promise (with arrow functions, () => x is short for () => { return x; }). If the previous handler started a promise but did not return it, there's no way to track its settlement anymore, and the promise is said to be "floating".

// Therefore, as a rule of thumb, whenever your operation encounters a promise, return it and defer its handling to the next then handler.
const listOfIngredients = []

doSomething()
  .then(url =>
    fetch(url)
      .then(res => res.json())
      .then(data => {
        listOfIngredients.push(data)
      })
  )
  .then(() => {
    console.log(listOfIngredients)
  })

// OR

doSomething()
  .then(url => fetch(url))
  .then(res => res.json())
  .then(data => {
    listOfIngredients.push(data)
  })
  .then(() => {
    console.log(listOfIngredients)
  })

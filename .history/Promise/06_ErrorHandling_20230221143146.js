/*
Error handling
You might recall seeing failureCallback three times in the pyramid of doom earlier, compared to only once at the end of the promise chain:
*/
doSomething()
  .then(result => doSomethingElse(result))
  .then(newResult => doThirdThing(newResult))
  .then(finalResult => console.log(`Got the final result: ${finalResult}`))
  .catch(failureCallback)

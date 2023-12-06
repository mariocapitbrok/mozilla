/*
Timing
Lastly, we will look into the more technical details, about when the registered callbacks get called.
*/

/*
 The job of maintaining the callback queue and deciding when to call the callbacks is delegated to the promise implementation, and both the API user and API developer automatically gets strong semantic guarantees, including:

Callbacks added with then() will never be invoked before the completion of the current run of the JavaScript event loop.
These callbacks will be invoked even if they were added after the success or failure of the asynchronous operation that the promise represents.
Multiple callbacks may be added by calling then() several times. They will be invoked one after another, in the order in which they were inserted.
To avoid surprises, functions passed to then() will never be called synchronously, even with an already-resolved promise:
*/
/* Promise.resolve().then(() => console.log(2))
console.log(1) */
// Logs: 1, 2

// Instead of running immediately, the passed-in function is put on a microtask queue, which means it runs later (only after the function which created it exits, and when the JavaScript execution stack is empty), just before control is returned to the event loop; i.e. pretty soon:
const wait = ms => new Promise(resolve => setTimeout(resolve, ms))

wait(0).then(() => console.log(4))
Promise.resolve()
  .then(() => console.log(2))
  .then(() => console.log(3))
console.log(1) // 1, 2, 3, 4

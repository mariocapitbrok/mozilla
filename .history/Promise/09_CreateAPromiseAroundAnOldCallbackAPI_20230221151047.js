/*
Creating a Promise around an old callback API
A Promise can be created from scratch using its constructor. This should be needed only to wrap old APIs.
*/

// In an ideal world, all asynchronous functions would already return promises. Unfortunately, some APIs still expect success and/or failure callbacks to be passed in the old way. The most obvious example is the setTimeout() function:
setTimeout(() => saySomething('10 seconds passed'), 10 * 1000)

/*
Mixing old-style callbacks and promises is problematic. If saySomething() fails or contains a programming error, nothing catches it. This is intrinsic to the design of setTimeout.

Luckily we can wrap setTimeout in a promise. The best practice is to wrap the callback-accepting functions at the lowest possible level, and then never call them directly again:
*/
const wait = ms => new Promise(resolve => setTimeout(resolve, ms))

wait(10 * 1000)
  .then(() => saySomething('10 seconds'))
  .catch(failureCallback)

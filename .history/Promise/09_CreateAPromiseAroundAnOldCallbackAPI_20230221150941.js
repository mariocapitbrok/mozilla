/*
Creating a Promise around an old callback API
A Promise can be created from scratch using its constructor. This should be needed only to wrap old APIs.
*/

// In an ideal world, all asynchronous functions would already return promises. Unfortunately, some APIs still expect success and/or failure callbacks to be passed in the old way. The most obvious example is the setTimeout() function:
setTimeout(() => saySomething('10 seconds passed'), 10 * 1000)

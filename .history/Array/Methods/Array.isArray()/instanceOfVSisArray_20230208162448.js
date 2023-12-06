const iframe = document.createElement('iframe')
document.body.appendChild(iframe)
const xArray = window.frames[window.frames.length - 1].Array
const arr = new xArray(1, 2, 3) // [1, 2, 3]

// Correctly checking for Array
Array.isArray(arr) // true
// The prototype of arr is xArray.prototype, which is a
// different object from Array.prototype
arr instanceof Array // false

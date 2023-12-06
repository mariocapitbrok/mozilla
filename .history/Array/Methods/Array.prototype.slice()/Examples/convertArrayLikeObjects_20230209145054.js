//The slice() method is often used with bind() and call() to create a utility method that converts an array-like object into an array.

// slice() is called with `this` passed as the first argument
const slice = Function.prototype.call.bind(Array.prototype.slice)

function list() {
  return slice(arguments)
}

const list1 = list(1, 2, 3) // [1, 2, 3]

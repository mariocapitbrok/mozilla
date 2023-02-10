//The slice() method is often used with bind() and call() to create a utility method that converts an array-like object into an array.

// slice() is called with `this` passed as the first argument
const slice = Function.prototype.call.bind(Array.prototype.slice)

function list() {
  return slice(arguments)
}

const list1 = list(1, 2, 3) // [1, 2, 3]

console.log(list1)

/*
In JavaScript, the this keyword refers to the object that a function is invoked on. Sometimes, you may want to call a function with a specific this context, regardless of the context in which it is invoked. The bind method on a function allows you to create a new function with a specified this context.

In the code const slice = Function.prototype.call.bind(Array.prototype.slice), the Array.prototype.slice method is being bound to Function.prototype so that its this context is always set to Function.prototype, no matter how it is invoked.

So, slice can be called with any this context, and it will always call the Array.prototype.slice method with Function.prototype as its this context.

The call method is being used here because it allows you to invoke a function with a specified this context and an argument list. The resulting bound function (slice) can be used to invoke Array.prototype.slice with any object as its this context and any number of arguments.
*/

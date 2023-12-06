//The from() method can be called on any constructor function that accepts a single argument representing the length of the new array.

function NotArray(len) {
  console.log('NotArray called with length', len)
}

// Iterable
console.log(Array.from.call(NotArray, new Set(['foo', 'bar', 'baz'])))
// NotArray called with length undefined
// NotArray { '0': 'foo', '1': 'bar', '2': 'baz', length: 3 }

// Array-like
console.log(Array.from.call(NotArray, { length: 1, 0: 'foo' }))
// NotArray called with length 1
// NotArray { '0': 'foo', length: 1 }

//When the this value is not a constructor, a plain Array object is returned.

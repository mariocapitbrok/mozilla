// Using Object.keys() on primitives
// Non-object arguments are coerced to objects. Only strings may have own enumerable properties, while all other primitives return an empty array.

// Strings have indices as enumerable own properties
console.log(Object.keys('foo')) // ['0', '1', '2']

// Other primitives have no own properties
console.log(Object.keys(100)) // []

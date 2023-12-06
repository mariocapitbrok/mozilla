// Using Object.values() on primitives
// Non-object arguments are coerced to objects. Only strings may have own enumerable properties, while all other primitives return an empty array.

// Strings have indices as enumerable own properties
console.log(Object.values('foo')) // ['f', 'o', 'o']

// Other primitives have no own properties
console.log(Object.values(100)) // []

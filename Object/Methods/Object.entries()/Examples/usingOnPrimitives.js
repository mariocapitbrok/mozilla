// Using Object.entries() on primitives
// Non-object arguments are coerced to objects. Only strings may have own enumerable properties, while all other primitives return an empty array.

// Strings have indices as enumerable own properties
console.log(Object.entries('foo')) // [ ['0', 'f'], ['1', 'o'], ['2', 'o'] ]

// Other primitives have no own properties
console.log(Object.entries(100)) // []

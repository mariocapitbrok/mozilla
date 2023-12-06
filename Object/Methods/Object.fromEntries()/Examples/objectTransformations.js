// Object transformations

// With Object.fromEntries, its reverse method Object.entries(), and array manipulation methods, you are able to transform objects like this:

const object1 = { a: 1, b: 2, c: 3 }

const object2 = Object.fromEntries(
  Object.entries(object1).map(([key, val]) => [key, val * 2])
)

console.log(object2)
// { a: 2, b: 4, c: 6 }

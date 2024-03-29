// Object.entries()
// The Object.entries() static method returns an array of a given object's own enumerable string-keyed property key-value pairs.

const object1 = {
  a: 'somestring',
  b: 42,
}

for (const [key, value] of Object.entries(object1)) {
  console.log(`${key}: ${value}`)
}

// Expected output:
// "a: somestring"
// "b: 42"

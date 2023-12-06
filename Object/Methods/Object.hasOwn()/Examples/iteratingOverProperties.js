// Iterating over the properties of an object
// To iterate over the enumerable properties of an object, you should use:

const example1 = { foo: true, bar: true }
for (const name of Object.keys(example1)) {
  console.log(name)
}

// But if you need to use for...in, you can use Object.hasOwn() to skip the inherited properties:

const example2 = { foo: true, bar: true }
for (const name in example2) {
  if (Object.hasOwn(example2, name)) {
    console.log(name)
  }
}

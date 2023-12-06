// Iterating over the properties of an object
// To iterate over the enumerable properties of an object, you should use:

const example = { foo: true, bar: true }
for (const name of Object.keys(example)) {
  console.log(name)
}

// But if you need to use for...in, you can use Object.hasOwn() to skip the inherited properties:

const example = { foo: true, bar: true }
for (const name in example) {
  if (Object.hasOwn(example, name)) {
    // …
  }
}

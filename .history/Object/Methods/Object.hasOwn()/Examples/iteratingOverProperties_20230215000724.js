// Iterating over the properties of an object
// To iterate over the enumerable properties of an object, you should use:

const example = { foo: true, bar: true }
for (const name of Object.keys(example)) {
  console.log(name)
}

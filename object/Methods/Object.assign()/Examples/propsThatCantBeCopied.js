// Properties on the prototype chain and non-enumerable properties cannot be copied

const obj = Object.create(
  // foo is on obj's prototype chain.
  { foo: 1 },
  {
    bar: {
      value: 2, // bar is a non-enumerable property.
    },
    baz: {
      value: 3,
      enumerable: true, // baz is an own enumerable property.
    },
  }
)

const copy = Object.assign({}, obj)
console.log(copy) // { baz: 3 }

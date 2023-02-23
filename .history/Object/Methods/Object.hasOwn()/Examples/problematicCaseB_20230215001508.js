// It can also be used to test objects created using Object.create(null). These do not inherit from Object.prototype, and so hasOwnProperty() is inaccessible.

const foo = Object.create(null)
foo.prop = 'exists'
if (Object.hasOwn(foo, 'prop')) {
  console.log(foo.prop) // true - works irrespective of how the object is created.
}

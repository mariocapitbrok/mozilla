// However, Foo.prototype existing in baz's prototype chain doesn't imply baz was created using Foo as its constructor. For example, baz could be directly assigned with Foo.prototype as its prototype. In this case, if your code reads private fields of Foo from baz, it would still fail:

class Foo {
  // The `#value` field is a private class field, denoted by the `#` symbol, and is assigned the value of 'foo'.
  #value = 'foo'

  // The `getValue` static method takes an argument `x` and returns the `#value` of `x`.
  static getValue(x) {
    return x.#value
  }
}

// An object `baz` is created with the `Foo.prototype` object as its prototype, using the object literal syntax with the "__proto__" property.
const baz = { __proto__: Foo.prototype }

// The `isPrototypeOf` method is used to check if `Foo.prototype` is in the prototype chain of `baz`.
if (Foo.prototype.isPrototypeOf(baz)) {
  // The `getValue` method is called on `Foo` with `baz` as the argument, resulting in a `TypeError` since the `#value` field is a private class field and cannot be accessed outside of the class.
  console.log(Foo.getValue(baz)) // TypeError: Cannot read private member #value from an object whose class did not declare it
}

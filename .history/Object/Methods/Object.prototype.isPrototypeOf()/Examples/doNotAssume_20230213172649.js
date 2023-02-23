// However, Foo.prototype existing in baz's prototype chain doesn't imply baz was created using Foo as its constructor. For example, baz could be directly assigned with Foo.prototype as its prototype. In this case, if your code reads private fields of Foo from baz, it would still fail:

class Foo {
  #value = 'foo'
  static getValue(x) {
    return x.#value
  }
}

const baz = { __proto__: Foo.prototype }

if (Foo.prototype.isPrototypeOf(baz)) {
  console.log(Foo.getValue(baz)) // TypeError: Cannot read private member #value from an object whose class did not declare it
}

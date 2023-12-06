// The same applies to instanceof. If you need to read private fields in a secure way, offer a branded check method using in instead.

class Foo {
  #value = 'foo'
  static getValue(x) {
    return x.#value
  }
  static isFoo(x) {
    return #value in x
  }
}

const baz = { __proto__: Foo.prototype }

if (Foo.isFoo(baz)) {
  // Doesn't run, because baz is not a Foo
  console.log(Foo.getValue(baz))
}

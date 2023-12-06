// Using isPrototypeOf()

// This example demonstrates that Baz.prototype, Bar.prototype, Foo.prototype and Object.prototype exist in the prototype chain for object baz:

class Foo {}
class Bar extends Foo {}
class Baz extends Bar {}

const foo = new Foo()
const bar = new Bar()
const baz = new Baz()

// prototype chains:
// foo: Foo --> Object
// bar: Bar --> Foo --> Object
// baz: Baz --> Bar --> Foo --> Object
console.log(Baz.prototype.isPrototypeOf(baz)) // true
console.log(Baz.prototype.isPrototypeOf(bar)) // false
console.log(Baz.prototype.isPrototypeOf(foo)) // false
console.log(Bar.prototype.isPrototypeOf(baz)) // true
console.log(Bar.prototype.isPrototypeOf(foo)) // false
console.log(Foo.prototype.isPrototypeOf(baz)) // true
console.log(Foo.prototype.isPrototypeOf(bar)) // true
console.log(Object.prototype.isPrototypeOf(baz)) // true

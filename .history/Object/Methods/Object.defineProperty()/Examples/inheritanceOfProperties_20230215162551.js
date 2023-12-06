// Inheritance of properties
// If an accessor property is inherited, its get and set methods will be called when the property is accessed and modified on descendant objects. If these methods use a variable to store the value, this value will be shared by all objects.

function MyClass() {}

let value
Object.defineProperty(MyClass.prototype, 'x', {
  get() {
    return value
  },
  set(x) {
    value = x
  },
})

const a = new MyClass()
const b = new MyClass()
a.x = 1
console.log(b.x) // 1

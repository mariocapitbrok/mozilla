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

const a1 = new MyClass()
const b1 = new MyClass()
a1.x = 1
console.log(b1.x) // 1

// This can be fixed by storing the value in another property. In get and set methods, this points to the object which is used to access or modify the property.

function MyClass() {}

Object.defineProperty(MyClass.prototype, 'x', {
  get() {
    return this.storedX
  },
  set(x) {
    this.storedX = x
  },
})

const a = new MyClass()
const b = new MyClass()
a.x = 1
console.log(b.x) // undefined

// Unlike accessor properties, value properties are always set on the object itself, not on a prototype. However, if a non-writable value property is inherited, it is still prevented from being modified on the object.

function MyClass() {}

MyClass.prototype.x = 1
Object.defineProperty(MyClass.prototype, 'y', {
  writable: false,
  value: 1,
})

const a = new MyClass()
a.x = 2
console.log(a.x) // 2
console.log(MyClass.prototype.x) // 1
a.y = 2 // Ignored, throws in strict mode
console.log(a.y) // 1
console.log(MyClass.prototype.y) // 1

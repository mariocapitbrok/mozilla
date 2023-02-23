//The following code creates a copy of a given object.

//There are different ways to create a copy of an object. The following is just one way and is presented to explain how Array.prototype.forEach() works by using Object.* utility functions.

const copy = obj => {
  const copy = Object.create(Object.getPrototypeOf(obj))
  const propNames = Object.getOwnPropertyNames(obj)
  propNames.forEach(name => {
    const desc = Object.getOwnPropertyDescriptor(obj, name)
    Object.defineProperty(copy, name, desc)
  })
  return copy
}

const obj1 = { a: 1, b: 2 }
const obj2 = copy(obj1) // obj2 looks like obj1 now

console.log(obj1)
console.log(obj2)

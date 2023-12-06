// Warning for Deep Clone

// For deep cloning, we need to use alternatives, because Object.assign() copies property values.

// If the source value is a reference to an object, it only copies the reference value.

const obj1 = { a: 0, b: { c: 0 } }
const obj2 = Object.assign({}, obj1)
console.log(obj2) // { a: 0, b: { c: 0 } }

obj1.a = 1
console.log(obj1) // { a: 1, b: { c: 0 } }
console.log(obj2) // { a: 0, b: { c: 0 } }

obj2.a = 2
console.log(obj1) // { a: 1, b: { c: 0 } }
console.log(obj2) // { a: 2, b: { c: 0 } }

obj2.b.c = 3
console.log(obj1) // { a: 1, b: { c: 3 } }
console.log(obj2) // { a: 2, b: { c: 3 } }

// Deep Clone
const obj3 = { a: 0, b: { c: 0 } }
const obj4 = JSON.parse(JSON.stringify(obj3))
obj3.a = 4
obj3.b.c = 4
console.log(obj4) // { a: 0, b: { c: 0 } }

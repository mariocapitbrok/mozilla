// Using Object.getOwnPropertyNames()

const arr = ['a', 'b', 'c']
console.log(Object.getOwnPropertyNames(arr).sort())
// ["0", "1", "2", "length"]

// Array-like object
const obj = { 0: 'a', 1: 'b', 2: 'c' }
console.log(Object.getOwnPropertyNames(obj).sort())
// ["0", "1", "2"]

Object.getOwnPropertyNames(obj).forEach((val, idx, array) => {
  console.log(`${val} -> ${obj[val]}`)
})
// 0 -> a
// 1 -> b
// 2 -> c

// non-enumerable property
const myObj = Object.create(
  {},
  {
    getFoo: {
      value() {
        return this.foo
      },
      enumerable: false,
    },
  }
)
myObj.foo = 1

console.log(Object.getOwnPropertyNames(myObj).sort()) // ["foo", "getFoo"]

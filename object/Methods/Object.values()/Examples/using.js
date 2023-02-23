// Using Object.values()

const obj = { foo: 'bar', baz: 42 }
console.log(Object.values(obj)) // ['bar', 42]

// Array-like object
const arrayLikeObj1 = { 0: 'a', 1: 'b', 2: 'c' }
console.log(Object.values(arrayLikeObj1)) // ['a', 'b', 'c']

// Array-like object with random key ordering
// When using numeric keys, the values are returned in the keys' numerical order
const arrayLikeObj2 = { 100: 'a', 2: 'b', 7: 'c' }
console.log(Object.values(arrayLikeObj2)) // ['b', 'c', 'a']

// getFoo is a non-enumerable property
const myObj = Object.create(
  {},
  {
    getFoo: {
      value() {
        return this.foo
      },
    },
  }
)
myObj.foo = 'bar'
console.log(Object.values(myObj)) // ['bar']

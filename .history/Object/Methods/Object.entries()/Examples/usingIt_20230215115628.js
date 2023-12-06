// Using Object.entries()

const obj = { foo: 'bar', baz: 42 }
console.log(Object.entries(obj)) // [ ['foo', 'bar'], ['baz', 42] ]

// Array-like object
const obj = { 0: 'a', 1: 'b', 2: 'c' }
console.log(Object.entries(obj)) // [ ['0', 'a'], ['1', 'b'], ['2', 'c'] ]

// Array-like object with random key ordering
const anObj = { 100: 'a', 2: 'b', 7: 'c' }
console.log(Object.entries(anObj)) // [ ['2', 'b'], ['7', 'c'], ['100', 'a'] ]

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
console.log(Object.entries(myObj)) // [ ['foo', 'bar'] ]

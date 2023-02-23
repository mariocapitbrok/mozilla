// Using Object.getOwnPropertyDescriptor

let o, d

o = {
  get foo() {
    return 17
  },
}
d = Object.getOwnPropertyDescriptor(o, 'foo')
console.log(d)
// {
//   configurable: true,
//   enumerable: true,
//   get: [Function: get foo],
//   set: undefined
// }

o = { bar: 42 }
d = Object.getOwnPropertyDescriptor(o, 'bar')
console.log(d)
// {
//   configurable: true,
//   enumerable: true,
//   value: 42,
//   writable: true
// }

o = { [Symbol.for('baz')]: 73 }
d = Object.getOwnPropertyDescriptor(o, Symbol.for('baz'))
console.log(d)
// {
//   configurable: true,
//   enumerable: true,
//   value: 73,
//   writable: true
// }

o = {}
Object.defineProperty(o, 'qux', {
  value: 8675309,
  writable: false,
  enumerable: false,
})
d = Object.getOwnPropertyDescriptor(o, 'qux')
console.log(d)
// {
//   value: 8675309,
//   writable: false,
//   enumerable: false,
//   configurable: false
// }

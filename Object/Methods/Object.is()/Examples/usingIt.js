// Using Object.is()

// Case 1: Evaluation result is the same as using ===
const result1 = Object.is(25, 25) // true
const result2 = Object.is('foo', 'foo') // true
const result3 = Object.is('foo', 'bar') // false
const result4 = Object.is(null, null) // true
const result5 = Object.is(undefined, undefined) // true
//const result6 = Object.is(window, window) // true
const result7 = Object.is([], []) // false
const foo = { a: 1 }
const bar = { a: 1 }
const sameFoo = foo
const result8 = Object.is(foo, foo) // true
const result9 = Object.is(foo, bar) // false
const result10 = Object.is(foo, sameFoo) // true

// Case 2: Signed zero
const result11 = Object.is(0, -0) // false
const result12 = Object.is(+0, -0) // false
const result13 = Object.is(-0, -0) // true

// Case 3: NaN
const result14 = Object.is(NaN, 0 / 0) // true
const result15 = Object.is(NaN, Number.NaN) // true

console.log('Case 1: Evaluation result is the same as using ===')
console.log(result1)
console.log(result2)
console.log(result3)
console.log(result4)
console.log(result5)
console.log('Object.is(window, window) // true')
console.log(result7)
console.log(result8)
console.log(result9)
console.log(result10)

console.log('Case 2: Signed zero')
console.log(result11)
console.log(result12)
console.log(result13)

console.log('Case 3: NaN')
console.log(result14)
console.log(result15)

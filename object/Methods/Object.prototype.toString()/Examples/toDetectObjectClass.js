// Using toString() to detect object class
// toString() can be used with every object and (by default) allows you to get its class.

const toString = Object.prototype.toString

const resultA = toString.call(new Date()) // [object Date]
const resultB = toString.call(new String()) // [object String]
// Math has its Symbol.toStringTag
const resultC = toString.call(Math) // [object Math]

const resultD = toString.call(undefined) // [object Undefined]
const resultE = toString.call(null) // [object Null]

console.log(resultA)
console.log(resultB)
console.log(resultC)
console.log(resultD)
console.log(resultE)

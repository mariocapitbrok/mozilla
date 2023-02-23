/*
Using unary plus on objects
Unary plus performs number coercion on its operand, which, for most objects without @@toPrimitive, means calling its valueOf(). However, if the object doesn't have a custom valueOf() method, the base implementation will cause valueOf() to be ignored and the return value of toString() to be used instead.
*/

const result1 = +new Date() // the current timestamp; same as new Date().getTime()
const result2 = +{} // NaN (toString() returns "[object Object]")
const result3 = +[] // 0 (toString() returns an empty string list)
const result4 = +[1] // 1 (toString() returns "1")
const result5 = +[1, 2] // NaN (toString() returns "1,2")
const result6 = +new Set([1]) // NaN (toString() returns "[object Set]")
const result7 = +{ valueOf: () => 42 } // 42

console.log(result1)
console.log(result2)
console.log(result3)
console.log(result4)
console.log(result5)
console.log(result6)
console.log(result7)

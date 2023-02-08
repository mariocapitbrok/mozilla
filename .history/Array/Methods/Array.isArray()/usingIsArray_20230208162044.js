// all following calls return true
const result = Array.isArray([])
const resultA = Array.isArray([1])
const resultB = Array.isArray(new Array())
const resultC = Array.isArray(new Array('a', 'b', 'c', 'd'))
const resultD = Array.isArray(new Array(3))
// Little known fact: Array.prototype itself is an array:
const resultE = Array.isArray(Array.prototype)

// all following calls return false
const resultF = Array.isArray()
const resultG = Array.isArray({})
const resultH = Array.isArray(null)
const resultI = Array.isArray(undefined)
const resultJ = Array.isArray(17)
const resultK = Array.isArray('Array')
const resultL = Array.isArray(true)
const resultM = Array.isArray(false)
const resultN = Array.isArray(new Uint8Array(32))
// This is not an array, because it was not created using the array literal syntax or the Array constructor
const resultO = Array.isArray([ __proto__: Array.prototype ])

// all following calls return true
console.log(resultA)
console.log(resultB)
console.log(resultC)
console.log(resultD)
console.log(resultE)

// all following calls return false
console.log(resultF)
console.log(resultG)
console.log(resultH)
console.log(resultI)
console.log(resultJ)
console.log(resultK)
console.log(resultL)
console.log(resultM)
console.log(resultN)
console.log(resultO)

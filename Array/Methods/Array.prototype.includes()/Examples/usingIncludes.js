/*
The includes() method compares searchElement to elements of the array using the SameValueZero algorithm. Values of zero are all considered to be equal, regardless of sign. (That is, -0 is equal to 0), but false is not considered to be the same as 0. NaN can be correctly searched for.

When used on sparse arrays, the includes() method iterates empty slots as if they have the value undefined.

The includes() method is generic. It only expects the this value to have a length property and integer-keyed properties.
*/

const resultA = [1, 2, 3].includes(2) // true
const resultB = [1, 2, 3].includes(4) // false
const resultC = [1, 2, 3].includes(3, 3) // false
const resultD = [1, 2, 3].includes(3, -1) // true
const resultE = [1, 2, NaN].includes(NaN) // true
const resultF = ['1', '2', '3'].includes(3) // false

console.log(resultA)
console.log(resultB)
console.log(resultC)
console.log(resultD)
console.log(resultE)
console.log(resultF)

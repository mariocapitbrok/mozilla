//Concatenating array-like objects with Symbol.isConcatSpreadable
//concat does not treat all array-like objects as arrays by default — only if Symbol.isConcatSpreadable is set to a truthy value (e.g. true).

const obj1 = { 0: 1, 1: 2, 2: 3, length: 3 }
const obj2 = { 0: 1, 1: 2, 2: 3, length: 3 }
console.log([0].concat(obj1, obj2))
// [ 0, { '0': 1, '1': 2, '2': 3, length: 3 }, 1, 2, 3 ]

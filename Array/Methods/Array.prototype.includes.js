// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes

const array1 = [1, 2, 3]

console.log(array1.includes(2))
// expected output: true

const pets = ['cat', 'dog', 'bat']

console.log(pets.includes('cat'))
// expected output: true

console.log(pets.includes('at'))
// expected output: false

console.log(array1.includes(2)) // true
console.log(array1.includes(4)) // false
console.log(array1.includes(3, 3)) // false
console.log(array1.includes(3, -1)) // true
console.log([(1, 2, NaN)].includes(NaN)) // true
console.log([('1', '2', '3')].includes(3)) // false

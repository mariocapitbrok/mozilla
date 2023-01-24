// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

const numbers = [1, 4, 9]
const roots = numbers.map(num => Math.sqrt(num))

console.log(numbers)
console.log(roots)
// roots is now     [1, 2, 3]
// numbers is still [1, 4, 9]

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill

const array1 = [1, 2, 3, 4]

// fill with 0 from position 2 until position 4
console.log(array1.fill(0, 2, 4))
// expected output: [1, 2, 0, 0]

// fill with 5 from position 1
console.log(array1.fill(5, 1))
// expected output: [1, 5, 5, 5]

console.log(array1.fill(7))
// expected output: [7, 7, 7, 7]

// Syntax
/* fill(value)
fill(value, start)
fill(value, start, end) */

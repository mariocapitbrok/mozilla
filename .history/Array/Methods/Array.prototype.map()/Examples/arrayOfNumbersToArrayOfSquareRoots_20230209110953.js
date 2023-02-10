//The following code takes an array of numbers and creates a new array containing the square roots of the numbers in the first array.

const numbers = [1, 4, 9]
const roots = numbers.map(num => Math.sqrt(num))

// roots is now     [1, 2, 3]
// numbers is still [1, 4, 9]

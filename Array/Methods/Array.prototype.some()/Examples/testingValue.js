//The following example tests whether any element in the array is bigger than 10.

function isBiggerThan10(element, index, array) {
  return element > 10
}

const resultA = [2, 5, 8, 1, 4].some(isBiggerThan10) // false
const resultB = [12, 5, 8, 1, 4].some(isBiggerThan10) // true

console.log(resultA)
console.log(resultB)

//Arrow functions provide a shorter syntax for the same test.

const resultC = [2, 5, 8, 1, 4].some(x => x > 10) // false
const resultD = [12, 5, 8, 1, 4].some(x => x > 10) // true

console.log(resultC)
console.log(resultD)

//The following example tests whether any element in the array is bigger than 10.

function isBiggerThan10(element, index, array) {
  return element > 10
}

const resultA = [2, 5, 8, 1, 4].some(isBiggerThan10) // false
const resultB = [12, 5, 8, 1, 4].some(isBiggerThan10) // true

console.log(resultA)
console.log(resultB)

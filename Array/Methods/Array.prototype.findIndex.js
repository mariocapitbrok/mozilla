// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex

/* const array1 = [5, 12, 8, 130, 44]

const isLargeNumber = element => element > 13

console.log(array1.findIndex(isLargeNumber))
// expected output: 3 */

//Find the index of a prime number in an array
function isPrime(element) {
  if (element % 2 === 0 || element < 2) {
    return false
  }
  for (let factor = 3; factor <= Math.sqrt(element); factor += 2) {
    if (element % factor === 0) {
      return false
    }
  }
  return true
}

console.log([4, 6, 8, 9, 12].findIndex(isPrime)) // -1, not found
console.log([4, 6, 7, 9, 12].findIndex(isPrime)) // 2 (array[2] is 7)

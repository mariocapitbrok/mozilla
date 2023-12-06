//The following example finds the last element in the array that is a prime number (or returns undefined if there is no prime number):

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

console.log([4, 6, 8, 12].findLast(isPrime)) // undefined, not found
console.log([4, 5, 7, 8, 9, 11, 12].findLast(isPrime)) // 11

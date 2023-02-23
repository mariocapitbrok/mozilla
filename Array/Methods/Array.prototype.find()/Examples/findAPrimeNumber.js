//The following example finds an element in the array that is a prime number (or returns undefined if there is no prime number):

function isPrime(element, index, array) {
  let start = 2
  while (start <= Math.sqrt(element)) {
    if (element % start++ < 1) {
      return false
    }
  }
  return element > 1
}

console.log([4, 6, 8, 12].find(isPrime)) // undefined, not found
console.log([4, 5, 8, 12].find(isPrime)) // 5

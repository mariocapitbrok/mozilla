// The following example returns the index of the first element in the array that is a prime number, or -1 if there is no prime number.

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

const a = [4, 6, 8, 9, 12]
const b = [4, 6, 7, 9, 12]

resultA = a.findIndex(isPrime)
resultB = b.findIndex(isPrime)

console.log(resultA) // -1, not found
console.log(resultB) // 2 (array[2] is 7)

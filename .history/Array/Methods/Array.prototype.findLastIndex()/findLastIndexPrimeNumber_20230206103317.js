// The following example returns the index of the last element in the array that is a prime number, or -1 if there is no prime number.

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

const a = [4, 6, 8, 12]
const b = [4, 5, 7, 8, 9, 11, 12]

resultA = a.findLastIndex(isPrime)
resultB = b.findLastIndex(isPrime)

console.log(resultA) // -1, not found
console.log(resultB) // 5 (array[5] is 11)

//The following example returns all prime numbers in the array:

const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

function isPrime(num) {
  if (num <= 1) return false
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false
    }
  }
  return true
}

console.log(array.filter(isPrime)) // [2, 3, 5, 7, 11, 13]

/*
This function uses a for loop to check if num is evenly divisible by any number between 2 and num-1. If num is found to be divisible by any of these numbers, it is not prime and the function returns false. If the loop completes without finding a divisor, the number is prime and the function returns true.

Note that this is not the most efficient way to check for primes, especially for very large numbers. There are more optimized algorithms for finding prime numbers, but this function is suitable for small to medium sized numbers.
*/

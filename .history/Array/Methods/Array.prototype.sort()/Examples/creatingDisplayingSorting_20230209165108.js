//The following example creates four arrays and displays the original array, then the sorted arrays. The numeric arrays are sorted without a compare function, then sorted using one.

'use strict'

const stringArray = ['Blue', 'Humpback', 'Beluga']
const numberArray = [40, 1, 5, 200]
const numericStringArray = ['80', '9', '700']
const mixedNumericArray = ['80', '9', '700', 40, 1, 5, 200]

function compareNumbers(a, b) {
  return a - b
}

const resultA = stringArray.join() // 'Blue,Humpback,Beluga'
const resultB = stringArray.sort() // ['Beluga', 'Blue', 'Humpback']

const resultC = numberArray.join() // '40,1,5,200'
const resultD = numberArray.sort() // [1, 200, 40, 5]
const resultE = numberArray.sort(compareNumbers) // [1, 5, 40, 200]

const resultF = numericStringArray.join() // '80,9,700'
const resultG = numericStringArray.sort() // ['700', '80', '9']
const resultH = numericStringArray.sort(compareNumbers) // ['9', '80', '700']

const resultI = mixedNumericArray.join() // '80,9,700,40,1,5,200'
const resultJ = mixedNumericArray.sort() // [1, 200, 40, 5, '700', '80', '9']
const resultK = mixedNumericArray.sort(compareNumbers) // [1, 5, '9', 40, '80', 200, '700']

console.log(resultA)
console.log(resultB)

console.log(resultC)
console.log(resultD)
console.log(resultE)

console.log(resultF)
console.log(resultG)
console.log(resultH)

console.log(resultI)
console.log(resultJ)
console.log(resultK)
